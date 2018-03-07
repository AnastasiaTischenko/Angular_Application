import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslatorComponent } from './translator.component';
import {HttpService} from '../http.service';
import {ReactiveFormsModule} from '@angular/forms'
import { KeyPipe } from './key-pipe';

@NgModule({
  declarations: [
    TranslatorComponent,
    KeyPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService
  ]
})

export class TranslatorModule { }
