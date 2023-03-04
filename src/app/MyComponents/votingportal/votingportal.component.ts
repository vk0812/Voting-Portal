import { Component } from '@angular/core';
import { VotingEligibility } from 'src/VotingEligibility';

@Component({
  selector: 'app-votingportal',
  templateUrl: './votingportal.component.html',
  styleUrls: ['./votingportal.component.css'],
})
export class VotingportalComponent {

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




  //Contains serial no. of the person voted for
  vsl : number = 0  //must be stored in server

  //vote/voted
  inf:string="Vote"
  
  constructor() {
    //sets initial thank you voting to not visible
    document.documentElement.style.setProperty('--val5',"none")


    //so that people can't cast vote twice
    if(this.vsl==1){
      this.onClick1();
    }
    if(this.vsl==2){
      this.onClick1();
    }
    if(this.vsl==3){
      this.onClick1();
    }
    if(this.vsl==4){
      this.onClick1();
    }
  }

  //button1 event
  onClick1() {
   VotingEligibility.hasCastVote();
   this.vsl=1
   this.inf="Voted"
   document.documentElement.style.setProperty('--val2',"none")
   document.documentElement.style.setProperty('--val3',"none")
   document.documentElement.style.setProperty('--val4',"none")
   document.documentElement.style.setProperty('--val5',"yes")


  }
  
  //button1 event
  onClick2() {
    VotingEligibility.hasCastVote();
    this.vsl=2
    this.inf="Voted"
    document.documentElement.style.setProperty('--val1',"none")
    document.documentElement.style.setProperty('--val3',"none")
    document.documentElement.style.setProperty('--val4',"none")
    document.documentElement.style.setProperty('--val5',"yes")

  }

  //button1 event
  onClick3() {
    VotingEligibility.hasCastVote();
    this.vsl=3
    this.inf="Voted"
    document.documentElement.style.setProperty('--val1',"none")
    document.documentElement.style.setProperty('--val2',"none")
    document.documentElement.style.setProperty('--val4',"none")
    document.documentElement.style.setProperty('--val5',"yes")

  }

  //button1 event
  onClick4() {
    VotingEligibility.hasCastVote();
    this.vsl=4
    this.inf="Voted"
    document.documentElement.style.setProperty('--val1',"none")
    document.documentElement.style.setProperty('--val2',"none")
    document.documentElement.style.setProperty('--val3',"none")
    document.documentElement.style.setProperty('--val5',"yes")

  }
}
