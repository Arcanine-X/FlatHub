import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss']
})
export class ResultpageComponent implements OnInit {
  public flatInfo = [];
  constructor(public dataStorage:DataStorageService) { }

  ngOnInit() {
    this.flatInfo = this.dataStorage.getFlatData();
    console.log(this.flatInfo);
  }

}
