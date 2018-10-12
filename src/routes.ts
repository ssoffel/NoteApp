import { Routes } from '@angular/router';
import { NotesListComponent } from './app/components/notes/notes-list.component';
import { LoginComponent } from './app/components/login/login.component';
import { NotesEditComponent } from './app/components/notes/notes-edit.component';

export const notesRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'notes', component: NotesListComponent },
    { path: 'notes/:id', component: NotesEditComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
]