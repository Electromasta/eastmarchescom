import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private toggle = new Subject<boolean>();
  public $toggle = this.toggle.asObservable();

  constructor() { }

  setToggle(val: boolean){
    this.toggle.next(val);
  }
}
