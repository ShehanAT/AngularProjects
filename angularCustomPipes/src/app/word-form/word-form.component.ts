import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {
  wordForm: FormGroup;
  randomWord: string = "";
  showRandomWord: boolean = false;

  constructor(private fb: FormBuilder) { }

  get f() { return this.wordForm.controls; }

  ngOnInit(): void {
    this.wordForm = this.fb.group({
      wordInput: [null, Validators.required]
    });
    console.log("wordFormComponent");
  }

  onSubmit(){
    if(this.wordForm.valid){
      console.log(this.f.wordInput);
      this.randomWord = this.f.wordInput.value;
      this.showRandomWord = true;
    }
  }

}
