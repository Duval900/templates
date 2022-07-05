import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-prefessional-cv',
  templateUrl: './prefessional-cv.component.html',
  styleUrls: ['./prefessional-cv.component.css']
})
export class PrefessionalCvComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  printPage() {
    window.print();
  }

}
