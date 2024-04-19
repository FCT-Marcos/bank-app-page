import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TransactionsTableComponent } from '../../components/transactions-table/transactions-table.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TransactionsTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
