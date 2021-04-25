// import {v4 as uuid} from "uuid";
// require("dotenv").config();
// import {mongooseConnection} from "../../@app/infra/db/mongoose/connection";
// import {venue} from "../domain/venue";
//
// const eventId = uuid();
//
// const fakeVenue = new venue({
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
//         // user.createdAt = user.createdAt.getMilliseconds();
//         expect(user).toEqual(fakeUser);
//     });
//
//
//     it('should delete the user by id', async function () {
//         await venu.deleteOne(userId);
//         const deletedCustomer = await venu.getById(userId);
//         expect(deletedCustomer).toBe(null);
//     });
//
// });
