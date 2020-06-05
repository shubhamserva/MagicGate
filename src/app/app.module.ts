import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule,MatDividerModule,MatFormFieldModule,MatSelectModule,
  MatIconModule,MatButtonModule,MatCheckboxModule,MatTableModule,MatGridListModule,MatDialogModule,MatInputModule} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
