import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent  {
  public name!: String;
  constructor(private http:HttpClient){}
  private readonly API = 'https://jumpcnj.cin.ufpe.br/api/desafio/infos/7065/';
  postData(){
    this.http.post(this.API, {
      name:this.name
    }).toPromise().then((data:any)=>{
      console.log(data);
      console.log(JSON.stringify(data.json.name))
    })
  }

}
