import { Component, HostListener } from '@angular/core';

// #1e453e
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  // below code is used for turning the navigation bar opaque and transparent depending upon how much we have scrolled
  logoloc: string = 'assets/iitbvp-logo-tp.png'; //changes logo  depending upon scrolling
  opa: number = 1; //changes opacity of home, candidates, voting portal depending upon scrolling
  additional: string = ''; //helps to change opacity of navigation bar

  //Change below two variables to username and user dp from database
  username: string = 'Welcome user';
  dpurl: string ='';

  //listens for window scrolling and changes the navigation bar accordingly
  @HostListener('window:scroll')
  opaque() {
    if (scrollY <= 56) {
      this.additional = '';
      this.logoloc = 'assets/iitbvp-logo-tp.png';
      this.opa = 1;
    }
    if (scrollY >= 56) {
      this.additional = 'navbar-scrolled';
      this.logoloc = 'assets/iitbvp-logo-tp2.png';
      this.opa = 1;
      document.documentElement.style.setProperty('--col', '#a42153');
    }
    if (scrollY >= 650 && scrollY < 810) {
      this.additional = '';
      this.opa = 0;
    }
    if (scrollY >= 810 && scrollY <= 1450) {
      this.additional = 'navbar-scrolled';
      this.opa = 1;
      document.documentElement.style.setProperty('--col', '#1e453e');
    }
    if (scrollY > 1450 && scrollY < 1500) {
      this.additional = '';
      this.opa = 0;
    }
    if (scrollY >= 1500) {
      this.additional = 'navbar-scrolled';
      this.opa = 1;
      document.documentElement.style.setProperty('--col', '#3b3c36');
    }
  }

  //Changes the Welcome on navigation bar to signout and vice versa
  signoutify() {
    this.username = 'Sign Out';
  }
  usernamify() {
    this.username = 'Welcome Dipayan';
  }

  //Sign Out Button
  signOut() {
    console.log('Signout');
    //Put Code Here
    //To take back to login screen
  }
}
