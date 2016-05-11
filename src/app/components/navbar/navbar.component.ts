import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

// Components from Navbar
import {NavbarNewLeadComponent} from './navbar-newLead.component';
import {NavbarSearchComponent} from './navbar-search.component';

@Component({
  selector: 'sd-navbar',
  moduleId: module.id,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarNewLeadComponent, NavbarSearchComponent]
})
export class NavbarComponent {}
