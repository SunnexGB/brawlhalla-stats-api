## Request Parameters

Parameter: listTier
Values:

- "Diamond"
- "Platinum 0"
- "Platinum 1"
- "Platinum 2"
- "Platinum 3"
- "Platinum 4"
- "Platinum 5"
- "Bronze 0"
- "Bronze 1"
- "Bronze 2"
- "Bronze 3"
- "Bronze 4"
- "Bronze 5"
- "Gold 0"
- "Gold 1"
- "Gold 2"
- "Gold 3"
- "Gold 4"
- "Gold 5"
- "Silver 0"
- "Silver 1"
- "Silver 2"
- "Silver 3"
- "Silver 4"
- "Silver 5"
- "Tin 0"
- "Tin 1"
- "Tin 2"
- "Tin 3"
- "Tin 4"
- "Tin 5"
- "Unranked"

Parameter: listRegion
Values:

- "AUS"
- "BRZ"
- "EU"
- "JPN"
- "SEA"
- "US-E"
- "US-W"
- "Unranked with no region"

Parameter: order
Description: A string for sorting, e.g., "desc" (descending)

Parameter: page
Description: page number

Parameter: patch
Description: Automatically determined (current patch)

Parameter: sort
Description: For example, "rating" for sorting a rating

# Brawlhalla-stats-api Reference

document for all functions for brawlhalla lib and explanation of the basics

## Navigation

