import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainNavService {
  isShowMenuItems = true;

  constructor() {}

  hideMenuItems() { this.isShowMenuItems = false; }

  showMenuItems() { this.isShowMenuItems = true; }

  toggleMenuItemsVisibility() { this.isShowMenuItems = !this.isShowMenuItems; }
}
