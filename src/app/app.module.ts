import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocalitiesService } from './services/localities.service';
import { ListingService } from './services/listing.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LocalitiesService,
    ListingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
