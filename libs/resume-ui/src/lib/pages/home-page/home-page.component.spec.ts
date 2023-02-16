import { Component } from '@angular/core';
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
        '.preferred-name',
        '.preferred-title',
        '.personal-subtext',
        '.social-contacts',
        '.social.email-address',
        '.social.linkedin',
        '.social.github',
      ])('should render %s', (selector) => {
        queryByCss(fixture, selector);
      });
    });

    describe('work experience section', () => {
      const sectionSelector = '.section.work-experience-section';

      it('section should exist', () => {
        queryByCss(fixture, sectionSelector);
      });

      it.each(['.section-header', '.section-items', '.company-name'])(
        'should exist in section: %s',
        (selector) => {
          queryByCss(fixture, `${sectionSelector} ${selector}`);
        }
      );

      describe('section-item', () => {
        it('should render section-item', () => {
          queryByCss(fixture, '.section-item');
        });

        it.each([
          '.company-name',
          '.position',
          '.timeline',
          '.company-description',
          'achievements-container',
        ])('should exist in section %s', (selector) => {
          queryByCss(fixture, `.section-item ${selector}`);
        });
      });
    });
  });
});

export function queryByCss(
  fixture: ComponentFixture<Component>,
  selector: string
) {
  return fixture.debugElement.query(By.css(selector));
}
