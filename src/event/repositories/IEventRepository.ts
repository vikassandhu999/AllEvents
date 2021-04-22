import Event from "event/domain/Event";

export default interface IEventRepository {
    save(event : Event): Promise<Event>

    getByEventId(eventId : string) : Promise<Event>
    getByUserId(userId : string) : Promise<Array<Event>>

    deleteOne(userId: string): Promise<void>
    deleteAll(): Promise<void>
}