import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourcesComponent } from './sources/sources.component';
import { ClassifyComponent } from './classify/classify.component';
import { RulesComponent } from './rules/rules.component';
import { CategoriesComponent } from './categories/categories.component';
import { BreakdownComponent } from './breakdown/breakdown.component';

const routes: Routes = [
  { path: '', redirectTo: '/sources', pathMatch: 'full'},
  { path: 'sources', component: SourcesComponent },
  { path: 'classify', component: ClassifyComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'breakdown', component: BreakdownComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

