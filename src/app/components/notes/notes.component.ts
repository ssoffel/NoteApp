import { Component, Input, Output } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Router } from '@angular/router';
 
 

@Component({
  selector: 'notes-comp',
  templateUrl: './notes.component.html',
  styles: [`
  .pad-left { margin-left: 10px;}
  .well { background-color: #bbb;}
  .well { margin: 2em },
  .thumbnail { min-height: 14em;}
  `]
})
export class NotesComponent {
   @Input() noteTitle: any;
   @Input() noteText: any;
   @Input() keyId: string;
   @Input() getNotesFunc: Function;
   
  constructor(private notesService: NotesService,
    private router: Router) {
    }

    handleDelete(event: Event, key: string){
      console.log("event", event)
      event.stopPropagation();
      console.log('In delete, this is key', key);
      this.notesService.deleteNote(key)
        .subscribe();
        
        this.getNotesFunc();
        

      
    }

    editThumbnail(key: string, title: string, text: string) {
      console.log("In edit thumbnail")
       
      this.router.navigate([`/notes/${key}`]);
    }

     

     
}
