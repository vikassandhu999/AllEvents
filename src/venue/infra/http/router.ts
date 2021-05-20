import express, { Request } from 'express';
import { authMiddleware } from 'user/infra/http/middlewares';
import { createVenueUseCase } from 'venue/usecase/CreateVenue';
import { getVenueWithinDistance } from 'venue/usecase/GetWithinDistance';
import venueSearchUseCase from 'venue/usecase/Search';

const venueRouter = express.Router();

venueRouter.post(
  '/venue',
  authMiddleware.getUserContext(),
  async (req, res, next) => {
    try {
      console.log(req.body);
      const response = await createVenueUseCase.run(req.body, {});
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
);

venueRouter.get('/venue/get-with-distance', async (req: Request, res, next) => {
  try {
    const lng = parseFloat(req.query.lng as string);
    const lat = parseFloat(req.query.lng as string);
    const maxDistance = parseFloat(req.query.maxDistance as string);

    const response = await getVenueWithinDistance.run(req.body, {});
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

venueRouter.get('/venue/search', async (req: Request, res, next) => {
  try {
    const query = req.query.query as string;

    const response = await venueSearchUseCase.run({ query }, {});
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

export { venueRouter };
