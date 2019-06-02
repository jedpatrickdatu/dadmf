import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainNavService {
  isShowMenuItems: boolean;

  constructor() { this.isShowMenuItems = false; }

  hideMenuItems() { this.isShowMenuItems = false; }

  showMenuItems() { this.isShowMenuItems = true; }

  toggleMenuItemsVisibility() { this.isShowMenuItems = !this.isShowMenuItems; }
}
