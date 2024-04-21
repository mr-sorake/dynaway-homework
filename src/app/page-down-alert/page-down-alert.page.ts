import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-down-alert',
  templateUrl: './page-down-alert.page.html',
  styleUrls: ['./page-down-alert.page.scss'],
})

export class PageDownAlertPage {
  @Input() isErrorOnLoad!: boolean;

  constructor(private alertController: AlertController) { }
  testBool: boolean = false;
  isAlertOpen: boolean = false;

  ngOnInit() {
    this.testBool=true;
    let isAction: boolean = true;
  }

  public alertButtons = [
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Alert Dismiss');
      },
    },
    {
      text: 'Reload',
      role: 'confirm',
      handler: () => {
        location.reload();
      },
    },
  ];

  displayAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}