import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastPublicationDateFilter'
})
export class PastPublicationDateFilterPipe implements PipeTransform {

  transform(newsList: any[]): any[] {
    const currentDate = new Date();
    return newsList.filter(newsItem => {
      const creationDate = new Date(newsItem.creationDate);
      return creationDate <= currentDate;
    });
  }

}
