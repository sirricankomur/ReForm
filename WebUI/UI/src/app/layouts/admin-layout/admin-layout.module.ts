import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from '@layouts/admin-layout/admin-layout.routing';
import { RouterModule } from '@angular/router';
import { ShareModule } from '@modules/share/share.module';
import { DataModule } from '@datas/data.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    ShareModule,
    CommonModule,
    DataModule,
    ClipboardModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  exports: [SidebarComponent],
})
export class AdminLayoutModule {}
