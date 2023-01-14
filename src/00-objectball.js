// task 1 - gameObject() function
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
// console.table(gameObject());

// task 2 - homeTeamName() function
function homeTeamName() {
  let anObject = gameObject();
  return anObject.home.teamName;
}
// console.log(homeTeamName());

// task 3 - numPointsScored() function
function numPointsScored(playerName) {
  let anObject = gameObject();
  let homeName = Object.keys(anObject.home.players);
  let awayName = Object.keys(anObject.away.players);
  let playerNameArray = [...homeName, ...awayName];

  for (const name of playerNameArray) {
    if (name === playerName) {
      // console.log(anObject.home.players[playerName])
      if (anObject.home.players[playerName] === undefined)
        return anObject.away.players[playerName].points;
      else return anObject.home.players[playerName].points;
    }
  }
}
// let result;
// result = numPointsScored("Alan Anderson");
// result = numPointsScored("Jeff Adrien");
// result = numPointsScored("Brendan Haywood");
// console.log(result);

// task 4 - shoeSize() function
function shoeSize(playerName) {
  let anObject = gameObject();
  let homeName = Object.keys(anObject.home.players);
  let awayName = Object.keys(anObject.away.players);
  let playerNameArray = [...homeName, ...awayName];

  for (const name of playerNameArray) {
    if (name === playerName) {
      // console.log(anObject.home.players[playerName])
      if (anObject.home.players[playerName] === undefined)
        return anObject.away.players[playerName].shoe;
      else return anObject.home.players[playerName].shoe;
    }
  }
}
// let result;
// result = shoeSize("Alan Anderson");
// result = shoeSize("Jeff Adrien");
// result = shoeSize("Brendan Haywood");
// console.log(result);

// task 5 - teamColors() function
function teamColors(teamName) {
  let anObject = gameObject();
  let allTeamName = [anObject.home.teamName, anObject.away.teamName];
  //   console.log(allTeamName);
  if (allTeamName[0] === teamName) return anObject.home.colors;
  else if (allTeamName[1] === teamName) return anObject.away.colors;
}
// let result;
// result = teamColors("Brooklyn Nets");
// result = teamColors("Charlotte Hornets");
// console.log(result);

// task 6 - teamNames() function
function teamNames() {
  let anObject = gameObject();
  let allTeamName = [anObject.home.teamName, anObject.away.teamName];
  return allTeamName;
}
// let result;
// result = teamNames();
// console.log(result);

// task 7 - playerNumbers() function
function playerNumbers(teamName) {
  let anObject = gameObject();
  let allTeamName = [anObject.home.teamName, anObject.away.teamName];
  if (allTeamName[0] === teamName) {
    let jerseyNumbers = [];
    for (let player of Object.values(anObject.home.players))
      jerseyNumbers.push(player.number);
    return jerseyNumbers;
  } else if (allTeamName[1] === teamName) {
    let jerseyNumbers = [];
    for (let player of Object.values(anObject.away.players))
      jerseyNumbers.push(player.number);
    return jerseyNumbers;
  }
}
// let result;
// result = playerNumbers("Brooklyn Nets");
// result = playerNumbers("Charlotte Hornets");
// console.log(result);

// task 8 - playerStats() function
function playerStats(playerName) {
  let anObject = gameObject();
  let allPlayerNames = [
    Object.keys(anObject.home.players),
    Object.keys(anObject.away.players),
  ];
  //   console.log(allPlayerNames);
  if (allPlayerNames[0].includes(playerName)) {
    let singlePlayerStats = anObject.home.players[playerName];
    return singlePlayerStats;
  }
  if (allPlayerNames[1].includes(playerName)) {
    let singlePlayerStats = anObject.away.players[playerName];
    return singlePlayerStats;
  }
}
// let result;
// result = playerStats("Alan Anderson");
// result = playerStats("Brook Lopez");
// result = playerStats("Jeff Adrien");
// result = playerStats("Brendan Haywood");
// console.log(result);

// task 9 - bigShoeRebounds() function
function bigShoeRebounds() {
  let allPlayers = {
    ...gameObject().home.players,
    ...gameObject().away.players,
  };

  let playerNames = Object.keys(allPlayers);

  let playerShoes = [];
  for (let player of playerNames) playerShoes.push(allPlayers[player].shoe);
  // console.log(playerShoes);

  let largestShoeIndex = playerShoes.indexOf(Math.max(...playerShoes));
  let largestShoePlayer = playerNames[largestShoeIndex];
  // console.log(largestShoePlayer);

  let largestShoePlayerRebound = allPlayers[largestShoePlayer].rebounds;
  return largestShoePlayerRebound;
}
// let result = bigShoeRebounds();
// console.log(result);
