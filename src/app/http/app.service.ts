import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private username:string;
  private clientid='971d9cb2906ff5d8f9d5'
  private clientsecret='912f59515c6f726e0f3bbfd9bedc3ebc5dad591f'



  constructor(private http:HttpClient) {
    this.username="Tomorenge"

}
getProfileDesc(){
  return this.http.get("https://api.github.com/users/"+this.username+"?client_id="+this.clientid+"&client_secret="+this.clientsecret)

}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/"+this.username+"/repos?client_id="+this.clientid+"&client_secret="+this.clientsecret)



}
updateProfile(username:string){
  this.username=username
}
}
