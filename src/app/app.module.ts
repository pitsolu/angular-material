import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppMaterialModule } from './app-material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // ContactsComponent,
    // LayoutComponent,
    // SidenavComponent,
    // HeaderComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // FlexLayoutModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
