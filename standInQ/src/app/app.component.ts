import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StandInQ (data passed from parent component.)';

  handleTrgger(eventDate){
    console.log("Got from child-component ->" + eventDate)
    this.title = "StandInQ (" + eventDate +")"
  }

  searchClicked(){
    console.log("Search clicked!")
    
  }



}
