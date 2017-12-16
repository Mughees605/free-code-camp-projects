export interface Option{ 
  name: string;
}

export class CreatePoll {
   _id : string;
   title: string;
   creatorId: string;
   options: Option[]
  }
  