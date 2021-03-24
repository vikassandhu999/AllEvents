import {Performer} from "../domain/Performer";

export class PerformerMapper {
    public static toDomain(performerModel: any): Performer {
        return new Performer({
            name: performerModel.name,
            imgAvatar: performerModel.img_avatar,
            profession: performerModel.profession,
            about: performerModel.about
        });
    }

    public static toPersistence(performer: Performer): any {
       return {
           name: performer.name,
           img_avatar: performer.imgAvatar,
           profession: performer.profession,
           about: performer.about
       }
    }
}