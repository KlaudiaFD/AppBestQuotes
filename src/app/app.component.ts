import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: Quotation[] = QUOTES;
 //nowe pole reprezentujace liste cytatow

  addVote(quotation: Quotation, value: number){
    quotation.votes += value;
  } // głosowanie na konkretny cytat

  bestQuotes(){
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(){
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation: Quotation){
    this.quotes.unshift(quotation);
  }
}
