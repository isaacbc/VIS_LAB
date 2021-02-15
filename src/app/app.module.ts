import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFiltersComponent } from './project-filters/project-filters.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { MembersComponent } from './members/members.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationItemComponent } from './publication-item/publication-item.component';
import { SafePipe } from './safe.pipe';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ProjectCardComponent,
    ToolbarComponent,
    ProjectListComponent,
    ProjectFiltersComponent,
    HomeComponent,
    AboutComponent,
    MemberItemComponent,
    MembersComponent,
    PublicationsComponent,
    PublicationItemComponent,
    SafePipe,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTabsModule
  ],
  providers: [/*{ provide: APP_BASE_HREF, useValue: '/~mfrey/' }, { provide: LocationStrategy, useClass: HashLocationStrategy }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
