import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
    },{
      path: 'about',
      component: AboutComponent,
    },{
      path: 'pricing',
      component: PricingComponent,
    },{
      path: 'how-it-works',
      component: WorkflowComponent,
    },{
      path: 'contact',
      component: ContactComponent,
    },{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    WorkflowComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
