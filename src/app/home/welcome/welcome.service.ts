import { Category } from 'src/app/shared/category.model';

export class WelcomeService {
  private categories: Category[] = [
    { id: 1, name: 'Diamond Paintings' },
    { id: 2, name: 'Painting By Numbers' },
    { id: 3, name: 'Puslespil' },
    { id: 4, name: 'Badeænder' },
    { id: 5, name: 'Julepynt' },
  ];

  private contact: Category[] = [
    { id: 1, name: 'Forsendelse & Levering' },
    { id: 2, name: 'Sikker handel' },
    { id: 3, name: 'Handelsbetingelser' },
    { id: 4, name: 'Cookiepolitik' },
    { id: 5, name: 'Privatlivspolitik' },
  ];

  private brands: Category[] = [
    { id: 1, name: 'Anne Stokes' },
    { id: 2, name: 'Crystal Art' },
    { id: 3, name: 'Crystal Art Ur' },
    { id: 4, name: 'Crystal Card' },
    { id: 5, name: 'Disney' },
    { id: 6, name: 'Graham Thompson' },
    { id: 7, name: 'Jan van Haasteren' },
    { id: 8, name: 'Josephine Wall' },
    { id: 9, name: 'LED Crystal Art' },
    { id: 10, name: 'Lori Schory' },
    { id: 11, name: 'Personligt Motiv' },
    { id: 12, name: 'Wasgij' },
  ];

  private sizesPuzzle: Category[] = [
    { id: 1, name: '500 Brikker' },
    { id: 1, name: '1000 Brikker' },
    { id: 1, name: '1500 Brikker' },
    { id: 1, name: '2000 Brikker' },
    { id: 1, name: '3000 Brikker' },
    { id: 1, name: '4000 Brikker' },
    { id: 1, name: '6000-18000 Brikker' },
    { id: 1, name: 'Puslespil til Børn' },
  ];

  public getCategories() {
    return this.categories.slice();
  }

  public getContacts() {
    return this.contact.slice();
  }

  public getBrands() {
    return this.brands.slice();
  }
}
