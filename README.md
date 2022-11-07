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
geo.ConverterUtm(-24.009166667521, -48.336666666667)

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


 geo.calculaDistancia(-23.985921638598054, -48.36790508155105,-24.013992511362666,-48.32481807734863 ),

 //Retona a distância entre dois pontos ex: geo.calculaDistancia(lat,long,lat2,long2);


```

## Propriedades

| Propriedade      | Entrada                                 | Tipo  | Descrição                  |
| ---------------- | --------------------------------------- | ----- | -------------------------- |
| ConverterUtm     | latitude,longitude                      | doble | Retorna um objeto          |
| calculaDistancia | latitude,longitude,latitude2,longitude2 | doble | Retorna distância (double) |
