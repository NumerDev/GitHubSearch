import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { SearchViewComponent } from './components/search-view/search-view.component';

@NgModule({
  declarations: [AppComponent, WildcardComponent, SearchViewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
