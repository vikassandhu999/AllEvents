export type CreateVenueDTO = {
    venueName : string;
    media: [string];
    lat : number;
    lng: number;
}

export  class CreateVenueResponse {
    status : string = "success";
}