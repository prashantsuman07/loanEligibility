import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'loanCalculaor';
  public rate=0.01;
  public header=['Product','Solution','Pricing'];
  public logs=['Login','Get Started'];
  public isReadOnly=true;
  public tenure= [
    {value: '3', viewValue: '3 Months'},
    {value: '6', viewValue: '6 Months'},
    {value: '12', viewValue: '12 Months'}
  ];
  ngOnInit()
  {

  }
  public salary=0;
  public expense=0;
  public year=0;
  public prevemi=0;
  public emi=0;
  public principal=0;
  loginpage(){
    alert('We are under development, please wait! ;)');
  }
  loanamount(event){
   document.querySelectorAll(".amount")[0].innerHTML=event.target.value; 
   this.salary=Number(event.target.value);
  }
  expamount(event){
    document.querySelectorAll(".exp")[0].innerHTML=event.target.value; 
    this.expense=Number(event.target.value);
    this.emi=this.salary-this.expense;
    }
  yeartenure(event){
   this.year=event;
   this.principal=Math.round(this.emi*1/((this.rate/(Math.pow((1+this.rate),Number(this.year))-1))+this.rate))
  }
  toggle(event){
    if(event.checked == true){
      this.isReadOnly = false;
    }
    else{
      this.isReadOnly = true;
    }
  }
  onValueChange(event){
    if(event>150000){
      alert("you are not eligible");
      return;
    }
    this.prevemi=event;
    this.emi-=this.prevemi;
    this.principal=Math.round(this.emi*1/((this.rate/(Math.pow((1+this.rate),Number(this.year))-1))+this.rate))
  }
  money(){
    alert('Thank You!')
  }
}