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
  choosePage(num) {
    this.currentPage = this.pages.getPageByNum(num);
  };
  stepPage(dir) {
    let newPageNum = 0;
    if (dir == 'inc') {
      newPageNum = this.currentPage.pageNum + 1;
    } else if (dir == 'dec') {
      newPageNum = this.currentPage.pageNum - 1;
    }
    this.currentPage = this.pages.getPageByNum(newPageNum)
  }
}
