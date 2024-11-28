import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentcomponentComponent } from './add-studentcomponent/add-studentcomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowtableComponent } from './showtable/showtable.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentcomponentComponent,
    ShowtableComponent,
    UpdatestudentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
