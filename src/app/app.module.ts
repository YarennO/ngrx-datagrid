import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SocialMediaListComponent } from './components/social-media-list/social-media-list.component';
import { AddSocialMediaComponent } from './components/add-social-media/add-social-media.component';
import {DevExtremeModule} from "devextreme-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {SocialMediaEffects} from "./store/social-media/social-media-effects";
import {SocialMediaReducer} from "./store/social-media/social-media-reducer";
import {TooltipModule} from "primeng/tooltip";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaListComponent,
    AddSocialMediaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DevExtremeModule,
    StoreModule.forRoot({socialMedia: SocialMediaReducer}),
    EffectsModule.forRoot([SocialMediaEffects]),
    //StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
