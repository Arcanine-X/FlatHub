import { Injectable } from '@angular/core';
import { FlatData } from './flatData';
import { ListingService } from './listing.service';
import 'rxjs/Rx';
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

  getFlatData(): FlatData[]{
    return this.flatData;
  }

  getFlatInfo(distictId){
    this.clearFlatData();
    return this.listingService.getByDistrict(distictId).pipe(map(data=>{
      data['List'].forEach(element => {
        var aListing = new FlatData();
        aListing.pictureHREF = element.PictureHref;
        aListing.rentPerWeek = element.RentPerWeek;
        aListing.district = element.District;
        aListing.numberOfBeds = element.Bedrooms;
        aListing.propertyType = element. PropertyType;
        this.flatData.push(aListing);
      });
    }));
  }
}