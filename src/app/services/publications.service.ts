import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Publication } from '../publication';
import { HttpClient } from '@angular/common/http';
import publications from '../../assets/data/publications.json';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  allPublications: Publication[];
  constructor(private http: HttpClient) { }

  getPublications(selectedTag?: string): Observable<Publication[]>
  {
    const PUBLICATIONS = publications.publications as Publication[];
    this.allPublications = PUBLICATIONS;
    if (selectedTag)
    {
      return of(this.filterPublicationsByTag(PUBLICATIONS, selectedTag));
    }
    else
    {
      return of(PUBLICATIONS);
    }

  }

  createListOfTags(): Array<string>
  {
    const list = [];
    this.allPublications.forEach(publication =>
    {
      publication.tags.forEach(tag =>
      {
        if (!list.includes(tag))
        {
          list.push(tag);
        }
      });
    });
    return list;
  }

  filterPublicationsByTag(publications: Publication[], tag: string)
  {
    if(tag === 'All' || !tag)
    {
      return publications;
    }
    const list = [];
    publications.forEach(publication =>
    {
      if (publication.tags.includes(tag))
      {
        list.push(publication);
      }
    });
    return list;
  }
}
