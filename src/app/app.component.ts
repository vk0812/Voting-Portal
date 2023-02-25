import { Component,DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'authentication';
  isadmin=false;
  //ismenurequired=false
  isMenuVisible=false;
  constructor(private router:Router,private service:AuthService){
    // let role=sessionStorage.getItem('role');
    // if(role=='admin'){
    //   this.isadmin=true;
    }
  
  ngDoCheck(): void {
    let currentroute = this.router.url;
    //let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }

    if (this.service.getuserrole() == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }
}
