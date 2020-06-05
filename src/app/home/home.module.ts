import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule,MatDividerModule,MatFormFieldModule,MatSelectModule,
  MatIconModule,MatButtonModule,MatCheckboxModule,MatTableModule,MatGridListModule,MatDialogModule,MatInputModule,MatCardModule} from '@angular/material'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
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
    MatCardModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
