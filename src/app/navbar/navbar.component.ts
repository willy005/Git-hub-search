import { Component, OnInit } from '@angular/core';
import {AppService} from './../http/app.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profile:any;
  repos:any;
  username:string

  constructor(private appservice:AppService) {
  }
  findProfile(){
    this.appservice.updateProfile(this.username);
    this.appservice.getProfileDesc().subscribe(profile =>{
      console.log (profile);
      this.profile=profile;
    });
    this.appservice.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos;
    })
  }

  ngOnInit() {
  }

}
