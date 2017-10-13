import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switchboard: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  switchOnOff(index,data){
    this.switchboard[index] = data;
  }
}
