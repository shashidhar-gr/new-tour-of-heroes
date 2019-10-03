import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../app/Hero';
import { HEROES } from '../app/mock-heroes';
import { MessageService } from '../app/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable <Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
}
