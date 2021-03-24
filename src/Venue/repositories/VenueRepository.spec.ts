// import {v4 as uuid} from "uuid";
// require("dotenv").config();
// import {mongooseConnection} from "../../XShared/infra/db/mongoose/connection";
// import {Venue} from "../domain/Venue";
//
// const eventId = uuid();
//
// const fakeVenue = new Venue({
//
// });
//
// describe('VenueRepository', () => {
//     let connection : any;
//     let db;
//
//     beforeAll(async () => {
//         connection = await mongooseConnection(process.env.MONGO_URL_DEV as string);
//     });
//
//     afterAll(async ()=>{
//         // @ts-ignore
//         await connection.close();
//     })
//
//     it("save", async () => {
//         await venu.save(fakeUser);
//     });
//
//
//     it('getById', async () => {
//         let user = await venu.getById(userId);
//         expect(user).not.toBe(null);
//         console.log(user);
//         // User.createdAt = User.createdAt.getMilliseconds();
//         expect(user).toEqual(fakeUser);
//     });
//
//
//     it('should delete the User by id', async function () {
//         await venu.deleteOne(userId);
//         const deletedCustomer = await venu.getById(userId);
//         expect(deletedCustomer).toBe(null);
//     });
//
// });