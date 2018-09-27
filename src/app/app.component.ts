import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';
  data: any[];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/articles.json').subscribe((value: any[]) => {
      this.data = value;
    });
  }

  doSearch(value) {
    this.keyword = value;
  }

  doClear() {
    this.keyword = '';
  }
}
