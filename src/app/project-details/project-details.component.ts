import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project$: Observable<Project>;
  constructor(private route: ActivatedRoute, private router: Router, private projectsService: ProjectsService) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project$ = this.projectsService.getProject(+id);
  }

}
