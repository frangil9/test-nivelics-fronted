import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-publications',
  templateUrl: './list-publications.component.html',
  styleUrls: ['./list-publications.component.scss']
})
export class ListPublicationsComponent implements OnInit {

  @Input() articles: any[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
