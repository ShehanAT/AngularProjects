import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild("homeBtn") homeBtn!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2){
  }

  ngAfterViewInit(){
    this.homeBtn.nativeElement.innerHTML = "Click here to go home!";
    this.renderer.setStyle(this.homeBtn.nativeElement, "background-color", "green");
  }
}