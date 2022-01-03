import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../services/publications.service';
import { Publication } from '../publication';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  selectedTag: string;
  publications: Publication[];
  pageOfPublications: Array<any>;

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void
  {
    this.getPublications();
  }

  getPublications()
  {
    this.publicationsService.getPublications().subscribe(
      p => this.publications = this.publicationsService.filterPublicationsByTag(p, this.selectedTag));
  }

  onChangePage(pageOfPublications: Array<any>) {
    this.pageOfPublications = pageOfPublications;
  }

  filterPublicationsBySelectedTag(publications: Publication[])
  {
    return this.publicationsService.filterPublicationsByTag(publications, this.selectedTag);
  }

  getListOfTags()
  {
    return this.publicationsService.createListOfTags();
  }

  onTagSelected(tag: string)
  {
    this.selectedTag = tag;
    this.getPublications();
  }
}
