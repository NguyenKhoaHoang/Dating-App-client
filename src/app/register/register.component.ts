import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../_models/app-user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser: RegisterUser = new RegisterUser();
  constructor(private accountService: AccountService) {}


  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.registerUser).subscribe();
  }

}
