import { Injectable } from '@angular/core';
import { FlatData } from './flatData';
import { ListingService } from './listing.service';
 import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private flatData: FlatData[];

  constructor(private listingService: ListingService) { }

  addToFlatData(data): void{
    this.flatData.push(data);
  }

  clearFlatData(): void{
    this.flatData = [];
  }

  public getFlatData(): FlatData[]{
    return this.flatData;
  }

  public getFlatInfo(distictId, maxRent){
    this.clearFlatData();
    return this.listingService.getByDistrict(distictId).pipe(map(data=>{
      console.log(data);
      data['List'].forEach(element => {
        if(element.RentPerWeek <= maxRent){
          var aListing = new FlatData();
          aListing.pictureHREF = element.PictureHref.replace('thumb', 'plus');
          aListing.rentPerWeek = element.RentPerWeek;
          aListing.district = element.District;
          aListing.numberOfBeds = element.Bedrooms;
          aListing.propertyType = element. PropertyType;
          this.flatData.push(aListing);
        }
      });
    }));
   }
}
