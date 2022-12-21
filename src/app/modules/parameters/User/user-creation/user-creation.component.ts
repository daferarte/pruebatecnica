import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { error } from 'jquery';
import { UserModel } from 'src/app/models/user.model';
import { ParametersService } from 'src/app/services/parameters.service';

declare const showMessage: any;
@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit{

  fgValidator!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ParametersService
    ){}

   
  ngOnInit(): void {
      this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator=this.fb.group({
      name: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      lastName: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      isMilitar: ['',[Validators.required]],
      isTemporal: ['',[Validators.required]],
      username: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['',[Validators.required, Validators.minLength(7), Validators.maxLength(50)]],
      email: ['',[Validators.required, Validators.email]],
      document: ['',[Validators.required],Validators.minLength(10), Validators.maxLength(12)],
      placeExpedition: ['',[Validators.required]],
      dateExpedition: ['',[Validators.required]],
      typeDocument: ['',[Validators.required]],
      address: ['',[Validators.required]],
      city: ['',[Validators.required]],
      phone: ['',[Validators.required],Validators.minLength(7), Validators.maxLength(10)],
      cellPhone: ['',[Validators.required],Validators.minLength(10), Validators.maxLength(10)],
      emergencyName: ['',[Validators.required]],
      emergencyPhone: ['',[Validators.required],Validators.minLength(10), Validators.maxLength(10)],
      countryId: ['',[Validators.required]],
    });
  }

  UserRegistriFN(){
    if(this.fgValidator.invalid){
      alert("invalido...");
      
    }else{
      let model = this.getUserData();
      
      this.service.UserRegister(model).subscribe(
        data =>{
          alert("Registro exitoso")
        },
        error =>{
          alert("Error de registro")
        }
      );

    }
    
    return false;
  }

  getUserData(): any{
    
    return {
      "appUserTB":{
        "lastName": this.fgv['lastName'].value,
        "name": this.fgv['name'].value,
        "IsMilitar": this.fgv['isMilitar'].value,
        "timeCreate": new Date(),
        "isTemporal": this.fgv['isTemporal'].value,
        "username": this.fgv['username'].value,
        "password": this.fgv['password'].value,
        "email": this.fgv['email'].value,
        "verificationToken": ""
      },
      "userDocumentTB":{
        "document": this.fgv['document'].value,
        "placeExpedition": this.fgv['placeExpedition'].value,
        "dateExpedition": this.fgv['dateExpedition'].value,
        "appUserTbId": "",
        "typeDocumentTbId": this.fgv['typeDocument'].value
      },
      "contactInfoTB":{
        "address": this.fgv['address'].value,
        "city": this.fgv['city'].value,
        "phone": this.fgv['phone'].value,
        "cellPhone": this.fgv['cellPhone'].value,
        "emergencyName": this.fgv['emergencyName'].value,
        "emergencyPhone": this.fgv['emergencyPhone'].value,
        "countryTbId": this.fgv['countryId'].value,
        "appUserTbId": ""
      }
      
      }
      
  }
    get fgv(){
      return this.fgValidator.controls;
    }
  
}
