describe("count", function() {
  it("creates a counting of numbers", function() {
    var testCount = new count(1,2);
    expect(testCount.firstcount).to.eql[1,2];
  });
});
describe("count", function() {
    var testCount = new count(3);
  it("calculates a multiple of 3", function() {
    expect(testCount.threecount).to.equal(true);
  });
});describe("count", function() {
    var testCount = new count (5);
  it("calculates a multiple of 5", function() {
    expect(testCount.fivecount).to.equal(true);
  });
});
describe("count", function() {
    var testCount = new count(15);
  it("calculates a multiple of 15", function() {
    expect(testCount.fifteencount).to.equal(true);
  });
});
