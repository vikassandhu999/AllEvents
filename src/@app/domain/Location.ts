export interface ILocation {
  lat: number;
  lng: number;
}

export class Location {
  state: ILocation;
  constructor(props: ILocation) {
    this.state = props;
  }

  get lat(): number {
    return this.state.lat;
  }

  get lng(): number {
    return this.state.lng;
  }
}
