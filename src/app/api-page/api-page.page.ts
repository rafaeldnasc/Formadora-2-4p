import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonSpinner} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.page.html',
  styleUrls: ['./api-page.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, IonButton, IonCard, IonSpinner, RouterModule
  ]
})
export class ApiPagePage {
  private http = inject(HttpClient);
  
  catUrl = '';
  loading = false;

  loadCat() {
    this.loading = true;
    this.http.get<any>('https://api.thecatapi.com/v1/images/search')
      .subscribe({
        next: (data) => {
          this.catUrl = data[0].url;
          this.loading = false;
        },
        error: () => this.loading = false
      });
  }
}