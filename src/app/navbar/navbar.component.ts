import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../_models/app-user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authUser: AuthUser = {username: 'admin', password: '123'};

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.accountService.login(this.authUser)
      .subscribe(response => {
        console.log(response);
      });
  }

}
