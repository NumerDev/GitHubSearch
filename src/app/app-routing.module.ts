import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';

const routes: Routes = [
  {
    path: '',
    component: SearchViewComponent,
  },
  {
    path: '**',
    component: WildcardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
