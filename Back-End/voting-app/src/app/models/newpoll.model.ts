export class CreatePoll {
    public question: string;
    public option: any;
  
    constructor(question: string, option: any) {
      this.question= question;
      this.option = option;
    }
  }
  