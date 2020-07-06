import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  form: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder
  ) { 

    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.email]],
      text: ['', [Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });


    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // })
  }

  save( event: Event) {
     event.preventDefault();
     if(this.form.valid) {
      const value = this.form.value;
      console.log(value);
     } else {
       this.form.markAllAsTouched();
     }
  }

  get emailField() {
    return this.form.get('email');
  }
 get textField() {
    return this.form.get('text');
  }

  doSomething() {
    console.log('Click');
  }
}