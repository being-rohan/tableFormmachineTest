import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatrialModule } from './material/material/material.module';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import { PostTableComponent } from './components/post-table/post-table.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatdialogconfirmComponent } from './components/matdialogconfirm/matdialogconfirm.component';


@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostTableComponent,
    SinglePostComponent,
    PostFormComponent,
    PageNotFoundComponent,
    MatdialogconfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatrialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
