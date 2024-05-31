import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { FindUsAtComponent } from './find-us-at/find-us-at.component';

@Component({
	selector: 'app-main-content',
	standalone: true,
	imports: [LandingPageComponent, HowToOrderComponent, OurMenuComponent, FindUsAtComponent],
	template: `
	<app-landing-page></app-landing-page>
	<app-how-to-order id="how-to-order"></app-how-to-order>
	<app-our-menu id="menu"></app-our-menu>
	<app-find-us-at id="find-us-at"></app-find-us-at>
	`,
	styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
