import { Component } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pages: PagesService) {  }
  title = 'Corduroy';
  book = this.pages.getAllPages();
  currentPage = this.pages.getPageByNum(0);
  updatePage(num) {
    this.currentPage = this.pages.getPageByNum(num);
  };
}
