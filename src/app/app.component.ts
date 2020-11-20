import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eastmarches';
  viewName = ' /';
  showNavbar = false;
  loggedin = false;
  userInfo = {username: "", token: ""};
  subscription: Subscription;

  constructor(private router: Router, public dialog: MatDialog, public userService: UserService) {};

  ngOnInit()  {
    var usr = localStorage.getItem('UserName');

    if (usr != null)  {
      this.loggedin = true;
      this.userInfo = {username: usr, token: localStorage.getItem('UserName')};
    }

    this.subscription = this.userService._userInfo.subscribe(userInfo => {
      console.log(userInfo);
      this.loggedin = true;
      localStorage.setItem('UserName', userInfo.username);
      localStorage.setItem('UserToken', userInfo.token);
      this.userInfo = {username: userInfo.username, token: userInfo.token};
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '250px'
    });
  }


  changeOfRoutes()  {
    if  (this.router.url === "/" || this.router.url === "/hero" || this.router.url === "/nav" || this.router.url === "/atlas" || this.router.url === "/hyland" || 
    this.router.url === "/hool" || this.router.url === "/farnorth" || this.router.url === "/mulan" || this.router.url === "/shackles" || this.router.url === "/stolen" || 
    this.router.url === "/akros" || this.router.url === "/ravenwatch" || this.router.url === "/joanapur" || this.router.url === "/twincities" || this.router.url === "/era")  {
      this.viewName = this.router.url;
      if (this.router.url === "/" || this.router.url === "/hero" || this.router.url === "/nav" || this.router.url === "/era") this.showNavbar = true;
      else  this.showNavbar = false;
    } else  {
      this.viewName = "/notfound"
      this.showNavbar = true;
    }
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html'
})
export class LoginDialog {
  @Output() loginInfo = new EventEmitter();

  private remote = 'https://eaknep3ofh.execute-api.us-east-1.amazonaws.com/bfapi';
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/)]),
    verifypw: new FormControl('', [Validators.required]),
    verifyphrase: new FormControl('', []),
  });
  register = false;
  verify = false;


  constructor(
    public dialogRef: MatDialogRef<LoginDialog>, private http: HttpClient, private userService: UserService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  switchClick():  void  {
    this.verify = true;
  }

  getField(str): String  { return this.loginForm.get(str).value }

  onLoginClick(): void {
    if (this.verify)  {
      this.http.post(this.remote + '/verify', {username: this.getField('username'), verifyphrase: this.getField('verifyphrase')}).subscribe(async xml => {
        console.log(xml);
        this.verify = false;
        this.register = false;
      });
    }

    if (!this.verify && this.register && this.loginForm.valid && this.getField('password') === this.getField('verifypw'))  {
      this.http.post(this.remote + '/register', {username: this.getField('username'), email: this.getField('email'), password: this.getField('password')}).subscribe(async xml => {
        console.log(xml);
      });
      this.verify = true;
    } 

    if (!this.verify && !this.register && this.loginForm.get('username').valid && this.loginForm.get('password').valid)  {
      this.http.post(this.remote + '/login', {username: this.getField('username'), password: this.getField('password')}).subscribe(async xml => {
        this.userService.setUserInfo({username: this.getField('username'), token: xml['token']});
      });
    } 

    //this.dialogRef.close();
  }

  isMirroredCopy()  {
    return this.getField('password') === this.getField('verifypw');
  }
  

  isValid(): Boolean  {
    if (this.verify && this.loginForm.get('username').valid && this.loginForm.get('username').dirty)
      return true;
    if ((this.register && this.loginForm.dirty && this.loginForm.valid && this.isMirroredCopy()) || (!this.register && this.loginForm.get('username').valid && this.loginForm.get('username').dirty && this.loginForm.get('password').valid && this.loginForm.get('password').dirty))
      return true;
    return false;
  }

  title(): String {
    if (this.verify)
      return "Verify";
    else if (this.register)
      return "Register";
    else
      return "Login";
  }
}

function isMirroredCopy(control: AbstractControl): ValidationErrors  {
  if (control.value.password === control.value.verifypw)
    return null;
  return {'isMirroredCopy': true };
}

