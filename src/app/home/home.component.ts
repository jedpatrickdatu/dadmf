import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainNavService } from '../main-nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private mainNav: MainNavService
  ) {
    this.mainNav.showMenuItems();
   }

  ngOnInit() {
    console.log('home');
  }

  redirectToDonatePage(){
    this.router.navigate(['donate']);
  }
}
