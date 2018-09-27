import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';
  data: any[];
  max = 5;
  constructor(private datasvc: DataService) {
  }

  ngOnInit(): void {
    this.datasvc.loadArticle().subscribe((value) => {
      this.data = value;
    });
  }

  doSearch(value) {
    this.max++;
    this.keyword = value;
  }

  doClear() {
    this.keyword = '';
  }
}
