import { UseCase } from '@app/core/Usecase';
import IEventRepository from 'event/repositories/IEventRepository';
import { assert } from '@app/core/Assert';
import Event, { IEvent } from 'event/domain/Event';
import {
  EventDoesNotExist,
  GetEventDTO,
  GetEventResponse,
} from 'event/usecase/GetEventById/types';
import EventMapper from 'event/mappers/EventMapper';

export default class GetEventUseCase extends UseCase<
  GetEventDTO,
  GetEventResponse
> {
  protected inputConstraints = {
    eventId: { presence: true },
  };

  private eventRepository: IEventRepository;

  constructor(eventRepository: IEventRepository) {
    super();
    this.eventRepository = eventRepository;
  }

  protected async runImpl(
    params: GetEventDTO,
    context: any,
  ): Promise<GetEventResponse> {
    const { eventId } = params;

    const event: Event | null = await this.eventRepository.getByEventId(
      eventId,
    );

    assert(!!event, new EventDoesNotExist());

    return new GetEventResponse(EventMapper.toDTO(event) as IEvent);
  }
}
