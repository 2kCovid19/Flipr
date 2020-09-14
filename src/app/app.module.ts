import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { HelplineComponent } from './helpline/helpline.component';
import { NotificationComponent } from './notification/notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FooterComponent } from './footer/footer.component';

const appRoot: Routes = [{path: '', component:MainpageComponent},
                          {path: 'home', component:MainpageComponent},
                         {path: 'helpline',component: HelplineComponent},
                         {path: 'notifications',component: NotificationComponent},
                         {path: 'dashboard', component:DashboardComponent},
                         {path: 'hospital', component:HospitalComponent}]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    HelplineComponent,
    NotificationComponent,
    HospitalComponent,
    DashboardComponent,
    FilterPipe,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
