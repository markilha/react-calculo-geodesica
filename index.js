//Calcula distância
function calculaDistancia(lat1, lon1, lat2, lon2) {
  var deg2rad = 0.017453292519943295; // === Math.PI / 180
  var cos = Math.cos;
  lat1 *= deg2rad;
  lon1 *= deg2rad;
  lat2 *= deg2rad;
  lon2 *= deg2rad;
  var diam = 12742; // Diameter of the earth in km (2 * 6371)
  var dLat = lat2 - lat1;
  var dLon = lon2 - lon1;
  var a = (1 - cos(dLat) + (1 - cos(dLon)) * cos(lat1) * cos(lat2)) / 2;

  return diam * Math.asin(Math.sqrt(a)) * 1000;
}

///Convert coordenada
function getRadiano(deg) {
  var rad = (deg * Math.PI) / 180;
  return rad;
}

//convert radianos em graus
function getGraus(rad) {
  var grau = (rad * 180) / Math.PI;
  return grau;
}

//Converter coordenadas Grau decimal em UTM

function ConverterUtm(
  lat = -24.009166667521,
  lng = -48.336666666667,
  Datum = "Sirgas 2000"
) {
  //48 20 12 , 24 00 33 => -48,336666666667,-24,009166667521 => 770937.0205586,7342195.1505635

  let a = 6378137.0;
  let b = 6356752.31414;
  let f = 1 / 298.257222101;

  let Fuso = parseInt(lng / 6 + 31);
  let MC = 6 * Fuso - 183;
  let Hemisfero = "S";
  let I2 = (Math.pow(a, 2) - Math.pow(b, 2)) / Math.pow(b, 2); // Excentriciade
  let J2 = 6399593.62575849;

  switch (Datum) {
    case "Sirgas 2000":
      a = 6378137.0;
      b = 6356752.31414;
      f = 1 / 298.257222101;

      break;
    default:
      a = 6378137.0;
      b = 6356752.31414;
      f = 1 / 298.257222101;
      break;
  }

  switch (Math.sign(lat)) {
    case 1:
      Hemisfero = "N";
      break;
    case -1:
      Hemisfero = "S";
      break;
    default:
      break;
  }

  let K2 = getRadiano(lat);
  let L2 = getRadiano(lng);
  let O2 = L2 - (MC * Math.PI) / 180;
  let P2 = Math.cos(K2) * Math.sin(O2);
  let Q2 = (1 / 2) * Math.log((1 + P2) / (1 - P2));
  let R2 = Math.atan(Math.tan(K2) / Math.cos(O2)) - K2;
  let S2 = (J2 / Math.pow(1 + I2 * Math.pow(Math.cos(K2), 2), 1 / 2)) * 0.9996;
  let T2 = (I2 / 2) * Math.pow(Q2, 2) * Math.pow(Math.cos(K2), 2);
  let U2 = Math.sin(2 * K2);
  let V2 = U2 * Math.pow(Math.cos(K2), 2);
  let W2 = K2 + U2 / 2;
  let X2 = (3 * W2 + V2) / 4;
  let Y2 = (5 * X2 + V2 * Math.pow(Math.cos(K2), 2)) / 3;
  let Z2 = (3 / 4) * I2;
  let AA2 = (5 / 3) * Math.pow(Z2, 2);
  let AB2 = (35 / 27) * Math.pow(Z2, 3);
  let AC2 = 0.9996 * J2 * (K2 - Z2 * W2 + AA2 * X2 - AB2 * Y2);
  let ESTE = Q2 * S2 * (1 + T2 / 3) + 500000.0;
  let NORTE =
    Hemisfero === "S"
      ? R2 * S2 * (1 + T2) + AC2 + 10000000
      : R2 * S2 * (1 + T2) + AC2;

  let result = {
    Hemisfério: Hemisfero,
    Fuso: Fuso,
    Meridiano: MC,
    Semi_eixo: a,
    Excentricidade: I2,
    Achamento: (a - b) / a,
    X_Este: ESTE,
    Y_Norte: NORTE,
  };

  return result;
}

//Retorna o um objeto contendo o Fuso e o Merediano central de um coordenada longitude
function getFusoMerediano(lng) {
  let Fuso = parseInt(lng / 6 + 31);
  let MC = 6 * Fuso - 183;
  return JSON.stringify({ Fuso: Fuso, Merediano: MC });
}

function polygonArea(CoordX, CoordY, n) {
  let X = 0.0;
  let Y = 0.0;
  let area = 0.0;

  for (let i = 0; i < n; i++) {
    let CX = CoordX[i];
    let CY = CoordY[i];
    let CX2 = CoordX[i + 1];
    let CY2 = CoordY[i + 1];

    X += CX * CY2;
    Y += CY * CX2;
  }
  area = Math.abs(X - Y);
  area = area / 2;
  return area;
}

//Calcula a área de um array de coordenadas de um poligono
function CalculateArea(coordinates) {
  if (coordinates) {
    let X = [];
    let Y = [];
    coordinates.map((coord) => {
      let xy = ConverterUtm(coord[0], coord[1]);
      X.push(xy.X_Este);
      Y.push(xy.Y_Norte);
    });

    return polygonArea(X, Y, X.length - 1);
  }
}

module.exports = {
  calculaDistancia,
  ConverterUtm,
  getRadiano,
  getGraus,
  getFusoMerediano,
  CalculateArea,
};
