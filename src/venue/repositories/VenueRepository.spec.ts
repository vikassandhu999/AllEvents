require('dotenv').config();
import { mongooseConnection } from '../../@app/infra/db/mongoose/connection';
import { venueRepository } from 'venue/repositories/index';
//
// const eventId = uuid();
//
// const fakeVenue = new venue({
//
// });

describe('VenueRepository', () => {
  let connection: any;
  let db;

  beforeAll(async () => {
    connection = await mongooseConnection(process.env.MONGO_URL_DEV as string);
  });

  afterAll(async () => {
    // @ts-ignore
    await connection.close();
  });

  // it("save", async () => {
  //     await venu.save(fakeUser);
  // });
  //
  //
  // it('getById', async () => {
  //     let user = await venu.getById(userId);
  //     expect(user).not.toBe(null);
  //     console.log(user);
  //     // user.createdAt = user.createdAt.getMilliseconds();
  //     expect(user).toEqual(fakeUser);
  // });
  //
  //
  // it('should delete the user by id', async function () {
  //     await venu.deleteOne(userId);
  //     const deletedCustomer = await venu.getById(userId);
  //     expect(deletedCustomer).toBe(null);
  // });

  it('fullTextSearch', async () => {
    let result = await venueRepository.search('br');
    expect(result).not.toBe(null);
    console.log(result);
  });
});
