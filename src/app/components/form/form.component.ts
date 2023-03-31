import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  selectedCategory: string = 'general';
  selectedCountry: string = 'us';

  categories: any[] = [
    { name: 'General', value: 'general' },
    { name: 'Business', value: 'business' },
    { name: 'Entertainment', value: 'entertainment' },
    { name: 'Health', value: 'health' },
    { name: 'Science', value: 'science' },
    { name: 'Sports', value: 'sports' },
    { name: 'Technology', value: 'technology' }
  ];

  countries: any[] = [
    {name: 'United States', value: 'us'},
    { name: 'France', value: 'fr' },
    { name: 'Germany', value: 'de' },
    {name: 'United Kingdom', value: 'gb'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  searchSingleNews() {
    const parameters = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }
    this.search.emit(parameters);
  }

}
