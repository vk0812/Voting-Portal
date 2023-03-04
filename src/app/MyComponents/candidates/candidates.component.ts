import { Component } from '@angular/core';
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent {

  //candidate names, update using database
  cand1 : string =""
  cand2 : string =""
  cand3 : string =""
  cand4 : string =""

  //candidate dp links, update using databse
  candp1 : string =""
  candp2 : string =""
  candp3 : string =""
  candp4 : string =""

  //current position of candidates, update using database
  curPos1 : string=""
  curPos2 : string=""
  curPos3 : string=""
  curPos4 : string=""

  //manifesto of candidates, update using database
  man1 : string =""
  man2 : string =""
  man3 : string =""
  man4 : string =""
  
}
