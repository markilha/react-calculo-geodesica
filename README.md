# React Input por Extenso

Componente React para calculo geodésicos

[![npm](https://img.shields.io/npm/v/react-calculo-geodesica)](https://www.npmjs.com/package/react-calculo-geodesica) ![NPM](https://img.shields.io/npm/l/react-calculo-geodesica)

## Como instalar

Abaixo as formas de como instalar essa biblioteca utilizando o npm ou yarn:

```
npm install react-calculo-geodesica
# ou
yarn add react-calculo-geodesica
```

## Como usar

Uma forma básica de como utilizar o componente

```js
import geo from "react-calculo-geodesica";
```

```js
geo.ConverterUtm(-24.009166667521, -48.336666666667, geo.datum.sirgas);
// 'convert um coordenada geográfica decimal em utm . Retornando um objeto:
// {
//     Hemisfério: "S",
//     Achamento: 0.003352810681238051,
//     Excentricidade: 0.006739496775591553,
//     Fuso: 22,
//     Meridiano: -51,
//     Semi_eixo: 6378137,
//     X_Este: 770937.020773682,
//     Y_Norte: 7342195.1680566855,
// }

geo.calculaDistancia(
  -23.985921638598054,
  -48.36790508155105,
  -24.013992511362666,
  -48.32481807734863
);
//Retona a distância entre dois pontos ex: geo.calculaDistancia(lat,long,lat2,long2);

geo.getRadiano(-23.985921638598054);
//Converte Grau decimal em Radianos

geo.getGraus(-0.41863330671888943);
//Converte Radiano em Grau decimal

geo.getFusoMerediano(-48.36790508155105);
//Retorna o um objeto contendo o Fuso e o Merediano central de um coordenada longitude:
// {
//     Fuso:22,
//     Merediano:-51
// }

const coord = [
  [-49.4658297275725, -23.7057909679787, 0],
  [-49.4659128408675, -23.7057745926662, 0],
  [-49.465879518788, -23.7056305180162, 0],
  [-49.4657969904007, -23.7056420639345, 0],
  [-49.4658297275725, -23.7057909679787, 0],
];

geo.CalculateArea(coord);
//Calcula a área de um array de coordenadas de um poligono
```

## Propriedades

| Propriedade      | Entrada                                 | Tipo  | Descrição                    |
| ---------------- | --------------------------------------- | ----- | ---------------------------- |
| ConverterUtm     | latitude,longitude                      | doble | Retorna um objeto            |
| calculaDistancia | latitude,longitude,latitude2,longitude2 | doble | Retorna distância (double)   |
| getRadiano       | coordenada graus decimal                | doble | Retorna grau radiano(double) |
| getGraus         | coordenada radiano                      | doble | Retorna grau decimal(double) |
| getFusoMerediano | coordenada longitude grau decimal       | doble | Retorna objeto json          |
| CalculateArea    | array de coordenadas                    | doble | Retorna a área (double)      |

## Datum

sirgas: "Sirgas 2000",
WGS84: "WGS 84",
Sad69: "Sad 69",

## Licença

MIT License - Copyright (c) 2022 Markilha
