export class Subsection {
    public header: string;
    public text: string;
    public list: Array<Subsection>;
  
    constructor(header: string, text: string, list?: Array<Subsection>) {
      this.header = header;
      this.text = text;
      this.list = list;
    }
}