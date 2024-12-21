import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export function appInitializerFn(router: Router) {
  return () => {
    router.navigate(['/home']);
  };
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: PostDashboardComponent
  },

  {
    path: 'post/:postId',
    component: SinglePostComponent
  },
  {
    path: 'post/:postId/edit',
    component: PostFormComponent
  },
  {
    path: 'addpost',
    component: PostFormComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      deps: [Router],
      multi: true,
    },
  ],
})
export class AppRoutingModule { }
