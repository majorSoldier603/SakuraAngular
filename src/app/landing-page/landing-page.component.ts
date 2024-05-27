import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
	selector: 'app-landing-page',
	standalone: true,
	imports: [CommonModule, NavbarComponent],
	template:`
	<section>
		<app-navbar></app-navbar>
		<h1 class="FontRalewayBold ColorWhite">SAKURA RAMEN</h1>
		<h2 class="FontRalewayRegular ColorWhite">BEST RAMEN IN TOWN</h2>
	</section>
	`,
	styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
