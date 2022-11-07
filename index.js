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

module.exports = {
  calculaDistancia,
};
