const team = {
  _players: [
    { firstName: "Johnny", lastName: "Gaudrau", age: 26 },
    { firstName: "Michael", lastName: "Backlund", age: 31 },
    { firstName: "Matthew", lastName: "Tkachuk", age: 24 },
  ],
  _games: [
      { opponent: 'Penguins', teamPoints: 2, opponentPoints: 1},
      { opponent: 'Jets', teamPoints: 2, opponentPoints: 4},
      { opponent: 'Blackhawks', teamPoints: 5, opponentPoints: 2},
  ],
  get players() {return this._players},
  get games() {return this._games},
  addPlayer (firstName, lastName, age) {
      const newPlayer = {
          firstName: firstName,
          lastName: lastName,
          age: age,
      };
      this._players.push(newPlayer);
  },
  addGame (oppName, teamPoints, oppPoints) {
      const newGame = {
          opponent: oppName,
          teamPoints: teamPoints,
          opponentPoints: oppPoints
      }
      this._games.push(newGame);
  }
};

console.log(team);



