export interface IPerformer {
    name:  string;
    imgAvatar: string;
    profession: string;
    about: string;
}

export class Performer {
   state : IPerformer;
   constructor(props:IPerformer) {
       this.state = props;
   }

   get name() : string {
        return this.state.name;
   }

   get imgAvatar() : string {
        return this.state.imgAvatar;
   }

   get profession() : string {
        return this.state.profession;
   }

   get about() : string {
       return this.state.about;
   }

}