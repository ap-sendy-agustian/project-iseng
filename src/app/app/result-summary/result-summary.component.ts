import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.css']
})
export class ResultSummaryComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#f2f2f2');

  }

}
