import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  data: any = {};

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getJsonTest().subscribe((data) => { 
      console.log(data)     
      this.data = data.result;
    });
  }

}
