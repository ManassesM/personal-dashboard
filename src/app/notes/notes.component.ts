import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/node.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [
    new Note('Test title 1', 'content 1!'),
    new Note('Test title 2', 'content 2!'),
  ]

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes()
  }

}
