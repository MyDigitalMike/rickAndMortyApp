import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../service/api-service.service';
import { CardComponent } from '../../shared/card/card.component';
import { first, firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-rick-and-morty-view',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './rick-and-morty-view.component.html',
  styleUrl: './rick-and-morty-view.component.css'
})
export class RickAndMortyViewComponent implements OnInit {
  characters: any[] = [];
  nextUrl: string | null = '';
  previusUrl: string | null = '';
  constructor(private apiService: ApiServiceService) { }
  ngOnInit(): void {
    this.fetchNextPage();
  }
  async fetchNextPage() {
    try{
      const response = await firstValueFrom(this.apiService.getNextPage());
      this.characters = response.characters;
      this.nextUrl = response.nextUrl;
      this.previusUrl = response.previusUrl;
    }
    catch (error) {
      console.error('Error fetching next page:', error);
    }
  }
  async fetchPreviusPage() {
    try{
      const response = await firstValueFrom(this.apiService.getPreviusPage());
      this.characters = response.characters;
      this.nextUrl = response.nextUrl;
      this.previusUrl = response.previusUrl;
    }
    catch (error) {
      console.error('Error fetching previous page:', error);
    }
  }
}
