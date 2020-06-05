import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-web';


  outerx(event$: any) {

    console.log(`---${event$}---`);
    
  }
  
  outerx2(event$: any) {
    console.log(`xxx${event$}xxx`);
  }
}
