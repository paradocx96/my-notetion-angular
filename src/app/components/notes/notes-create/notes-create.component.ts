import {Component, OnInit} from '@angular/core';
import {NoteCreateUpdate} from "../../../models/note.model";
import {NotesService} from "../../../services/notes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent implements OnInit {

  createNoteRequest: NoteCreateUpdate = {
    title: '',
    description: '',
    favorite: false
  }

  constructor(private noteService: NotesService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createNote() {
    console.log(this.createNoteRequest);
    this.noteService.createNote(this.createNoteRequest).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['notes/list'])
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}
