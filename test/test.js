const ReviewBuilder = require("../ReviewBuilder");
const expected = require("./fixtures/result");
const expect = require("chai").expect;

describe("Review Builder", () => {
  it("should create an array of user-facing review objects synchronously", () => {
    // Setup
    let reviewBuilder = new ReviewBuilder();

    // Excercise
    let actual = reviewBuilder.buildReviewsSync();

    // Assert
    expect(actual).to.deep.equal(expected);
  });
});
