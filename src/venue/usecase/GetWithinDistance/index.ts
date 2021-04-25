import { GetWithinDistanceUseCase } from './usecase';
import { venueRepository } from '../../repositories';

const getVenueWithinDistance = new GetWithinDistanceUseCase(venueRepository);

export { getVenueWithinDistance };
