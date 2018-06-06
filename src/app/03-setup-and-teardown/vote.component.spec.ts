import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent;
  });
  it('it should increment totalVotes whwn upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('it should decrement total votes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});