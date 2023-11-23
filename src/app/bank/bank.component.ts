import { Component, OnInit } from '@angular/core';
import { BancaService } from '../banca.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  banks: Bank[] = [];

  constructor(private bankService: BancaService) {}

  ngOnInit(): void {
    this.bankService.getBanks().subscribe(
      (data) => {
        console.log('Dati banche ottenuti:', data);
        this.banks = data;
      },
      (error) => {
        console.error('Errore durante l\'ottenimento dei dati delle banche:', error);
      }
    );
  }

  toggleBankDetails(bank: Bank): void {
    bank.showDetails = !bank.showDetails;
  }

  getFunzionalita(bancaId: number): string[] {
    // Chiama il servizio per ottenere le funzionalità
    if (bancaId) {
      let funzionalitaList: string[] = [];
      this.bankService.getFunzionalitaByBancaId(bancaId).subscribe(
        (data) => {
          console.log('Dati funzionalità ottenuti:', data);
          funzionalitaList = data;
        },
        (error) => {
          console.error('Errore durante l\'ottenimento dei dati delle funzionalità:', error);
        }
      );
      return funzionalitaList;
    }
    return [];
  }
}
