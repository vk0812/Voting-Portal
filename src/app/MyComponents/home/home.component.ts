import { Component,HostListener } from '@angular/core';
import { VotingEligibility } from 'src/VotingEligibility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){
    this.fun1();
  }

  fun1(){
    if(VotingEligibility.canVote){
      this.message1="VOTING"
      this.message2="is DUTY"
    }
    else{
      this.message1="Ty:) for"
      this.message2="VOTING"
      console.log(VotingEligibility.canVote)
    }
  

  }

  fun2(){
    this.message1="Dipa"
  }
  


  message1:string=""
  message2:string=""


  valueY:string=""
  valueYY:string=""
  @HostListener('window:scroll')
  goDown(){
    this.valueYY=scrollY+"000"+"px"
    this.valueY=scrollY+"000"+"px";
    document.documentElement.style.setProperty('--valu',this.valueY) //to scroll text
    document.documentElement.style.setProperty('--valu1',this.valueYY) // to scroll parliament

  }


  

}
