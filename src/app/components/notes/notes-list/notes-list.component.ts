import {Component, OnInit} from '@angular/core';
import {Note} from "../../../models/note.model";
import {NotesService} from "../../../services/notes.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NotesService) {
  }

  ngOnInit(): void {
    this.noteService.getALlNotes()
      .subscribe({
        next: (notes) => {
          console.log(notes);
          this.notes = notes;
        },
        error: (err) => {
          console.log(err)
        }
      });

  }


}
