import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalPageModule } from './principal-page/principal-page.module';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { NavbarNoLoggedModule } from "./navbar-no-logged/navbar-no-logged.module";
import { NavbarLoggedModule } from "./navbar-logged/navbar-logged.module";
import { CardNewContentModule } from './card-new-content/card-new-content.module';
import { CardLearningJourneyModule } from './card-learning-journey/card-learning-journey.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CardFeaturedCoursesModule } from './card-featured-courses/card-featured-courses.module';
import { CardArrivingHereModule } from './card-arriving-here/card-arriving-here.module';
import { FooterModule } from './footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardTitleCoursesModule } from './card-title-courses/card-title-courses.module';
import { LoginCardComponent } from './login-card/login-card.component';
import { KeepLoggedModule } from './login-card/keep-logged/keep-logged.module';
import { FormLoginModule } from './login-card/form-login/form-login.module';
import { FormLoginComponent } from "./login-card/form-login/form-login.component";
import { KeepLoggedComponent } from "./login-card/keep-logged/keep-logged.component";
import { RegisterCardPageComponent } from './register-card-page/register-card-page.component';
import { FormRegisterComponent } from "./register-card-page/form-register/form-register.component";



@NgModule({
    declarations: [
        AppComponent,
        PrincipalPageComponent,
        CoursesPageComponent,
        LoginCardComponent,
        RegisterCardPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PrincipalPageModule,
        NavbarNoLoggedModule,
        NavbarLoggedModule,
        CardNewContentModule,
        CardLearningJourneyModule,
        CardFeaturedCoursesModule,
        CardArrivingHereModule,
        FooterModule,
        BrowserAnimationsModule,
        MatButtonModule,
        CardTitleCoursesModule,
        MatCardModule,
        FormLoginModule,
        KeepLoggedModule,
        FormLoginComponent,
        KeepLoggedComponent,
        FormRegisterComponent
    ]
})
export class AppModule { }
