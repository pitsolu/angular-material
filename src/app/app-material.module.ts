import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialModules = [

  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatFormFieldModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[
  	materialModules
  ]
})
export class AppMaterialModule { }


// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { OverlayModule } from '@angular/cdk/overlay';
// import { CdkTreeModule } from '@angular/cdk/tree';
// import { PortalModule } from '@angular/cdk/portal';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';

// import { MatButtonToggleModule } from '@angular/material/button-toggle';

// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatRippleModule } from '@angular/material/core';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';

// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTreeModule } from '@angular/material/tree';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatTooltipModule } from '@angular/material/tooltip';


// const materialModules = [
  // CdkTreeModule,
  // MatAutocompleteModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatListModule,
  // MatMenuModule,
  // MatProgressSpinnerModule,
  // MatPaginatorModule,
  // MatRippleModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatTableModule,
  // MatTabsModule,
  // MatToolbarModule,
  // MatButtonToggleModule,
  // MatTreeModule,
  // OverlayModule,
  // PortalModule,
  // MatBadgeModule,
  // MatGridListModule,
  // MatRadioModule,
  // MatDatepickerModule,
  // MatTooltipModule
// ];