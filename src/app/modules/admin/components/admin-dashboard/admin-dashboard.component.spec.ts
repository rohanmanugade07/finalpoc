import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AdminDashboardComponent } from './admin-dashboard.component';



describe('AdminDashboardComponent', () => {

    beforeEach(async () => {

        await TestBed.configureTestingModule({

            imports: [
                RouterTestingModule
            ],

            declarations: [
                AdminDashboardComponent
            ],

        }).compileComponents();
    });

    it('should create Dashboard Components', () => {

        const fixture = TestBed.createComponent(AdminDashboardComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();

    });
});