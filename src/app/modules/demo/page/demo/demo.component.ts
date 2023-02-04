import { DemoService } from './../../../../services/demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private _demo: DemoService) { }

  ngOnInit(): void {
    this._demo.post().subscribe((resp: any) => {
      console.log("ankit", resp);
    }, (error => {
      console.log("ankit error", error);

    }))
  }

}
