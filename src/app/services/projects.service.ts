import { Injectable } from '@angular/core';
import { Observable, of, Subject, Observer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Project } from '../project';
import projects from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  allProjects: Project[];

  constructor() { }

  getProjects(selectedTag: string): Observable<Project[]>
  {
    const PROJECTS = projects.projects as Project[];
    this.allProjects = PROJECTS;
    if (selectedTag)
    {
      return of(this.filterProjectsByTag(PROJECTS, selectedTag));
    }
    else
    {
      return of(PROJECTS);
    }
  }

  getProject(id: number): Observable<Project>
  {
    const projectObs$ = this.getProjects('').pipe(switchMap(projects => this.getProjectById(projects, id)));
    return projectObs$;
  }

  getProjectById(projects: Array<Project>, id: number): Observable<Project>
  {
    let projectSelected: Project;
    projects.forEach(project =>
    {
      if (project.id === id)
      {
        projectSelected = project;
      }
    });
    console.log(projectSelected);
    return of(projectSelected);
  }

  createListOfTags(projects): Array<string>
  {
    const list = [];
    projects.forEach(project => {
      project.tags.forEach( tag => {
        if (!list.includes(tag))
        {
          list.push(tag);
        }
      });
    });
    return list;
  }

  filterProjectsByTag(projects, tag: string)
  {
    const list = [];
    projects.forEach(project =>
    {
      if (project.tags.includes(tag))
      {
        list.push(project);
      }
    });
    return list;
  }
}
