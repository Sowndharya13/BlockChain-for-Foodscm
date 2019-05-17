import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { BannerExploreComponent } from './banner-explore/banner-explore.component';
import { BannerParticipantComponent } from './banner-participant/banner-participant.component';
import { RegisterBoxComponent } from './register-box/register-box.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerComponent,
    ContactComponent,
    TopnavbarComponent,
    BannerExploreComponent,
    BannerParticipantComponent,
    RegisterBoxComponent  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
