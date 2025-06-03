import { Component, Input, input, OnInit } from '@angular/core';
import { Character } from '../../../interfaces/character';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() character: Character[] = [];
  ngOnInit(): void {
    console.log('Character data:', this.character);
  }
}
