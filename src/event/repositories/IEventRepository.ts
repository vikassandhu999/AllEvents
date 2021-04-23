import Event from "event/domain/Event";

export default interface IEventRepository {
    save(event : Event): Promise<void>

    getByEventId(eventId : string) : Promise<Event | null>
    getByUserId(userId : string) : Promise<Array<Event>>

    deleteOne(userId: string): Promise<void>
    deleteAll(): Promise<void>
}