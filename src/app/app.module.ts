import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalPageModule } from './principal-page/principal-page.module';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { NavbarNoLoggedModule } from "./navbar-no-logged/navbar-no-logged.module";
import { CardNewContentModule } from './card-new-content/card-new-content.module';
import { CardLearningJourneyModule } from './card-learning-journey/card-learning-journey.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { CardFeaturedCoursesModule } from './card-featured-courses/card-featured-courses.module';
import { CardArrivingHereModule } from './card-arriving-here/card-arriving-here.module';
import { FooterModule } from './footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardTitleCoursesModule } from './card-title-courses/card-title-courses.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalPageComponent,
    LoginPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalPageModule,
    NavbarNoLoggedModule,
    CardNewContentModule,
    CardLearningJourneyModule,
    CardFeaturedCoursesModule,
    CardArrivingHereModule,
    FooterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CardTitleCoursesModule,
    MatCardModule,
  ]
})
export class AppModule { }
