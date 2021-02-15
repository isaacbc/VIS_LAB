import { Component, OnInit } from '@angular/core';
import { HomeLink } from '../links';
import { LinksService } from '../services/links.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links$: Observable<HomeLink[]>;
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks() {
    this.links$ = this.linksService.getLinks();
  }

}
