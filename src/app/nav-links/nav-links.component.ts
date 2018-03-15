import {Component, OnInit} from '@angular/core';
import { Link} from '../link';
import {FireBaseService} from '../fire-base.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  links: Observable<Link[]>;
  url = '/nav-links';

  constructor(private fireBase: FireBaseService) {};

  ngOnInit() {
    this.links = this.fireBase.getDataList(this.url);
  }
}
