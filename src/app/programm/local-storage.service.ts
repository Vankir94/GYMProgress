import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  saveData(keyValue: string, value: string) {
    localStorage.setItem(keyValue, value);
  }

  takeData(keyData: string) {
    return localStorage.getItem(keyData);
  }

  createData() {
    const data = {
      id: null,
      name: '',
      durationInDays: 0,
      trainingCycles: []
    }

    
  }
}
