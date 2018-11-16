import { Routes } from '@angular/router'

import { HomeComponent } from './views/home/home.component';
import { PostComponent } from './views/blogs/post/post.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

export const MainRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      breadcrumb: 'Home',
    },
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {
      title: 'Post',
      breadcrumb: 'Post',
    },
  },
  {
    path: 'post/:id',
    component: PostComponent,
    data: {
      title: 'Post',
      breadcrumb: 'Post',
    },
  },
]
