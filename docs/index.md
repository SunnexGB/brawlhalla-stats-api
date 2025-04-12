## Non official Brawlhalla API library

JS library for interacting with Brawlhalla API, providing easy access to player data and more.
Based on https://stats.brawlhalla.fr/ and https://api.brawlhalla.fr/ for api interoperability.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Features](#features)
- [Usage Examples](#usage-examples)
- [Player Information](#player)
- [Clan Information](#clan)
- [Leaderboards](#leaderboards)
- [dashboard-statistics](#dashboard-statistics)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)

## Installation

Install the package using npm:

`npm i brawlhalla-stats-api`

## Getting Started

To use brawlhalla-stats-api library, first import required functions:

`const brawlhallaAPI = require('brawlhalla-stats-api');` or example
`const { main_info, search_player, data1v1 } = require('brawlhalla-stats-api');`

## Features

- **Player infoormation**: Will help you find main information about player such as: statistics on character, ranked stats (1vs1 and 2vs2) and other necessary data.
- **finding best players on a character**: Looking for the best player on a given character
- **Clan Information**: Search for clans and get clan member details
- **Leaderboards**: Access 1v1 and 2v2 leaderboards with filtering options
- **dashboard Statistics**: Retrieve character win rates, play rates, and weekly variations
- **Automatic Patch Management**: All API calls use current game patch automatically

## Usage Examples

### Player

```javascript
const { main_info, legends_info, duoranked } = require("brawlhalla-stats-api");

main_info("playerId")
  .then((data) => {
    console.log("Player Info:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

legends_info("playerId")
  .then((data) => {
    console.log("Legends Info:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

```javascript
const { search_player } = require("brawlhalla-stats-api");

search_player("nickname", ["all"], ["all"])
  .then((data) => {
    console.log("Search Results:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Clan

```javascript
const { search_clan, clan } = require("brawlhalla-stats-api");

search_clan("clanName")
  .then((data) => {
    console.log("Clan Search Results:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

clan("playerId")
  .then((data) => {
    console.log("Player Clan Info:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Leaderboards

```javascript
const { data1v1, data2v2 } = require("brawlhalla-stats-api");

data1v1(["all"], ["all"], 1)
  .then((data) => {
    console.log("1v1 Leaderboard:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

data2v2(["all"], ["all"], 1)
  .then((data) => {
    console.log("2v2 Leaderboard:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

```javascript
const { topcharacter } = require("brawlhalla-stats-api");

topcharacter("characterName")
  .then((data) => {
    console.log("Best Players for Character:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### dashboard-statistics

```javascript
const { dashboard } = require("brawlhalla-stats-api");

dashboard
  .char_winrate()
  .then((data) => {
    console.log("Character Win Rates:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

dashboard
  .playrate()
  .then((data) => {
    console.log("Character Play Rates:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

dashboard
  .variation_hero()
  .then((data) => {
    console.log("Weekly Win Rate Variations:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## API Reference

For detailed information about all available features, parameters, and return values, see the [API Reference](api_reference.md).

## Error Handling

All functions in the Brawlhalla API library use Promise-based error handling. Always include a `.catch()` block to handle potential errors:

```javascript
main_info("playerId")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
```

**Common errors include:**

- Network connectivity issues
- API rate limiting
- Server-side errors
