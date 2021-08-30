import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from '../contacts/contacts.component';
import { HomeComponent } from '../home/home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
  	HomeComponent,
  	ContactsComponent,
  	LayoutComponent,
  	SidenavComponent,
  	HeaderComponent
  ],
  // exports:[LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class LayoutModule { }
