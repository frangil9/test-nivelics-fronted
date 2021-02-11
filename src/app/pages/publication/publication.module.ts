import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PublicationComponent } from './publication.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { ListPublicationsComponent } from './list-publications/list-publications.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


const routes: Routes = [
  { path: '', component: PublicationComponent }
];

@NgModule({
  declarations: [PublicationComponent, AddPublicationComponent, ListPublicationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddPublicationComponent
  ],
})
export class PublicationModule { }
