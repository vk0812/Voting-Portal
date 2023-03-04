import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './MyComponents/navigation-bar/navigation-bar.component';
import { CandidatesComponent } from './MyComponents/candidates/candidates.component';
import { VotingportalComponent } from './MyComponents/votingportal/votingportal.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { FooterComponent } from './MyComponents/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CandidatesComponent,
    VotingportalComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
