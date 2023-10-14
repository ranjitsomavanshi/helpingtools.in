import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FacebookModule } from 'ngx-facebook';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InstagramToolsComponent } from './components/tools/instagram-tools/instagram-tools.component';
// import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ContactComponent } from './components/contact/contact.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from './material-module';
import { JsonToolsComponent } from './components/tools/json-tools/json-tools.component';
import {MatGridListModule} from '@angular/material/grid-list';
// import { NgxJsonViewerModule } from 'ngx-json-viewer';
// import { NgxEditorModule } from 'ngx-editor';
// import { AceEditorModule } from 'ng2-ace-editor';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   // ...
//   imports: [
//     // ...
//     FormsModule,
//     ReactiveFormsModule,
//   ],
//   // ...
// })


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
    // NgbModule,
    // NgbCollapseModule,
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
