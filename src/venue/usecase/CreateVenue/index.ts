import {CreateVenueUseCase} from "./usecase";
import {venueRepository} from "../../repositories";

const createVenueUseCase = new CreateVenueUseCase(venueRepository);

export {
    createVenueUseCase
}