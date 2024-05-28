import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';

@Component({
	selector: 'app-main-content',
	standalone: true,
	imports: [LandingPageComponent, HowToOrderComponent, OurMenuComponent],
	template: `
	<app-landing-page></app-landing-page>
	<app-how-to-order id="how-to-order"></app-how-to-order>
	<app-our-menu id="menu"></app-our-menu>
	`,
	styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
