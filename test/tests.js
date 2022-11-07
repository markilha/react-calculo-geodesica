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

test("testantdo converter graus em radianos", () => {
  assert.equal(calc.getRadiano(-23.985921638598054), -0.41863330671888943);
});

test("testantdo converter radianos  em graus", () => {
  assert.equal(calc.getGraus(-0.41863330671888943), -23.985921638598054);
});

test("testantdo retornar fuso e merediano", () => {
  assert.equal(
    JSON.stringify(calc.getFusoMerediano(-48.36790508155105)),
    '"{\\"Fuso\\":22,\\"Merediano\\":-51}"'
  );
});

test("testantdo retornar a area de um poligono", () => {
  assert.equal(
    JSON.stringify(calc.getFusoMerediano(-48.36790508155105)),
    '"{\\"Fuso\\":22,\\"Merediano\\":-51}"'
  );
});

test("testantdo Converter utm sirgas", () => {
  assert.equal(
    JSON.stringify(
      calc.ConverterUtm(-24.009166667521, -48.336666666667, calc.datum.sirgas)
    ),
    '{"Hemisfério":"S","Fuso":22,"Meridiano":-51,"Semi_eixo":6378137,"Excentricidade":0.006739496775591553,"Achamento":0.003352810681238051,"X_Este":770937.020773682,"Y_Norte":7342195.1680566855}'
  );
});

test("testantdo Converter utm wgs 84", () => {
  assert.equal(
    JSON.stringify(
      calc.ConverterUtm(-24.009166667521, -48.336666666667, calc.datum.WGS84)
    ),
    '{"Hemisfério":"S","Fuso":22,"Meridiano":-51,"Semi_eixo":6378137,"Excentricidade":0.006739496775591553,"Achamento":0.0033528106718309896,"X_Este":770937.020773682,"Y_Norte":7342195.1680566855}'
  );
});

//Calcula a área de um array de coordenadas de um poligono
const coord = [
  [-23.7057909679787, -49.4658297275725],
  [-23.7057745926662, -49.4659128408675],
  [-23.7056305180162, -49.465879518788],
  [-23.7056420639345, -49.4657969904007],
  [-23.7057909679787, -49.4658297275725],
];
test("testantdo calculo de área", () => {
  assert.equal(calc.CalculateArea(coord), 142.212890625);
});

//Calcular o azimute
describe('testando testando Azimute', () => {
  const coord = [770937.020773682, 7342195.1680566855]
  const coord2 =  [656399.0835560936, 7377505.776444826]

  test("Nenhum casa", () => {
    assert.equal(
      calc.CalculoAzimute(coord,coord2), "287° 08' 01''");
  });
  test("Uma casa", () => {
    assert.equal(
      calc.CalculoAzimute(coord,coord2,1), "287° 08' 01,9''" );
  });
  test("Duas casas", () => {
    assert.equal(
      calc.CalculoAzimute(coord,coord2,2), "287° 08' 01,94''" );
  });
  test("Três casas", () => {
    assert.equal(
      calc.CalculoAzimute(coord,coord2,3), "287° 08' 01,945''");
  });
  test("Quatro casas", () => {
    assert.equal(
      calc.CalculoAzimute(coord,coord2,4), "287° 08' 01,9452''" );
  });
})




