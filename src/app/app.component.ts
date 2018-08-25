import { Component } from '@angular/core';
import { LocalitiesService } from './services/localities.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flathub';

  public localities: Observable<object>;

  public region: any;  

  constructor(
    public localitiesService: LocalitiesService,  ) {
    
    this.localities = this.localitiesService.getLocalities()
  }
}