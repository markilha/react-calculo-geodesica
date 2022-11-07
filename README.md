# React Input por Extenso

Componente React que retorna um número por extenso

[![npm](https://img.shields.io/npm/v/react-converte-numero-extenso)](https://www.npmjs.com/package/react-converte-numero-extenso) ![NPM](https://img.shields.io/npm/l/react-converte-numero-extenso)

## Como instalar

Abaixo as formas de como instalar essa biblioteca utilizando o npm ou yarn:

```
npm install react-converte-numero-extenso
# ou
yarn add react-converte-numero-extenso
```

## Como usar

Uma forma básica de como utilizar o componente

```js
const numero = require("numero-por-extenso");
```

```js
numero.porExtenso(128);
// 'cento e vinte e oito'

numero.porExtenso(128, numero.estilo.monetario);
// 'cento e vinte e oito reais'

numero.porExtenso(128, numero.estilo.porcentagem);
// 'cento e vinte e oito por cento'
```

Números decimais:

```js
numero.porExtenso(10.5);
// 'dez vírgula cinco décimos'

numero.porExtenso(10.5, numero.estilo.monetario);
// 'dez reais e cinquenta centavos'

numero.porExtenso(10.5, numero.estilo.porcentagem);
// 'dez vírgula cinco décimos por cento'

numero.porExtenso(10.5, numero.estilo.agrario);
// 'dez metros quadrados e cinquenta decímetros quadrados'
```

Números gigantes:

```js
numero.porExtenso(9_876_543_210);
// 'nove bilhões oitocentos e setenta e seis milhões quinhentos e quarenta e três mil duzentos e dez'

numero.porExtenso(-87_654_321, numero.estilo.monetario);
// 'menos oitenta e sete milhões seiscentos e cinquenta e quatro mil trezentos e vinte e um reais'

numero.porExtenso(123_456.7891, numero.estilo.porcentagem);
// 'cento e vinte e três mil quatrocentos e cinquenta e seis vírgula sete mil oitocentos e noventa e um décimos de milésimo por cento'
```

## Propriedades

Esse componente é uma abstração de um componente input do tipo numérico, todas a propriedades de um input estão disponíveis.

| Propriedade | Estilos        | Tipo   | Descrição                          |
| ----------- | -------------- | ------ | ---------------------------------- |
| tipoExtenso | normal(padrão) | string | Formato de extensão do número      |
| tipoExtenso | monetário      | string | Formato de extensão do monetário   |
| tipoExtenso | porcentagem    | string | Formato de extensão da porcentagem |
| tipoExtenso | agraria        | string | Formato de extensão agrária        |