- [player Information](#playerplayer-information)
- [main_info](#main_info)
- [legends_info](#legends_info)
- [duoranked](#duoranked)
- [clanlist](#clanlist)
- [search_player](#search_player)
- [clan Information](#clan-information)
- [search_clan](#search_clan)
- [leaderboards](#leaderboards)
- [data1v1](#data1v1)
- [data2v2](#data2v2)
- [dashboard-statistics](#dashboard-statistics)
- [char_winrate](#char_winrate)
- [playrate](#playrate)
- [variation_hero](#variation_hero)
- [topcharacter](#topcharacter)
- [utility Functions](#utility-functions)
- [getpatch](#getpatch)

## player Information

### main_info

Gets main information about player.

Example usage:

```javascript
const { main_info } = require("brawlhalla-stats-api");

main_info("playerId")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- playerId (string): ID of the player for which information is to be retrieved.

**Return:**

- Promise that resolves to an object containing main player information in json.

---

### legends_info

Gets information about legends of the specified player.

Example usage:

```javascript
const { legends_info } = require("brawlhalla-stats-api");

legends_info("playerId")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- playerId (string): ID of the player for whom you want to get legend information.

**Return:**

- Promise that resolves to an object containing player legend information in json.

---

### duoranked

Gets 2v2 ranking information for a player.

Example usage:

```javascript
const { duoranked } = require("brawlhalla-stats-api");

duoranked("playerId")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- playerId (string): ID of the player for which to get ranking information.

**Return:**

- Promise that resolves to an object containing 2v2 player rank information in json.

---

### search_player

Search players by nickname with additional filters.

Example usage:

```javascript
const { search_player } = require("brawlhalla-stats-api");

search_player("nickname", listTier, listRegion)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- nickname (string): Nickname for search.
- listTier (array): List of tier's to filter.
- listRegion (array): List of regions to filter.

**Return:**

- Promise that resolves to an array player objects matching in json search criteria.

**Additional Conditions:**

- The listTier and listRegion parameters are used to restrict search results to specific tiers and regions.
- Available values for listTier are:
  “Diamond”, “Platinum 0”, “Platinum 1”, “Platinum 2”, “Platinum 3”, “Platinum 4”, “Platinum 5”, “Bronze 0”, “Bronze 1”, “Bronze 2”, “Bronze 3”, “Bronze 4”, “Bronze 5”, “Gold 0”, “Gold 1”, “Gold 2”, "Gold 3", "Gold 4", "Gold 5", "Silver 0", "Silver 1", "Silver 2", "Silver 3", "Silver 4", "Silver 5", "Tin 0", "Tin 1", "Tin 2", "Tin 3", "Tin 4", "Tin 5", "Unranked"
- Available values for listRegion:
  "AUS", "BRZ", "EU", "JPN", "SEA", "US-E", "US-W", "Unranked with no region"

---

## clan information

### clanlist

Gets information about a player's clan (displays a list of clan members and information such as level, name, join date, etc.).

Example usage:

```javascript
const { clan_list } = require("brawlhalla-stats-api");

clan_list("clanid")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- clanid (string): ID of the clan for whom you want to get clan information.

**Return:**

- Promise that resolves to an object containing the player's clan information in json.

---

### search_clan

Search for clans by name.

Example usage:

```javascript
const { search_clan } = require("brawlhalla-stats-api");

search_clan("clanName")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- clanName (string): search clan for name.

**Return:**

- Promise that resolves to an array clan objects matching the json search criteria.

---

## leaderboards

### data1v1

Retrieves 1v1 leaderboard data with filters.

Example usage:

```javascript
const { data1v1 } = require("brawlhalla-stats-api");

data1v1(listTier, listRegion, page)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- listTier (array): List of tiers to filter.
- listRegion (array): List of regions to filter.
- page (number): Page number.

**Additional Conditions:**

- order: Sorting direction (e.g., "desc" for descending).
- patch: Automatically determined current patch.
- sort: Field for sorting (e.g., "rating").

**Returns:**

- A promise that resolves to an object containing 1v1 leaderboard data in json.

---

### data2v2

Retrieves 2v2 leaderboard data with filters.

Example usage:

```javascript
const { data2v2 } = require("brawlhalla-stats-api");

data2v2(listTier, listRegion, page)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- listTier (array): List of tiers to filter.
- listRegion (array): List of regions to filter.
- page (number): Page number.

**Additional Conditions:**

- order: Sorting direction (e.g., "desc" for descending).
- patch: Automatically determined current patch.
- sort: Field for sorting (e.g., "rating").

**Returns:**

- A promise that resolves to an object containing 2v2 leaderboard data in json.

---

### topcharacter

Retrieves information about the best players for a specific character.

Example usage:

```javascript
const { topcharacter } = require("brawlhalla-stats-api");

topcharacter("characterName")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- characterName (string): The name character to get best players.

**Returns:**

- Promise that resolves to an object containing information about the best players for the specified character.

---

## dashboard-statistics

### char_winrate

Retrieves character win rates for current patch.

Example usage:

```javascript
const { dashboard } = require("brawlhalla-stats-api");

dashboard
  .char_winrate()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- None

**Returns:**

- Promise that resolves to an object containing character win rate data in json.

---

### playrate

Retrieves character play rates for current patch.

Example usage:

```javascript
const { dashboard } = require("brawlhalla-stats-api");

dashboard
  .playrate()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- None

**Returns:**

- Promise that resolves to an object containing character play rate data in json.

---

### variation_hero

Retrieves weekly variation in character win rates.

Example usage:

```javascript
const { dashboard } = require("brawlhalla-stats-api");

dashboard
  .variation_hero()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Parameters:**

- None

**Returns:**

- Promise that resolves to an object containing weekly character win rate variation data json.

---

## utility functions

### getpatch

Retrieves current patch ID.

Example usage:

```javascript
const getpatch = require("./filters/Patchs.js");

getpatch()
  .then((patchId) => console.log("Current Patch ID:", patchId))
  .catch((error) => console.error(error));
```

**Parameters:**

- None

**Returns:**

- Promise that resolves to a string containing the current patch ID.

Note: This function is used internally by most API functions to ensure they use the current patch data.

---

## File: docs/index.md

# Brawlhalla lib documentation

This documentation provides an overview brawlhalla-stats-api library. library makes it easy to interact with Brawlhalla API without having to get an `api_key` by providing functions to retrieve patch, player, clan, leaderboard and game statistics.

## Introduction

The brawlhalla-stats-api library is designed to simplify the retrieval and display of data from the Brawlhalla API. The functions are organized into module files and combined at the main entry point (`index.js`). This makes them easy to import and use in your projects.

## Installation

Install library using npm:

`npm install brawlhalla-stats-api`

## Available Functions

- main_info(playerId): Retrieves main information about a player.
- legends_info(playerId): Retrieves legends information of a player.
- duoranked(playerId): Retrieves ranked 2v2 information.
- clan(clanid): Retrieves the clan details of a player(clan list players).
- search_player(nickname, listTier, listRegion): Searches for players with optional filters.
- search_clan(clanName): Searches for clans by name.
- data1v1(listTier, listRegion, page): Retrieves 1v1 leaderboard data with filters.
- data2v2(listTier, listRegion, page): Retrieves 2v2 leaderboard data with filters.
- dashboard.char_winrate(): Retrieves character win rates.
- dashboard.playrate(): Retrieves character play rates.
- dashboard.variation_hero(): Retrieves weekly character win rate variations.
- topcharacter(characterName): Retrieves best players for a specific character.
- getpatch(): Utility function used to automatically determine the current patch.

## Filtering Conditions

For functions utilizing filters (such as search_player, data1v1, data2v2), the following parameters are applicable:

- listTier: An array of tiers. Valid values include:
  "Diamond", "Platinum 0", "Platinum 1", "Platinum 2", "Platinum 3", "Platinum 4", "Platinum 5", "Bronze 0", "Bronze 1", "Bronze 2", "Bronze 3", "Bronze 4", "Bronze 5", "Gold 0", "Gold 1", "Gold 2", "Gold 3", "Gold 4", "Gold 5", "Silver 0", "Silver 1", "Silver 2", "Silver 3", "Silver 4", "Silver 5", "Tin 0", "Tin 1", "Tin 2", "Tin 3", "Tin 4", "Tin 5", "Unranked"

- listRegion: An array of regions. Valid values include:
  "AUS", "BRZ", "EU", "JPN", "SEA", "US-E", "US-W", "Unranked with no region"

- order: Sorting order, for example "desc" for descending order.
- page: Indicates the page number for paginated results (defaults to 1 if not specified).
- patch: Automatically determined current patch.
- sort: Field used for sorting, such as "rating".

## Conclusion

brawlhalla-stats-api library simplifies process of integrating Brawlhalla data into your applications by abstracting API calls into easy-to-use functions.
