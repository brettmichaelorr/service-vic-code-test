# Service Victoria React Test
Brett Michael Orr

## 1 - Patterns Used

The test application is using the following main patterns:

* Typescript
* [Prettier](https://prettier.io/)
* [SASS](https://sass-lang.com/) for styling
* Generated typings from API (see note below)
* Using index.ts to make folders their own modules
* Components in their own folders
* [Axios](https://github.com/axios/axios) for Promise-based HTTP requests/responses
* React Context with React Hooks for State Management

Note: OpenWeather does not provide a Swagger with which to generate typings from. Ordinarily I would use [dtsgen](https://www.npmjs.com/package/dtsgenerator) to generate Swagger typings (from external APIs and my own local APIs.)

## 2 - Implementation Notes

A few notes for the implementation of this code test application:

* I implemented a 'Degrees' changer (Celsius / Fahrenheit) to show off React State using Hooks/Context (as I personally see Redux used way too much, and I love context/hooks)
* This means that I ignored the part of the OpenWeather API where I could provide a metric/imperial parameter, but this speeds the application up massively - why send a secondary web request when the user changes their display type, when we can simply use math to solve our issue?
* I created `WeatherList.tsx` as a traditional React component to show I know how to do both FC and Component styles (and also because sometimes FCs aren't always your saving grace)
* The polling mechanism was basically to show off the little CSS loader