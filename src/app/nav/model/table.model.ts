import { Row } from './row.model';

export class Table {
    public header: string;
    public columns: Array<String>;
    public rows: Array<Row>;
  
    constructor(header: string, columns: Array<String>, rows: Array<Row>) {
      this.header = header;
      this.columns = columns;
      this.rows = rows;
    }
}