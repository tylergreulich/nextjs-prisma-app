import { formatMoney } from './../formatMoney';

describe('formatMoney Function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(40)).toEqual('$0.40');
  });

  it('Leaves cents off for whole dollars', () => {
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(20000000)).toEqual('$200,000');
  });

  it('Works with whole and fractional dollars', () => {
    expect(formatMoney(5012)).toEqual('$50.12');
    expect(formatMoney(110)).toEqual('$1.10');
    expect(formatMoney(93847589347634867839467)).toEqual(
      '$938,475,893,476,349,000,000.00'
    );
  });
});
