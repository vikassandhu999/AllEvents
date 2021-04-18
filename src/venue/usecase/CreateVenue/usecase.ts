import {UseCase} from "../../../@app/core/Usecase";
import {CreateVenueDTO, CreateVenueResponse} from "./types";
import {IVenueRepository} from "../../repositories/IVenueRepository";
import {Venue} from "../../domain/Venue";
import {Location} from "../../../@app/domain/Location";

export class CreateVenueUseCase extends UseCase<CreateVenueDTO, CreateVenueResponse> {
    protected inputConstraints = {
        venueName: {
            presence: true
        },
        media: {
            presence: true
        },
        lng: {
            presence: true
        },
        lat: {
            presence: true
        },
    };
    private readonly venueRepository: IVenueRepository;

    constructor(venueRepository: IVenueRepository) {
        super();
        this.venueRepository = venueRepository;
    }

    protected async runImpl(params: CreateVenueDTO, context: any): Promise<CreateVenueResponse> {
        const {venueName,media,lng,lat} = params;

        const location = new Location({lat,lng});

        const venue = new Venue({venueName,location,media});

        await this.venueRepository.save(venue);

        return new CreateVenueResponse();
    }

}