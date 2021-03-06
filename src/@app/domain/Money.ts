export interface IMoney {
  currency: string;
  value: number;
}

export class Money {
  state: IMoney;
  constructor(props: IMoney) {
    this.state = {
      currency: props.currency,
      value: props.value,
    };
  }

  get currency(): string {
    return this.state.currency;
  }

  get value(): number {
    return this.state.value;
  }

  toDTO(): IMoney {
    return this.state;
  }
}
