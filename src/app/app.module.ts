import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesListComponent } from './components/notes/notes-list.component';
import { NotesService} from './notes.service';
import { UserService } from './user.service';
import { LoginComponent } from './components/login/login.component';
import { notesRoutes } from '../routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotesEditComponent } from './components/notes/notes-edit.component';
 
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    LoginComponent,
    NotesListComponent,
    NotesEditComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(notesRoutes),
    
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: ' ',  
      authDomain: 'noteapp-34c88.firebaseapp.com',
      databaseURL: 'https://noteapp-34c88.firebaseio.com',
      projectId: 'noteapp-34c88',
      storageBucket: 'noteapp-34c88.appspot.com',
      messagingSenderId: '273339702586',
    }),
    AngularFireAuthModule,
  ],
  providers: [NotesService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
