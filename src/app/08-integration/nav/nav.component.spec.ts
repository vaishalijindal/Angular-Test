import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { compute, NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';



describe('NavComponent', () => {
	let component: NavComponent;
	let fixture: ComponentFixture<NavComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				imports: [RouterTestingModule.withRoutes([])],
				declarations: [NavComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a link to todos page', () => {
		const dElements = fixture.debugElement.queryAll(
			By.directive(RouterLinkWithHref)
		);

		const index = dElements.findIndex(
			de => de.properties['href'] === `/todos`
		);

		expect(index).toBeGreaterThan(-1);
	});
	it('check demo',()=>{
		console.log("abc");
		
	});
	// it('should return 0 if input is negative', () => {
	// 	const result = compute(-1);
	// 	expect(result).toBe(0);
	// });
});
