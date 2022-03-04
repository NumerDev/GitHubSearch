import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
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
