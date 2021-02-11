import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Publication } from '../../../models/publication';
import { PublicationService } from '../../../services/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.scss']
})
export class AddPublicationComponent implements OnInit {

  myForm: FormGroup;
  isValidFormSubmitted: boolean = null;
  image: string = null;

  constructor(
    public dialogRef: MatDialogRef<AddPublicationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private publicationService: PublicationService,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(2)
      ]
      ],
      description: ['', [
        Validators.required,
        Validators.minLength(2)
      ]
      ],
      price: ['', [
        Validators.required
      ]
      ],
      category: ['', [
        Validators.required,
        Validators.minLength(2)
      ]
      ]
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    if (!this.myForm.valid) {
      return;
    }
    this.isValidFormSubmitted = true;
    const publication: Publication = this.mappingValues();
    this.publicationService.savePublication(publication).subscribe(
      res => {
        this.dialogRef.close();        
      });
  }

  mappingValues(): Publication {
    const publication: Publication = {
      title: this.myForm.get('title').value,
      description: this.myForm.get('description').value,
      price: this.myForm.get('price').value,
      category: this.myForm.get('category').value,
      image: this.image,
    }
    return publication;
  }

}
