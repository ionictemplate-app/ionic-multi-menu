import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    list = [
        {img: 'assets/images/1.jpg', name: 'Ionic5 Fruit App with Firebase'},
        {img: 'assets/images/2.jpg', name: 'Ionic 4 Online Clothes Shop App with Angular Admin Backend'},
        {img: 'assets/images/3.jpg', name: 'Ionic 5 / Angular 8 Dark UI Theme / Template App | Starter App'},
        {img: 'assets/images/4.jpg', name: 'Ionic 5 / Angular 8 Gray UI Theme / Template App | Starter App'},
        {img: 'assets/images/5.jpg', name: 'Ionic 5 / Angular 8 UI Blue Theme / Template App | Starter App'},
        {img: 'assets/images/6.jpg', name: 'Ionic 5 / Angular 8 Red UI Theme / Template App | Starter App'}
    ];

    constructor() {
    }

}
