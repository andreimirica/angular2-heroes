import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";
import { RouterModule, Routes }   from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [HeroService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }