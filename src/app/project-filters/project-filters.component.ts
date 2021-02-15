import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-filters',
  templateUrl: './project-filters.component.html',
  styleUrls: ['./project-filters.component.css']
})
export class ProjectFiltersComponent implements OnInit {

  @Input() tags: string[];
  @Output() selectedTag = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  showAll()
  {
    this.selectedTag.emit('');
  }

  filterByTag(tag: string)
  {
    this.selectedTag.emit(tag);
  }

}
