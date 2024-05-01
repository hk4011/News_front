import { Component, OnInit } from '@angular/core';
import { NewsServicesService } from 'src/app/Services/news-services.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: any[] = []; // Use 'any' type for newsList

  constructor(private services: NewsServicesService) {}

  ngOnInit(): void {
    this.services.getAllNews().subscribe(
      (data: any[]) => { // Use 'any[]' type for data
        console.log('Received news data:', data);
        const currentDate = new Date();
        this.newsList = data.filter((newsItem: any) => { // Use 'any' type for newsItem
          const publicationDate = new Date(newsItem.creationDate);
          return publicationDate <= currentDate;
        }); // Filter newsList to include only items with publication dates equal to or before today

        // Iterate over each news item and set the imageUrl
        this.newsList.forEach(newsItem => {
          const randomNumber = Math.floor(Math.random() * 1000);
          newsItem.imageUrl = `https://source.unsplash.com/600x400/?computer&${randomNumber}`;
        });
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
