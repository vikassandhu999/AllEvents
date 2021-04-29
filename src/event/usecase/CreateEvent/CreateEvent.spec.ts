import dotenv from 'dotenv';
import { mongooseConnection } from '@app/infra/db/mongoose/connection';
import createEventUseCase from 'event/usecase/CreateEvent/index';
import {
  CreateEventResponse,
  VenueDoesNotExist,
} from 'event/usecase/CreateEvent/types';

dotenv.config();

const fakeEvent = {
  eventName: 'The Vikas Sandhu Showdsfgdsfgdsfgdfg',
  poster: 'https://miro.medium.com/max/1304/1*i6TZ_7vZqsVN6jRnjCw8bA.jpeg',
  venueId: 'f0951df4-2c65-48ac-bc79-65238ae1ea21',
  ticketPrice: 600,
  ticketPriceCurrency: 'USD',
  maxAllowedTickets: 20,
  description:
    'This is very great show by a very great person so everyone has to attend this show',
  language: 'hindi',
  category: 'Software development',
  eventTime: new Date(),
  duration: 3600,
};

describe('CreateEventUseCase', () => {
  beforeAll(async () => {
    const mongoUrl = process.env.MONGO_URL_DEV as string;
    await mongooseConnection(mongoUrl);
  });
  it('create event successfully', async function () {
    try {
      const response = await createEventUseCase.run(fakeEvent, {
        isAuthenticated: true,
        userId: '1cf7e335-7260-4bc9-90d8-5db54631a14e',
      });
      expect(response).toEqual(new CreateEventResponse());
    } catch (e) {
      console.log(e);
      fail('Test failed');
    }
  });

  it('create throw error VenueDoesNotExist', async function () {
    try {
      const response = await createEventUseCase.run(
        { ...fakeEvent, venueId: 'asjfdogfiuqgasgsaf' },
        {
          isAuthenticated: true,
          userId: '1cf7e335-7260-4bc9-90d8-5db54631a14e',
        },
      );
      fail('Test failed');
    } catch (e) {
      console.log(e);
      expect(e).toEqual(new VenueDoesNotExist());
    }
  });
});
