import dotenv from "dotenv";
import {mongooseConnection} from "../../../XShared/infra/db/mongoose/connection";
import {createUserUseCase} from "./index";
import {CreateUserResponse, EmailAlreadyExistError} from "./types";
import {userRepository} from "../../repositories";
dotenv.config();

const fakeUserDTO = {
    fullName: "Vikas Sandhu",
    imgAvatar : "https://miro.medium.com/fit/c/262/262/2*jqzCm0lwcJV7QGadqxS3hg.jpeg",
    email: "kai10@gmail.com",
    password: "chistagram"
};

describe("CreateUser" , () => {

    beforeAll(async () => {
        const mongoUrl = process.env.MONGO_URL_DEV as string;
        await mongooseConnection(mongoUrl);
    });

    it('should create user successfully', async function () {
        try {
            const response = await createUserUseCase.run(fakeUserDTO,{});
            expect(response).toEqual(new CreateUserResponse());
        } catch (e) {
            console.log(e);
            fail("Test failed");
        }
    });

    it('should return email already exists error', async function () {
        try {
            const response = await createUserUseCase.run(fakeUserDTO,{});
            fail("Test failed");
        } catch (e) {
            console.log(e);
            expect(e).toEqual(new EmailAlreadyExistError());
        }
    });

    afterAll(async () => {
        const user = await userRepository.getByEmail(fakeUserDTO.email);
        if(!!user) {
            await userRepository.deleteOne(user?.userId);
        }
    });
});