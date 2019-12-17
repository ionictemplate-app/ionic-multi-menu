import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public pageList = [
        {
            iconName: 'home', displayText: 'Home', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'home', displayText: 'Home', url: '/home'},
                {iconName: 'basketball', displayText: 'Home 2', url: '/home2'},
                {iconName: 'briefcase', displayText: 'Home 3', url: '/home3'},
                {iconName: 'boat', displayText: 'Home 4', url: '/home4'},
                {iconName: 'cash', displayText: 'Home 5', url: '/home5'},
                {iconName: 'clock', displayText: 'Home 6', url: '/home6'},
                {iconName: 'card', displayText: 'Home 7', url: '/home7'}
            ]
        },
        {
            iconName: 'list', displayText: 'Product List', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'card', displayText: 'Search List', url: '/list'},
                {iconName: 'cash', displayText: 'Search List2', url: '/list1'},
                {iconName: 'clock', displayText: 'Infinite Scroll List', url: '/list2'},
                {iconName: 'clock', displayText: 'Product Card List', url: '/list3'},
                {iconName: 'clock', displayText: 'News List', url: '/list4'},
                {iconName: 'clock', displayText: 'Travel List', url: '/list5'},
                {iconName: 'clock', displayText: 'Card List', url: '/list6'},
            ]
        },
        {
            iconName: 'flame', displayText: 'Animation List', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'flask', displayText: 'Flip List ', url: '/animation-list1'},
                {iconName: 'headset', displayText: 'Slide List', url: '/animation-list2'},
                {iconName: 'infinite', displayText: 'Slide Left List', url: '/animation-list3'},
                {iconName: 'leaf', displayText: 'Rotate List', url: '/animation-list4'},
                {iconName: 'medal', displayText: 'Rotate2 List', url: '/animation-list5'},
                {iconName: 'medical', displayText: 'Movie List', url: '/animation-list6'},
                {iconName: 'nuclear', displayText: 'Slide Bottom List', url: '/animation-list7'}
            ]
        },
        {
            iconName: 'radio-button-on', displayText: 'Sliding，reorder,Select', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'map', displayText: 'Sliding List', url: '/list-sliding'},
                {iconName: 'magnet', displayText: 'Reorder List', url: '/list-reorder'},
                {iconName: 'moon', displayText: 'Checkbox List', url: '/list-checkbox'},
                {iconName: 'microphone', displayText: 'Radio Group List', url: '/list-radio'},
                {iconName: 'git-commit', displayText: 'Virtual Scroll List', url: '/list-virtual-scroll'},
                {iconName: 'grid', displayText: 'Select List', url: '/list-select'},
                {iconName: 'moon', displayText: 'Toggle List', url: '/list-toggle'},
            ]
        },
        {
            iconName: 'flower', displayText: 'Progress', expanded: false, hasChild: true,
            subOptions: [
                {iconName: 'hand', displayText: 'Pull Refresher', url: '/loading1'},
                {iconName: 'link', displayText: 'Infinite Scroll', url: '/loading2'},
                {iconName: 'move', displayText: 'Top Loading', url: '/loading3'},
                {iconName: 'pie', displayText: 'Avatar Skeleton List', url: '/loading4'},
                {iconName: 'play', displayText: 'Card Skeleton List', url: '/loading5'},
                {iconName: 'play-circle', displayText: 'Profile Skeleton List', url: '/loading6'},
                {iconName: 'pricetag', displayText: 'Card Skeleton List2', url: '/loading7'},
                {iconName: 'play', displayText: 'Default Loading', url: '/loading8'},
            ]
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
