import { Section } from './section.model';

export class Page {
    public order: number;
    public title: string;
    public sections: Array<Section>;
  
    constructor(order: number, title: string, sections: Array<Section>) {
      this.order = order;
      this.title = title;
      this.sections = sections;
    }
}