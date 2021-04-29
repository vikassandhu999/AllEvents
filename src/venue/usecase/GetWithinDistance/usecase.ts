import {
  GetWithinDistanceDTO,
  GetWithinDistanceResponse,
} from 'venue/usecase/GetWithinDistance/types';
import { UseCase } from '@app/core/Usecase';
import { IVenueRepository } from 'venue/repositories/IVenueRepository';
import { Location } from '@app/domain/Location';
import { VenueMapper } from 'venue/mapper/VenueMapper';

export class GetWithinDistanceUseCase extends UseCase<
  GetWithinDistanceDTO,
  GetWithinDistanceResponse
> {
  protected inputConstraints = {
    maxDistance: {
      presence: true,
    },
    lng: {
      presence: true,
    },
    lat: {
      presence: true,
    },
  };
  private readonly venueRepository: IVenueRepository;

  constructor(venueRepository: IVenueRepository) {
    super();
    this.venueRepository = venueRepository;
  }

  protected async runImpl(
    params: GetWithinDistanceDTO,
    context: any,
  ): Promise<GetWithinDistanceResponse> {
    const { maxDistance, lng, lat } = params;

    const location = new Location({ lat, lng });

    const venues = await this.venueRepository.getWithDistance(
      location,
      maxDistance,
    );

    return new GetWithinDistanceResponse(
      venues.map((venue) => VenueMapper.toDTO(venue)),
    );
  }
}
