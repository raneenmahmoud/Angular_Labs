import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  currentindex = 0;
  timer:any;
  images = [
    "assets/Images/pict 1.jpg",
    "assets/Images/pict 2.jpg",
    "assets/Images/pict 3.jpg",
    "assets/Images/pict 4.jpg"
  ];

  ShowPrevious(){
    if(this.currentindex > 0)
    {
      this.currentindex--;
    }
  }
  ShowNext(){
    if(this.currentindex < this.images.length-1)
    {
      this.currentindex++
    }
  }
  Slide(){
     this.timer = setInterval(() => {
      if(this.currentindex === this.images.length-1)
      {
        this.currentindex = 0;
      }
      else
      {
        this.currentindex++;
      }
    }, 650);
  }

  Stop(){
    clearInterval(this.timer);
  }
}
