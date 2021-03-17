import express, {Request} from "express";
import {authMiddleware} from "../../../User/infra/http/middlewares";
import {createVenueUseCase} from "../../usecase/CreateVenue";
import {getVenueWithinDistance} from "../../usecase/GetWithinDistance";

const venueRouter = express.Router();

venueRouter.post("/venue",
    authMiddleware.getUserContext(),
    async (req, res, next) => {
        try {
            console.log(req.body);
            const response = await createVenueUseCase.run(req.body, {});
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    });

venueRouter.post("/venue/get-with-distance",
    async (req: Request, res, next) => {
        try {
            // const lng = parseFloat(req.params.lng);
            // const lat = parseFloat(req.params.lng);
            // const maxDistance = parseFloat(req.params.maxDistance);

            const response = await getVenueWithinDistance.run(req.body, {});
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    });

export {
    venueRouter
}