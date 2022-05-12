import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@modules/home/home.component';
import { HomeLayoutComponent } from './home-layout.component';

export const HomeLayoutRoutes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'home', component: HomeLayoutComponent },
];