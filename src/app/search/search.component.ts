import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingService } from '../services/listing.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  title = 'FlatHub';

  public listings: Observable<object>;
  public uniToDis = [];
  public districtId: any;
  public rentPerWeek: number;
  constructor(
    public listingService: ListingService,
    public dataStorage: DataStorageService
  ) {
      this.uniToDis.push(
        {Uni: "Victoria University of Wellington", disID :47},
        {Uni: "Auckland University of Technology", disID :7},
        {Uni: "Auckland University", disID :7},
        {Uni: "Otago University", disID :69},
        {Uni: "Canterbury University", disID :60},
        {Uni: "Waikato University", disID :16}
      )
    this.listings = this.listingService.getByDistrict(this.districtId);
  }

  ngOnInit() {
    document.documentElement.classList.add("searchpage");
    
  }

  ngOnDestroy() {
    document.documentElement.classList.remove("searchpage");
    
  }


  
  public search() {
    this.dataStorage.getFlatInfo(this.districtId, this.rentPerWeek)
    .subscribe();
    console.log(this.dataStorage.getFlatData());
    console.log(this.rentPerWeek);
  }

}
