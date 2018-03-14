import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpService } from '../http.service';
import { API_INFO } from './shared-Api/API-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit, OnDestroy {
  private autoLang = 'ru';
  private urlSelects = `${API_INFO.apiLang}?&key=${API_INFO.key}&ui=${this.autoLang}`;
  private urlTrans: string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  transForm: FormGroup;
  langs: Object;
  languageFrom: FormControl;
  languageTo: FormControl;
  sourseText: FormControl;
  translatedText: string;

  constructor(private httpService: HttpService) {}

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
    this.httpService.getData(this.urlTrans)
      .pipe(filter(data => data['code'] === 200))
      .subscribe(data => {
        this.translatedText = _.first(data['text']);
      });
  }

  changeSel() {
    this.transForm.setValue({
      langFrom: this.transForm.value.langTo,
      langTo: this.transForm.value.langFrom,
      text: this.transForm.value.text
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
