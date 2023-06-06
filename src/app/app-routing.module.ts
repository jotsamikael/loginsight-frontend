import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDeactivatedComponent } from './account-deactivated/account-deactivated.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { FirstUsageComponent } from './first-usage/first-usage.component';
import { H22ReportComponent } from './h22-report/h22-report.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PartnerComponent } from './partner/partner.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TerminalBrandComponent } from './terminal-brand/terminal-brand.component';
import { TerminalModelComponent } from './terminal-model/terminal-model.component';
import { TerminalTypeComponent } from './terminal-type/terminal-type.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'first-usage',
    component: FirstUsageComponent,

  },
  {
    path: 'account-deactivated',
    component: AccountDeactivatedComponent,

  },

  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(x => x.LayoutModule)
      }]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
