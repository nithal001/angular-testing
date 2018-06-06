import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component:VoterComponent;
  let fixture:ComponentFixture<VoterComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // xit('should render total votes', () => {
  //   component.othersVote = 20;
  //   component.myVote = 1;
  //   fixture.detectChanges();

  //   let de = fixture.debugElement.query(By.css('.vote-cout'));
  //   let el: HTMLElement = de.nativeElement;
  //   expect(el.innerText).toEqual(21);
  // });

  it('should highlighted the upvote button if I have upvoted', async(() => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy();
  }));

  it('should increase the total votes when i click th upvote', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
