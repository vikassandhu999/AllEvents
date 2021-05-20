import { UseCase } from '@app/core/Usecase';
import { IVenueRepository } from 'venue/repositories/IVenueRepository';
import { Location } from '@app/domain/Location';
import { VenueMapper } from 'venue/mapper/VenueMapper';
import {
  VenueSearchDTO,
  VenueSearchResponse,
} from 'venue/usecase/Search/types';

export class VenueSearchUseCase extends UseCase<
  VenueSearchDTO,
  VenueSearchResponse
> {
  protected inputConstraints = {
    query: {
      presence: true,
    },
  };
  private readonly venueRepository: IVenueRepository;

  constructor(venueRepository: IVenueRepository) {
    super();
    this.venueRepository = venueRepository;
  }

  protected async runImpl(
    params: VenueSearchDTO,
    context: any,
  ): Promise<VenueSearchResponse> {
    const { query } = params;

    const venues = await this.venueRepository.search(query);

    return new VenueSearchResponse(
      venues.map((venue) => VenueMapper.toDTO(venue)),
    );
  }
}
