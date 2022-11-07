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

// test("testantdo Converter utim", () => {
//   assert.equal(calc.ConverterUtm(-24.009166667521, -48.336666666667), `{
//     Hemisfério: "S",
//     Achamento: 0.003352810681238051,
//     Excentricidade: 0.006739496775591553,
//     Fuso: 22,
//     Meridiano: -51,
//     Semi_eixo: 6378137,
//     X_Este: 770937.020773682,
//     Y_Norte: 7342195.1680566855,
//   }`);
// });
