import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  selectedCategory: string = 'general';
  selectedCountry: string = 'ar';

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
    { name: 'Argentina', value: 'ar' },
    { name: 'Australia', value: 'au' },
    { name: 'Austria', value: 'at' },
    { name: 'Belgium', value: 'be' },
    { name: 'Brazil', value: 'br' },
    { name: 'Bulgaria', value: 'bg' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  searchNews() {
    console.log(this.selectedCategory);
  }

}
