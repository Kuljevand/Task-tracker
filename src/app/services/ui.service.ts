import { importProvidersFrom, Injectable } from '@angular/core';
import { faShirtsinbulk } from '@fortawesome/free-brands-svg-icons';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddTask: boolean = false;
private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}

