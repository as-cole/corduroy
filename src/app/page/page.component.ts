import { Component } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  constructor(private pages: PagesService) { }



  stepPage(dir) {
    let newPageNum = 0;
    let totalPages = this.pages.pages.length;
    if (dir == 'inc') {
      newPageNum = this.pages.currentPage.pageNum + 1;
    } else if (dir == 'dec') {
      newPageNum = this.pages.currentPage.pageNum - 1;
    }
    this.pages.currentPage = this.pages.getPageByNum(newPageNum)
  };

}
