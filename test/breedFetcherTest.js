const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      console.log("actual.length = ", desc.length);
      console.log("expected.length = ", expectedDesc.length);

      done();
    });
  });

  it('returns the error set to "No such breed", for invalid/non-existent via callback', (done) => {
    fetchBreedDescription('Siberianvgvgvgvg', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err.trim(), "No such breed");
      assert.equal(null, desc);

      done();
    });
  });
});
