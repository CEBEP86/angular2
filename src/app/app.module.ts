import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ReadComponent}   from './read.component';
import {CreateComponent}   from './create.component';
import {HomeComponent}   from './home.component';
import {NotFoundComponent}   from './not-found.component';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'read/:id', component: ReadComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ReadComponent, NotFoundComponent, CreateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
