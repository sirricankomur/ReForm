import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '@core/guards/login.guard';
import { ResultComponent } from '@modules/result/result.component';



export const ResultLayoutRoutes: Routes = [
  { path: 'form/:formId/results', component: ResultComponent, canActivate:[LoginGuard] },
];