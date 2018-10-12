import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
 
import { Note } from './components/notes/note';
 
 

 
 

@Injectable()
export class NotesService {

        httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
           
        })
      };

    
    constructor(private http: HttpClient) {
        console.log('notes service initialized')
    }

    getAllNotes(): Observable<Note[]> {
        return this.http.get<Note[]>('http://localhost:3000/api/notes');
             
           
    }

    getNote(key): Observable<Note> {
        console.log("In getNote service")
        return this.http.get<Note>(`http://localhost:3000/api/notes/${key}`);
             
           
    }
    
    postNote(note: Note): Observable<Object>{
        console.log('in Post note', note)
        return this.http.post<Note>('http://localhost:3000/api/notes/', note, this.httpOptions);
                                     
         
    }

    putNote(note: Note, key: string): Observable<Object>{
        console.log('in put note', note, key)
        return this.http.put<Note>(`http://localhost:3000/api/notes/${key}`, note, this.httpOptions);
                                     
         
    }


    deleteNote(key: string): Observable<Object>{
        console.log('in Delete note', key)
         return this.http.delete<string>(`http://localhost:3000/api/notes/${key}`, this.httpOptions);
       
                                     
         
    }
    
    
}