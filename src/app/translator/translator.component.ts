import { Component, OnInit} from '@angular/core';
import { HttpService } from '../http.service';
import { API_INFO } from './shared-Api/API-data';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit{
  private autoLang: string = 'ru';
  private urlSelects: string = `${API_INFO.apiLang}?&key=${API_INFO.key}&ui=${this.autoLang}`;
  private urlTrans: string;

  transForm: FormGroup;
  langs;
  languageFrom: FormControl;
  languageTo: FormControl;
  sourseText: FormControl;
  translatedText: string;

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.httpService.getData(this.urlSelects).subscribe((data) => {
      this.langs = data['langs'];
    })
    this.createFormFields();
    this.createForm();
  }

  createFormFields() {
    this.languageFrom = new FormControl('', Validators.required);
    this.languageTo = new FormControl('', Validators.required);
    this.sourseText = new FormControl('', Validators.required);
  }

  createForm() {
    this.transForm = new FormGroup({
      langFrom: this.languageFrom,
      langTo: this.languageTo,
      text: this.sourseText
    });
  }

  onSubmit() {
    this.urlTrans = `${API_INFO.apiTrans}?&key=${API_INFO.key}&text=${this.transForm.value.text}&lang=${this.transForm.value.langFrom}-${this.transForm.value.langTo}&format=plain`;
    this.httpService.getData(this.urlTrans).subscribe(data => {
      if (data['code'] = 200) {
        this.translatedText = data['text'][0];
      }
    });
  }

  changeSel() {
    this.transForm.setValue({
      langFrom: this.transForm.value.langTo,
      langTo: this.transForm.value.langFrom,
      text: this.transForm.value.text
    });
  }
}
