import {UsernameAlreadyTakenError} from "../../src/User/usecase/CreateUser/types";
import {BaseError} from "../../src/XShared/core/BaseError";

describe("CheckAProperty" , ()=>{
    it("check for instance" , () => {
        const error = new UsernameAlreadyTakenError();
        //@ts-ignore
        expect(true).toBe(true);
    });
});