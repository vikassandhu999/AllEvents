export interface IPerformer {
    stageName:  string;
    about: string;
}

export class Performer {
    state : IPerformer;
    constructor(props:IPerformer) {
        this.state = props;
    }

    get stageName() : string {
        return this.state.stageName;
    }

    get about() : string {
        return this.state.about;
    }
}