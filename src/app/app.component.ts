import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingService } from './services/listing.service';
import { DataStorageService } from './services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flathub';

  public listings: Observable<object>;
  public uniToDis = [];
  public districtId: any;
  public rentPerWeek: number;

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
    this.dataStorage.getFlatInfo(this.districtId)
    .subscribe();
    console.log(this.dataStorage.getFlatData());
  }
}