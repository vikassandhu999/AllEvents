import { mongooseConnection } from '../src/@app/infra/db/mongoose/connection';
import mongoose from 'mongoose';

async function main() {
  const mongooseUrl = '';
  const connection = await mongooseConnection(mongooseUrl);

  // console.log(await connection.connection.db.listCollections().toArray());

  // //@ts-ignore
  await connection.connection.dropCollection('events');
  // connection.dropCollection('event');
  console.log('Success');
}

main().catch(console.log);
