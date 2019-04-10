import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarouselItem } from '../models/carousel-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  _carouselItems: CarouselItem[] = [];
  constructor() {}

  getCarouselItems(): Observable<CarouselItem[]> {
    return of(this._carouselItems);
  }

  getCarouselItem(id: number) {
    return this.getCarouselItems().pipe(
      map((items: CarouselItem[]) => items.find(item => item.id === id))
    );
  }

  hasCarouselData(): boolean {
    // handle this later using service data lookup from json file
    return true;
  }
}
