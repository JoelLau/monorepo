import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './home-page.component';

describe(HomePageComponent.name, () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should render', () => {
    describe('header', () => {
      it.each([
        '.header',
        '.personal-subtext',
        '.social-contacts',
        '.social.email-address',
        '.social.phone-number',
        '.social.linkedin',
        '.social.github',
      ])('should render %s', (selector) => {
        expect(fixture.debugElement.query(By.css(selector))).toBeTruthy();
      });
    });
  });
});
