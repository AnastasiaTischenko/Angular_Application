import { Component } from '@angular/core';
import { Link} from "../link";
import { links } from "../dataLinks";

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {
  links: Link[];

  ngOnInit() {
    this.links = links;
  }
}
