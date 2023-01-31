import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Note, NoteCreateUpdate, NoteSingle} from "../models/note.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseApiUrl: string = environment.baseApiUrl;
  bearerToken: string | any = localStorage.getItem('token');

  constructor(private http: HttpClient) {
  }

  getALlNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseApiUrl + '/api/notes/get', {
      headers: {Authorization: this.bearerToken}
    });
  }

  createNote(createNoteRequest: NoteCreateUpdate) {
    return this.http.post(this.baseApiUrl + '/api/notes/create', createNoteRequest, {
      headers: {Authorization: this.bearerToken}
    });
  }

  getNoteById(id: string): Observable<NoteSingle> {
    return this.http.get<NoteSingle>(this.baseApiUrl + '/api/notes/get/' + id, {
      headers: {Authorization: this.bearerToken}
    });
  }

  updateNote(updateNoteRequest: NoteCreateUpdate, id: string) {
    return this.http.patch(this.baseApiUrl + '/api/notes/update/' + id, updateNoteRequest, {
      headers: {Authorization: this.bearerToken}
    });
  }

  deleteNoteById(id: string): Observable<NoteSingle> {
    return this.http.delete<NoteSingle>(this.baseApiUrl + '/api/notes/delete/' + id, {
      headers: {Authorization: this.bearerToken}
    })
  }
}
