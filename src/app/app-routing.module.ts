import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { DetailsModule } from './details/details.module';

const routes: Routes = [
  {
    path: '',
    component: SearchViewComponent,
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
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
