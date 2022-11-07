const calc = require("../index"),
  assert = require("assert");

let test = (description, assertTest) => {
  it(description, (done) => {
    try {
      assertTest();
      done();
    } catch (e) {
      done(e);
    }
  });
};

test("testantdo calculo de distância", () => {
  assert.equal(
    calc.calculaDistancia(
      -23.985921638598054,
      -48.36790508155105,
      -24.013992511362666,
      -48.32481807734863
    ),
    "5375.831344658761"
  );
});
