import { Component, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  @Output() newQuotation = new EventEmitter<Quotation>();

  showForm = false;
  // pole do ukrywania i pokazywania formularza


  quotation: Quotation = {author: '', sentence: '', votes: 0}; //pole reprezentujace pojedyczny cytat


  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }//przycisk dodawania i chowania pola napisu do dodania cytatu


  addQuotation(){
    this.newQuotation.emit(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0};
  } // najpierw dodajemy cyctat na poczatku listy, a pozniej resetujemy ustawienia do pustego pola
}
