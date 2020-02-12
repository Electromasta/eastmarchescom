import { Subsection } from './subsection.model';
import { Table } from './table.model';

export class Section {
    public bookmark: string;
    public header: string;
    public text: string;
    public subsections: Array<Subsection>;
    public list: Array<Subsection>;
    public table: Table;
  
    constructor(bookmark: string, header: string, text: string, subsections: Array<Subsection>, list: Array<Subsection>, table: Table) {
      this.bookmark = bookmark;
      this.header = header;
      this.text = text;
      this.subsections = subsections;
      this.list = list;
      this.table = table;
    }
}