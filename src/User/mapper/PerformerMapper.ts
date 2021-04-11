import {Performer} from "../domain/Performer";

export class UserMapper {
    public static toDomain(performerModel: any): Performer {
        return new Performer({
            about: performerModel.about,
            stageName: performerModel.stage_name
        });
    }

    public static toPersistence(performer: Performer): any {
        return {
            about: performer.about,
            stageName: performer.stageName
        }
    }
}