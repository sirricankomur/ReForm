import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from '@modules/workspace/workspace.component';
import { WorkspaceModule } from '@modules/workspace/workspace.module';
import { WorkspaceLayoutRoutes } from './workspace-layout.routing';
import { RouterModule } from '@angular/router';
import { FormCreateModule } from '@modules/form-create/form-create.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    WorkspaceModule,
    FormCreateModule,
    RouterModule.forChild(WorkspaceLayoutRoutes)
  ],
  exports: [
    NavbarComponent
  ]
})
export class WorkspaceLayoutModule { }
