import express, { Request } from 'express';
import createEventUseCase from 'event/usecase/CreateEvent';
import { authMiddleware } from 'user/infra/http/middlewares';
import { UserContext } from 'user/domain/UserContext';
import getEventByIdUseCase from 'event/usecase/GetEventById';
import createBookingUseCase from 'event/usecase/CreateBooking';

const eventRouter = express.Router();

//this one is an experimental route
//we are working on different auth style for better UX
eventRouter.post(
  '/event',
  authMiddleware.getUserContext(),
  async (req: Request, res, next) => {
    try {
      const response = await createEventUseCase.run(
        req.body,
        req.context as UserContext,
      );
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
);

eventRouter.get(
  '/event/:id',
  authMiddleware.getUserContext(),
  async (req: Request, res, next) => {
    try {
      const response = await getEventByIdUseCase.run(
        { eventId: req.params.id },
        req.context as UserContext,
      );
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
);

eventRouter.post(
  '/event/:id/booking',
  authMiddleware.getUserContext(),
  async (req: Request, res, next) => {
    try {
      const response = await createBookingUseCase.run(
        { eventId: req.params.id },
        req.context as UserContext,
      );
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
);

export { eventRouter };
