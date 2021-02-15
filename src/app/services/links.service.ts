import { Injectable } from '@angular/core';
import { HomeLink } from '../links';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import links from '../../assets/data/links.json';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  getLinks(): Observable<HomeLink[]>
  {
    return of(links.links);
  }
}
