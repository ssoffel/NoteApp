import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
 

@Component({
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentUser: any;
  constructor(private user: UserService,
              private router: Router) {
     console.log(this.user);
  }

  async signInWithGoogle() {
    console.log("in sign in with google")
   this.currentUser = <any> await this.user.login();
   console.log('currentUser.credenitals', this.currentUser.credential.idToken)
    if (this.currentUser.credential.idToken) {
      this.router.navigate(['/notes']);
    }
  }
   

   
}