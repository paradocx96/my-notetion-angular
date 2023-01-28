import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../../../services/notes.service";
import {NoteCreateUpdate, NoteSingle} from "../../../models/note.model";

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {

  noteDetails: NoteSingle = {
    _id: '',
    title: '',
    description: '',
    favorite: false,
    author: '',
    created: '',
    createdAt: '',
    updatedAt: ''
  }

  constructor(private route: ActivatedRoute, private noteService: NotesService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.noteService.getNoteById(id).subscribe({
            next: (response) => {
              console.log(response);
              this.noteDetails = response;
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      }
    })
  }

  updateNote() {
    const updateNoteRequest = {
      title: this.noteDetails.title,
      description: this.noteDetails.description,
      favorite: this.noteDetails.favorite
    }

    console.log(updateNoteRequest);
    this.noteService.updateNote(updateNoteRequest, this.noteDetails._id).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['notes/list'])
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  deleteNote(id: string) {
    this.noteService.deleteNoteById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['notes/list'])
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
