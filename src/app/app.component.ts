import { Component } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pages: PagesService) {  }
  title = 'corduroy';
  book = this.pages.getAllPages();
  currentPage = this.pages.getPageByNum(2);
  test = console.log(this.currentPage);
}
