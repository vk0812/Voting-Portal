import { Component } from '@angular/core';
import { CandidatesComponent } from './candidates.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-work';
  data = []
  constructor(private candidate:CandidatesComponent){
    this.candidate.getData().subscribe(data=>{ 
      console.warn(data)
      this.data
    })
  }

}