## Installation

Install the package using npm:

```javascript
npm i brawlhalla-stats-api
```

## Data source

This library interacts with brawlhalla statistics api located at https://api.brawlhalla.fr/. api is not officially documented on the main website https://stats.brawlhalla.fr/, and data is accessed by parsing api endpoints directly.

## Parsing method

Data is retrieved by navigating api directory structure, specifically from angular web application located at https://api.brawlhalla.fr/angularwebapp2/. This parsing method allows a not entirely but interaction with api, providing access to the most up-to-date statistics.

Important note about third-party code by [Théo Beaudenon](https://theo-beaudenon.fr/)
This library uses parsing locales. While api endpoints are publicly available, please be aware that use of this data is subject to the terms and conditions of the original source.

## License

This project is licensed under an MIT license. Please see the `MIT License` file for details.

## Contributions

Contributions are welcome! If you have suggestions for improvement or find any problems, please open an issue or submit a correction request.

## Documentation

- [API Reference](https://github.com/SunnexGB/brawlhalla-stats-api/blob/main/docs/api_reference.md)

- [Quick Start](https://github.com/SunnexGB/brawlhalla-stats-api/blob/main/docs/index.md)
