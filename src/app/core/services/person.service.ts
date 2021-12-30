import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { personsData } from '../constants/persons-static-data';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];
  constructor() {
    this.persons$ = new BehaviorSubject([]);
    this.persons = personsData;
  }

  getAll() {
    this.persons$.next(this.persons);
  }

  add(person: Person) {
    this.persons.push(person);
  }

  edit(person: Person) {
    let findElem = this.persons.find(p => {return p.idRecord== person.idRecord});

    findElem.patientName = person.patientName;
    // findElem.age = person.age;
    // findElem.job = person.job;

    this.persons$.next(this.persons);
  }

  remove(id: number) {
    console.log('??',this.persons);
    this.persons = this.persons.filter(p =>
      p.idRecord !== id
    );

    console.log(this.persons);

    this.persons$.next(this.persons);
  }

}
