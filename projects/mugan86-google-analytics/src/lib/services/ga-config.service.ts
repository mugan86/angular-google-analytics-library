import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaConfigService {
  analiticsId: string;
  constructor(@Inject('analiticsId') private analitics: string) {
    this.analiticsId = this.analitics;
  }
}
