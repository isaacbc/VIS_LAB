import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects$: Observable<Project[]>;
  selectedTag = '';
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.projectsService.getProjects(this.selectedTag);
  }

  getListOfTags(projects: Project[]) {
    return this.projectsService.createListOfTags(projects);
  }

  onTagSelected(tag: string) {
    this.selectedTag = tag;
    this.getProjects();
  }

}
