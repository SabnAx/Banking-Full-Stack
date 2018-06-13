import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loading = false;
  user: User = new User();
  submitted = false;
  returnUrl: string;
  error = '';


  constructor(private _service: AuthenticationService, private _route: ActivatedRoute, private _router: Router) {
  }
  ngOnInit() {

        // reset login status
        this._service.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {
    this._service.login(this.user.username, this.user.password).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this._service.login(this.user.username, this.user.password)
        .pipe(first())
        .subscribe(
            data => {
                this._router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }
}
