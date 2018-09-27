import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelink = 'http://blog.miniasp.com/';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sitename = environment.sitename;
    }, 2000);
  }

}
