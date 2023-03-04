import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingportalComponent } from './votingportal.component';

describe('VotingportalComponent', () => {
  let component: VotingportalComponent;
  let fixture: ComponentFixture<VotingportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingportalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
