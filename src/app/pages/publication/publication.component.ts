import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  publications: any[];
  showResults: boolean = null;

  constructor(
    public dialog: MatDialog,
    private publicationService: PublicationService
  ) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications() {
    this.publicationService.getAllPublications().subscribe(res => {
      this.publications = res;
    });
  }

  openModalCreatePublication(): void {
    const dialogRef = this.dialog.open(AddPublicationComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPublications();
    });
  }

}
