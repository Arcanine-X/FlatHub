import { Component, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { LocalitiesService } from './services/localities.service';
import { Observable } from 'rxjs';
import { ListingService } from './services/listing.service';
import { DataStorageService } from './services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'FlatHub';

  public listings: Observable<object>;
  public uniToDis = [];
  public districtId: any;
  public rentPerWeek: number | null = null;

  constructor(
    public listingService: ListingService,
    public dataStorage: DataStorageService
  ) {
      this.uniToDis.push(
        {Uni: "VUW", disID :47},
        {Uni: "AUT", disID :7},
        {Uni: "Auckland Univeristy", disID :7},
        {Uni: "Otago Uni", disID :69},
        {Uni: "Canterbury", disID :60},
        {Uni: "Waikato", disID :16}
      )
    this.listings = this.listingService.getByDistrict(this.districtId);
  }

  public search() {
    this.dataStorage.getFlatInfo(this.districtId, this.rentPerWeek)
    .subscribe();
    console.log(this.dataStorage.getFlatData());
    console.log(this.rentPerWeek);
  }
}
