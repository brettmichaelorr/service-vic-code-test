# Service Victoria React Test
Brett Michael Orr

## 1 - Patterns Used

The test application is using the following main patterns:

* Typescript
* Prettier
* SASS (both global and css-module style)
* Generated typings from API (see note below)
* Using index.ts to make folders their own modules


Note: OpenWeather does not provide a Swagger with which to generate typings from. Ordinarily I would use [dtsgen](https://www.npmjs.com/package/dtsgenerator) to generate Swagger typings (from external APIs and my own local APIs.)