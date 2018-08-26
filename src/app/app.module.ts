import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocalitiesService } from './services/localities.service';
import { ListingService } from './services/listing.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  MatButtonModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatFormFieldModule, 
  MatSliderModule, 
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultpageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
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
