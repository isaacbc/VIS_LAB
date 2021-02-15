import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.css']
})
export class PublicationItemComponent implements OnInit {

  @Input() publication;
  constructor() { }

  ngOnInit(): void
  {
  }


}
