import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InstagramToolsComponent } from './components/tools/instagram-tools/instagram-tools.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { JsonToolsComponent } from './components/tools/json-tools/json-tools.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InstagramToolsComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
    TermsAndConditionsComponent,
    ContactComponent,
    JsonToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    NgxJsonViewerModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
