import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
