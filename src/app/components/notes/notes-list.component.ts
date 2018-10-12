import { Component, OnInit } from '@angular/core';
import { NotesService} from '../../notes.service';
import { Note } from './note';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    template: `
    <div>
    <button id='logOut'(click)='signOut()'>Log Out</button>
      <h1>My NotePad</h1>
      <hr>
      <div class='row'>
      <div class='col-md-9 card' *ngFor="let key of noteKeys" >
            <notes-comp [getNotesFunc]='myGetNotesFunc' [keyId]='key' [(noteTitle)]='notes[key].title' [(noteText)]='notes[key].text'></notes-comp>
      </div>
     </div>
     <form #addForm='ngForm'  class='well well1' (ngSubmit)='addNote(addForm.value, addForm)'>
       <div class='form-group'>
         <div class='row'>
            <div class='col-md-1'>
              <input (ngModel)='title' name='title' type='text' class='form-control' placeholder='Add Title'>
            </div>
            <div class='col-md-8'>
             <input (ngModel)='text' name='text' type='text' class='form-control' placeholder="Add notes">
            </div>
        </div>
      </div>
      <button type='submit' class='btn btn-primary'>Submit</button>
    </form>

 
    </div>`
    
})

export class NotesListComponent implements OnInit {
    notes: Note[];
    noteKeys = [];
    title: string;
    text: string;
     
   
    
    
     
    constructor(private notesService: NotesService,
                private user: UserService,
                private router: Router)  {
      
    }

     // tslint:disable-next-line:use-life-cycle-interface
     ngOnInit() {
        this.notesService.getAllNotes()
         .subscribe(note => {
          console.log("note", note), this.notes = note, this.noteKeys = Object.keys(this.notes), console.log('this.notes', this.notes, this.noteKeys) } );
      }

     async signOut() {
        await this.user.logout();
        this.router.navigate(['/login']);
       
     }

     getNotes() {
      this.notesService.getAllNotes()
     .subscribe(note => {
      console.log("note", note), this.notes = note, this.noteKeys = Object.keys(this.notes), console.log('this.notes', this.notes, this.noteKeys) } );

    }

     addNote(formValues: any, form: NgForm) {
          
         this.notesService.postNote(formValues)
         .subscribe(note => {
            console.log('saved Successful');
         });
         
         form.reset();
         this.getNotes();
          
        }
        

        get myGetNotesFunc(){
          return this.getNotes.bind(this);
        }
        

       
        

}