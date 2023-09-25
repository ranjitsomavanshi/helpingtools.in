import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstagramToolsComponent } from './components/tools/instagram-tools/instagram-tools.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ContactComponent } from './components/contact/contact.component';
import { JsonToolsComponent } from './components/tools/json-tools/json-tools.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:InstagramToolsComponent,
    path:'instagram-tools'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:PrivacyPolicyComponent,
    path:'privacy-policy'
  },
  {
    component:DisclaimerComponent,
    path:'disclaimer'
  },
  {
    component:TermsAndConditionsComponent,
    path:'terms-and-conditions'
  },
  {
    component:JsonToolsComponent,
    path:'json-viwer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
