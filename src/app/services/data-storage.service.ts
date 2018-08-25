import { Injectable } from '@angular/core';
import { FlatData } from './flatData';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private flatData: FlatData[];

  constructor() { }

  addToFlatData(data): void{
    this.flatData.push(data);
  }

  clearFlatData(): void{
    this.flatData = [];
  }

  getFlatData(): FlatData[]{
    return this.flatData;
  }
}
