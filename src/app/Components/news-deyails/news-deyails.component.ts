import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsServicesService } from 'src/app/Services/news-services.service';

@Component({
  selector: 'app-news-deyails',
  templateUrl: './news-deyails.component.html',
  styleUrls: ['./news-deyails.component.css']
})
export class NewsDeyailsComponent implements OnInit{
  NewId:number=0;
  News:any;
constructor(private activerouter:ActivatedRoute,private service:NewsServicesService){}
  ngOnInit(): void {
    this.NewId=Number(this.activerouter.snapshot.paramMap.get("ID"));
    this.service.getbyId(this.NewId).subscribe(p=>this.News=p);
  }
  formatDate(dateObj: any): string {
    return `${dateObj.year}-${dateObj.month}-${dateObj.day}`;
  }
}
