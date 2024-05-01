import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsServicesService } from 'src/app/Services/news-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform:FormGroup 
  constructor(private service:NewsServicesService , private fb:FormBuilder , private route:Router){
    this.loginform = this.fb.group({
      userName:['',Validators.required],
     password:['',Validators.required]
    })
    
   }
   get userName(){
    return this.loginform.get('userName')
   }
 
   get password(){
     return this.loginform.get('password')
    }
    
   
  login2() {
    this.service.login(this.userName?.value, this.password?.value).subscribe(
      (res) => {
        
        this.route.navigateByUrl('/News')
      },
      (error) => {
        console.log(error)
        
      }
    );
  }
  


}
