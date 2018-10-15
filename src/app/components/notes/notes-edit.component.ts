import { Component, OnInit  } from '@angular/core';
import { NotesService} from '../../notes.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
 
import { ActivatedRoute } from '@angular/router';
 

@Component({
    template: `<form #editForm='ngForm' (ngSubmit)='handleEdit(editForm.value)'>
                <div id='editContainer'   class='container'>
                 <div class="well well2 hoverwell thumbnail">
                    <input id='titleArea' name='title' value="currentNote.title" [(ngModel)]='currentNote.title' /> 
                    <hr>
                    <textarea rows='7' id='textArea' name="text" value="currentNote.text" [(ngModel)]='currentNote.text'> </textarea>
                     <button  type='submit' class='btn btn-lg btn-dark'>Edit</button>
     
                </div>
                 
     
                </div>
                </form>
                
     
     `
     
     
    
})

export class NotesEditComponent implements OnInit {
  public noteKey; 
  public currentNote = {
      title: "Loading...",
      text: "Loading..."
  };
   
  
   
    
    
     
    constructor(private notesService: NotesService,
                private route: ActivatedRoute,
                private router: Router)  {
      
    }

     // tslint:disable-next-line:use-life-cycle-interface
     ngOnInit() {
         const key = (this.route.snapshot.paramMap.get('id'))
         this.noteKey = key;
         this.notesService.getNote(key)
         .subscribe(note => {
           this.currentNote = note; } );
      }


     handleEdit(formValues: any) {
          console.log('this is form values', formValues)
          console.log('this/notekey', this.noteKey)
         this.notesService.putNote(formValues, this.noteKey)
         .subscribe(note => {
            console.log('saved Successful');
         }); 
         this.router.navigate([`/notes/`]);

     }
}