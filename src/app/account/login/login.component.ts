import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './login.component.actions';
import { User } from 'src/app/shared/models/user';
import { Credentials } from 'src/app/shared/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit(): void {
  }

  onSubmit(username: string, password: string) {
    var creds: Credentials;
    creds.username = username;
    creds.password = password;
    this.store.dispatch(login({ credentials: creds }));
  }
}
