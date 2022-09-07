import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom icon';

  private readonly API = 'https://jumpcnj.cin.ufpe.br/api/desafio/image/7065/?detail_level=3'
  
  constructor (
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'lobster',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.API)
    )

  }
}
