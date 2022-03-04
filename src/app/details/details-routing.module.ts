import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryInfoComponent } from './components/repository-info/repository-info.component';

const routes: Routes = [
  { path: ':owner/:repo', component: RepositoryInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
