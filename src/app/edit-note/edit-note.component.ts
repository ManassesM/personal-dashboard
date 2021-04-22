import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note

  showValidationErrors: boolean

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id');
      this.note = this.noteService.getNote(idParam);
    })
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid) return this.showValidationErrors = true
    this.noteService.updateNote(this.note.id, form.value)
    this.router.navigateByUrl("/notes")
  }

  deleteNote() {
    this.noteService.deleteMethod(this.note.id)
    this.router.navigateByUrl("/notes")
  }
}
