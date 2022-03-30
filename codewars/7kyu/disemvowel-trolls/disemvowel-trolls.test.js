const disemvowel = require('./disemvowel-trolls');

describe('Example tests', () => {
  test(`'This website is for losers LOL!' => 'Ths wbst s fr lsrs LL!'`, () => {
    expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
  });
  test(`'No offense but,\nYour writing is among the worst I've ever read' => 'N ffns bt,\nYr wrtng s mng th wrst 'v vr rd'`, () => {
    expect(disemvowel(`No offense but,\nYour writing is among the worst I've ever read`)).toBe(`N ffns bt,\nYr wrtng s mng th wrst 'v vr rd`);
  });
});
