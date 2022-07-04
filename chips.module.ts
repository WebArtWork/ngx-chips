import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ChipsComponent } from './chips.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ChipsComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ChipsComponent
	],
	providers: []
	
})

export class ChipsModule { }
