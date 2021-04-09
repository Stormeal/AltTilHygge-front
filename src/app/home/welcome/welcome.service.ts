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

  public getCategories() {
    return this.categories.slice();
  }

  public getContacts() {
    return this.contact.slice();
  }
}
