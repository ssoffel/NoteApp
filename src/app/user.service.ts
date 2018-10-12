import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

 uid = this.fireBaseAuth.authState.pipe(
   map(authState => {
   if (!authState) {
     return null;
   } else {
     return authState.uid;
   }
  })
 );

  constructor(private fireBaseAuth: AngularFireAuth) {}

   login(): Promise<auth.UserCredential> {
     console.log("in service")
    return this.fireBaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
   }

   logout() {
    return this.fireBaseAuth.auth.signOut()
   }
   
}
