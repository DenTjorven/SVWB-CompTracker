# DATABASE DATA

interface Player {
  countryFlag: string;
  gameLosses: number;
  gameWins: number;
  losses: number;
  name: string;
  totalGames: number;
  tournamentID: string;
  userID: string;
  wins: number;
}

interface TopcutStanding {
  place: number;
  userID: string;
}

interface Tournament {
  _id: string;
  name: string;
  organizationID: string;
  signups: number;
  stageIDs: string[];
  topcutStandings: TopcutStanding[];
}