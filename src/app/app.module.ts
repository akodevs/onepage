import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { ContactUsService } from './services/contact-us.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainRoutes } from './app.routing';

import { HomeComponent } from './views/home/home.component'
import { PostComponent } from './views/blogs/post/post.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component'
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    HomeComponent,
    PostComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(MainRoutes),
    OwlModule
  ],
  providers: [ItemService, ContactUsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
