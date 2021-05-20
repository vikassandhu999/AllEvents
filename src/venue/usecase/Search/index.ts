import { venueRepository } from '../../repositories';
import { VenueSearchUseCase } from 'venue/usecase/Search/usecase';

const venueSearchUseCase = new VenueSearchUseCase(venueRepository);

export default venueSearchUseCase;
