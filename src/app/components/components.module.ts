import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomSideMenuComponent} from './custom-side-menu/custom-side-menu.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CustomSideMenuComponent
    ],
    exports: [
        CustomSideMenuComponent
    ],
    entryComponents: [],
})
export class ComponentsModule {
}
