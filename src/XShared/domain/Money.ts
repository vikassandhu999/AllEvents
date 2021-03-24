export interface IMoney {
    currency: string;
    value: number;
}

export class Money {
    state : IMoney;
    constructor(props : IMoney) {
        this.state = {
            currency : props.currency,
            value: props.value
        }
    }
}