import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = new FormControl('', [Validators.required, Validators.email]);
  expereice = new FormControl('', [Validators.required]);
  salary = new FormControl('', [Validators.required]);
  work_type = 'home';

  getErrorMessage() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }

    return this.title.hasError('email') ? 'Not a valid email' : '';
  }

}
