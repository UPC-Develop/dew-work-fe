import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{
  
  title = 'home';

  constructor() {
  
  }

  ngOnDestroy(): void {
  
  }

}
