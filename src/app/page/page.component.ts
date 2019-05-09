import { Component } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  constructor(private pages: PagesService) { }


}
