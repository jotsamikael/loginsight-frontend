import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { SidebarDashboardModule } from './sidebar-dashboard/sidebar-dashboard.module';
import { ExtractionComponent } from './extraction/extraction.component';
import { HttpClientModule } from '@angular/common/http';
import { H22ReportComponent } from './h22-report/h22-report.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalModelComponent } from './terminal-model/terminal-model.component';
import { TerminalTypeComponent } from './terminal-type/terminal-type.component';
import { TerminalBrandComponent } from './terminal-brand/terminal-brand.component';
import { PartnerComponent } from './partner/partner.component';
// POPUPS
import { CreatePartnerComponent } from './popups/partner/create-partner/create-partner.component';
import { UpdatePartnerComponent } from './popups/partner/update-partner/update-partner.component';
import { CreateBranchComponent } from './popups/branch/create-branch/create-branch.component';
import { UpdateBranchComponent } from './popups/branch/update-branch/update-branch.component';
import { CreateBrandComponent } from './popups/Brand/create-brand/create-brand.component';
import { UpdateBrandComponent } from './popups/Brand/update-brand/update-brand.component';

import { CreatePointOfPresenceComponent } from './popups/point_of_presence/create-point-of-presence/create-point-of-presence.component';
import { UpdatePointOfPresenceComponent } from './popups/point_of_presence/update-point-of-presence/update-point-of-presence.component';
import { DetailsPointOfPresenceComponent } from './popups/point_of_presence/details-point-of-presence/details-point-of-presence.component';
import { CreateTerminalComponent } from './popups/Terminal/create-terminal/create-terminal.component';
import { UpdateTerminalComponent } from './popups/Terminal/update-terminal/update-terminal.component';
import { CreateTerminalModelComponent } from './popups/TerminalModel/create-terminal-model/create-terminal-model.component';
import { UpdateTerminalModelComponent } from './popups/TerminalModel/update-terminal-model/update-terminal-model.component';
import { CreateTerminalTypeComponent } from './popups/TerminalType/create-terminal-type/create-terminal-type.component';
import { UpdateTerminalTypeComponent } from './popups/TerminalType/update-terminal-type/update-terminal-type.component';
import { RouterModule } from '@angular/router';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarDashboardComponent,
    H22ReportComponent,
    DashboardComponent,
    
  ],
  imports: [

    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //SidebarDashboardModule,
    HttpClientModule,



    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
