import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { RepositoryInfoComponent } from './components/repository-info/repository-info.component';

/* Lazy loading module check */
console.log('Details module loaded');

@NgModule({
  declarations: [RepositoryInfoComponent],
  imports: [CommonModule, DetailsRoutingModule],
})
export class DetailsModule {}
