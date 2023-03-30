import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'three-column-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  sedanDetail = `Choose a sedan for its affordability 
  and excellent fuel economy. 
  Ideal for cruising in the 
  city or on your next road trip`

  luxuryDetail = `Cruise in the best car 
  brands without the bloated prices. 
  Enjoy the enhanced comfort of a luxury rental 
  and arrive in style.`

  suvsDetail = `Take an SUV for its spacious 
  interior, power, and versatility. 
  Perfect for your next family vacation
  and off-road adventures.`
  
  listCards: CardOption[] = [
    {
      logo:'./../assets/3-column-preview/icon-sedans.svg',
      title: 'SEDANS',
      text: this.sedanDetail,
      color: 'hsl(31, 77%, 52%)'
    },
    {
      logo:'./../assets/3-column-preview/icon-suvs.svg',
      title: 'SUVS',
      text: this.suvsDetail,
      color: 'hsl(184, 100%, 22%)'
    },
    {
      logo:'./../assets/3-column-preview/icon-luxury.svg',
      title: 'LUXURY',
      text: this.luxuryDetail,
      color: 'hsl(179, 100%, 13%)'
    },
  ]
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#f2f2f2');
  }

}

export interface CardOption {
  logo: string,
  title: string,
  text: string,
  color: string
}
