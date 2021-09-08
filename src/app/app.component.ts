import { Component,OnInit,OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'utube';
  mediaSub!: Subscription;
  
  deviceLg!: boolean;
  deviceMd!: boolean;
  deviceSm!: boolean;
  deviceXs!: boolean;
  
  constructor(public mediaObserver: MediaObserver) {}
  
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange) => {
      console.log(result.mqAlias);
      this.deviceLg = result.mqAlias == 'lg' ? true : false;
      this.deviceMd = result.mqAlias == "md" ? true : false;
      this.deviceSm = result.mqAlias == "sm" ? true : false;
      this.deviceXs = result.mqAlias == "xs" ? true : false;
    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}
