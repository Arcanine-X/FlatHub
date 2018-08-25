import { Component } from '@angular/core';
import { LocalitiesService } from './services/localities.service';
import { Observable } from 'rxjs';
import { ListingService } from './services/listing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flathub';

  public localities: Observable<object>;
  public listings: Observable<object>;

  public region: any;  
  public districtId: any;
  public suburb: any;
  public uniToDis = [];

  constructor(
    public localitiesService: LocalitiesService,  
    public listingService: ListingService
  ) {
      this.uniToDis.push({
        Uni: "VUW",
        disID :47
      });
      this.uniToDis.push({
        Uni: "AUT",
        disID :7
      });      this.uniToDis.push({
        Uni: "Auckland Univeristy",
        disID :7
      });      this.uniToDis.push({
        Uni: "Otago Uni",
        disID :69
      });      this.uniToDis.push({
        Uni: "Canterbury",
        disID :60
      });      this.uniToDis.push({
        Uni: "Waikato",
        disID :16
      });
    this.localities = this.localitiesService.getLocalities()
    this.listings = this.listingService.getByDistrict(this.districtId);
  }

  public districtChanged () {
    this.listings = this.listingService.getByDistrict(this.districtId);
  }

  public search() {
    this.districtChanged();
  }
}