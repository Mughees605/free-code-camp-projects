export interface Option {
  name: string;
  _id?: string;
  votes?: string[];
}

export class CreatePoll {
  _id: string;
  title: string;
  creatorId: string;
  options: Option[]
}
