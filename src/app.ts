require('dotenv').config();

import { app } from '@app/infra/http';

import { mongooseConnection } from '@app/infra/db/mongoose/connection';

const mongoUrl = process.env.MONGO_URL_DEV as string;
const port = process.env.PORT;

async function main() {
  await mongooseConnection(mongoUrl);
  app.listen(port);
}

main()
  .then((r) => console.log('Service has been started successfully'))
  .catch((error) => console.log(error));
