export class Row {
    public row: string;
    public cells: Array<String>;
  
    constructor(row: string, cells: Array<String>) {
      this.row = row;
      this.cells = cells;
    }
}