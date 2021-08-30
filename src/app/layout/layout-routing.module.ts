import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from "../contacts/contacts.component";
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{ path: 'app', component: LayoutComponent, 

		children: [

			{ path: 'home', component: HomeComponent},
  			{ path: 'contacts', component: ContactsComponent }
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
