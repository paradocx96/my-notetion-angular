import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Note, NoteCreate} from "../models/note.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseApiUrl: string = environment.baseApiUrl;
  bearerToken: string = environment.bearerToken;

  constructor(private http: HttpClient) {
  }

  getALlNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseApiUrl + '/api/notes/get', {
      headers: {Authorization: this.bearerToken}
    });
  }

  createNote(createNoteRequest: NoteCreate) {
    return this.http.post(this.baseApiUrl + '/api/notes/create', createNoteRequest, {
      headers: {Authorization: this.bearerToken}
    });
  }
}
