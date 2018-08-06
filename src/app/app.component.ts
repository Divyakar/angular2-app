import { Component } from '@angular/core';
import  {  HttpClient  }  from  '@angular/common/http';
import { NotesdataService } from './notesdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;
  notes:any;
  respectiveData:any;
  respectiveitem:any;
  hideData:any = true;
  months:any= ['jan', 'febru',' march',' april'];
  name:any;
  value:any;
  username:any;
  password:any;
  logInPage:any = true;
  un:any;
  //using http directly
  // constructor(private http: HttpClient) {
  //   this.http.get("https://api.myjson.com/bins/16kjxi").subscribe((response: any) => {
  //     console.log(response);
  //     this.data = response.Data;
  //   });
  // }
  //get data using http in a service
  constructor(private notesService: NotesdataService) {
    this.notesService.getNotes('https://api.myjson.com/bins/16kjxi').subscribe((results: any)=> {
      console.log(results);
      this.notes = results.Data;
     });
   }
  getData(notesData) {
     for (let respectiveitem of this.notes) {
       if (respectiveitem.id === notesData) {
        this.respectiveData = respectiveitem.data;
        this.logInPage =false;
        
       }
    }
  }

  closethepopup(){
    this.hideData=true;
  }
  submitForm(){
    if(this.username === 'divya'&& this.password === '12345' || this.username === 'vidya' && this.password === '67890' ){
      this.hideData =false;
      this.logInPage=true;
      this.un=this.username;
      this.username="";
      this.password="";
    }
    else{
      console.log('wrong userid or password');
    }
  }
 }
