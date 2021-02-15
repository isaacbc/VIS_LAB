import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit
{

  menuItems = [
    {
      label: 'Home',
      icon: 'home',
      routerLink: '/home'
    },
    {
      label: 'Publications',
      icon: 'article',
      routerLink: '/publications'
    },
    {
      label: 'Members',
      icon: 'people',
      routerLink: '/members'
    }
  ];

  constructor() { }

  ngOnInit(): void
  {
  }

}
