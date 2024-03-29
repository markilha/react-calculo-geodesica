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

describe("testando distância: ", () => {
  const coord = [770937.020773682, 7342195.1680566855];
  const coord2 = [656399.0835560936, 7377505.776444826];  

  test("Coordenada UTM", () => {   
    assert.equal(
      calc.calculaDistancia(coord,coord2,calc.tipoCoordenada.UTM),
      "119857.3240432176"
    );
  });

  test("Coordenada DECIMAL", () => {  
    assert.equal(
      calc.calculaDistancia(coord,coord2,calc.tipoCoordenada.grauDecimal),
      "6939164.9817129"
    );
  });

})

test('Calculo de distância entre dois pontos utm', () => {
  const coord = [770937.020773682, 7342195.1680566855];
  const coord2 = [656399.0835560936, 7377505.776444826];  
  const expectedDistance = 119857.3240432176;
  assert.equal(calc.calculateDistance(coord, coord2), expectedDistance);
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
      calc.converterUtm(-24.009166667521, -48.336666666667, calc.datum.sirgas)
    ),
    '{"Hemisfério":"S","Fuso":22,"Meridiano":-51,"Semi_eixo":6378137,"Excentricidade":0.006739496775591553,"Achamento":0.003352810681238051,"X_Este":770937.020773682,"Y_Norte":7342195.1680566855}'
  );
});

test("testantdo Converter utm wgs 84", () => {
  assert.equal(
    JSON.stringify(
      calc.converterUtm(-24.009166667521, -48.336666666667, calc.datum.WGS84)
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
  assert.equal(calc.calculateArea(coord), 142.212890625);
});

//Calcular o azimute
describe("testando testando Azimute", () => {
  const coord = [770937.020773682, 7342195.1680566855];
  const coord2 = [656399.0835560936, 7377505.776444826];

  test("Nenhum casa", () => {
    assert.equal(calc.calculoAzimute(coord, coord2), "287° 08' 01''");
  });
  test("Uma casa", () => {
    assert.equal(
      calc.calculoAzimute(coord, coord2, calc.numCasas.uma),
      "287° 08' 01,9''"
    );
  });
  test("Duas casas", () => {
    assert.equal(
      calc.calculoAzimute(coord, coord2, calc.numCasas.duas),
      "287° 08' 01,94''"
    );
  });
  test("Três casas", () => {
    assert.equal(
      calc.calculoAzimute(coord, coord2, calc.numCasas.tres),
      "287° 08' 01,945''"
    );
  });
  test("Quatro casas", () => {
    assert.equal(
      calc.calculoAzimute(coord, coord2, calc.numCasas.quadro),
      "287° 08' 01,9452''"
    );
  });
});

test("Testando ponto médio: ", () => {
  const coord = [770937.020773682, 7342195.1680566855];
  const coord2 = [656399.0835560936, 7377505.776444826];
  assert.equal(
    calc.pontoMedio(coord, coord2).toString(),
    [7359850.472250756, 7359850.472250756]
  );
});

test("Converter GMS em Graus Decimal", () => {
  assert.equal(calc.convertGMS_Dec(), 287.13387222222224);
});

test('Retorna a deflexão entre dois angulos', () => {
  assert.equal(calc.calculateDeflection(45, 90), 45);
  assert.equal(calc.calculateDeflection(90, 45), -45);
  assert.equal(calc.calculateDeflection(180, 0), -180);
});

test('Converte Utm em Decimal', () => {
  assert.equal(JSON.stringify(calc.ConvertUtmDecimal(656549.4211550002,7377529.288316002,22)), '"\\"{lat: -23.70554756706348,lng: -49.46444110715485}\\""');
});



