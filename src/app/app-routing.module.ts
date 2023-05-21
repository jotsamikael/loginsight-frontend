import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { H22ReportComponent } from './h22-report/h22-report.component';
import { PartnerComponent } from './partner/partner.component';
import { TerminalBrandComponent } from './terminal-brand/terminal-brand.component';
import { TerminalModelComponent } from './terminal-model/terminal-model.component';
import { TerminalTypeComponent } from './terminal-type/terminal-type.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ExtractionComponent,
 
  },
  {
    path: 'partner',
    component: PartnerComponent,

  },
  {
    path: 'h22-report',
    component: H22ReportComponent,

  },
  {
    path: 'dashboard',
    component: DashboardComponent,

  },
  {
    path: 'extraction',
    component: ExtractionComponent,

  },
  {
    path: 'terminal',
    component: TerminalComponent,

  },
  {
    path: 'terminal-model',
    component: TerminalModelComponent,

  },
  {
    path: 'terminal-type',
    component: TerminalTypeComponent,

  },
  {
    path: 'terminal-brand',
    component: TerminalBrandComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
