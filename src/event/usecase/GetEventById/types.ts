import { BaseError } from '@app/core/BaseError';
import { HttpErrors } from '@app/infra/http/errorCode';
import Event, { IEvent } from 'event/domain/Event';

export type GetEventDTO = {
  eventId: string;
};

export class GetEventResponse {
  status: string = 'success';
  data: IEvent;
  constructor(data: IEvent) {
    this.data = data;
  }
}

export class EventDoesNotExist extends BaseError {
  constructor() {
    super("Event doesn't exist", HttpErrors.NOT_FOUND, {
      event: "event id doesn't exist",
    });
  }
}
