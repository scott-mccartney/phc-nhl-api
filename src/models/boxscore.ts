import { DisplayValue } from "./shared";

export type Boxscore = {
  id: number;
  season: number;
  gameType: number;
  limitedScoring: boolean;
  gameDate: string;
  venue: DisplayValue;
  venueLocation: DisplayValue;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: {
    id: number;
    market: string;
    countryCode: string;
    network: string;
    sequenceNumber: number;
  }[];
  gameState: string;
  gameScheduleState: string;
  periodDescriptor: {
    number: number;
    periodType: string;
  };
  regPeriods: number;
  awayTeam: {
    id: number;
    name: DisplayValue;
    abbrev: string;
    score: number;
    sog: number;
    logo: string;
    placeName: {
      default: string;
    };
  };
  homeTeam: {
    id: number;
    name: DisplayValue;
    abbrev: string;
    score: number;
    sog: number;
    logo: string;
    placeName: {
      default: string;
    };
  };
  clock: {
    timeRemaining: string;
    secondsRemaining: number;
    running: boolean;
    inIntermission: boolean;
  };
  playerByGameStats: {
    awayTeam: {
      forwards: {
        playerId: number;
        sweaterNumber: number;
        name: DisplayValue;
        position: string;
        goals: number;
        assists: number;
        points: number;
        plusMinus: number;
        pim: number;
        hits: number;
        powerPlayGoals: number;
        shots: number;
        faceoffWinningPctg: number;
        toi: string;
      }[];
      defense: {
        playerId: number;
        sweaterNumber: number;
        name: DisplayValue;
        position: string;
        goals: number;
        assists: number;
        points: number;
        plusMinus: number;
        pim: number;
        hits: number;
        powerPlayGoals: number;
        shots: number;
        faceoffWinningPctg: number;
        toi: string;
      }[];
      goalies: {
        playerId: number;
        sweaterNumber: number;
        name: DisplayValue;
        position: string;
        evenStrengthShotsAgainst: string;
        powerPlayShotsAgainst: string;
        shorthandedShotsAgainst: string;
        saveShotsAgainst: string;
        evenStrengthGoalsAgainst: number;
        powerPlayGoalsAgainst: number;
        shorthandedGoalsAgainst: number;
        pim: number;
        goalsAgainst: number;
        toi: string;
        starter: boolean;
        decision?: string;
        savePctg?: string;
      }[];
    };
    homeTeam: {
      forwards: {
        playerId: number;
        sweaterNumber: number;
        name: DisplayValue;
        position: string;
        goals: number;
        assists: number;
        points: number;
        plusMinus: number;
        pim: number;
        hits: number;
        powerPlayGoals: number;
        shots: number;
        faceoffWinningPctg: number;
        toi: string;
      }[];
      defense: {
        playerId: number;
        sweaterNumber: number;
        name: DisplayValue;
        position: string;
        goals: number;
        assists: number;
        points: number;
        plusMinus: number;
        pim: number;
        hits: number;
        powerPlayGoals: number;
        shots: number;
        faceoffWinningPctg: number;
        toi: string;
      }[];
      goalies: {
        playerId: number;
        sweaterNumber: number;
        name: DisplayValue;
        position: string;
        evenStrengthShotsAgainst: string;
        powerPlayShotsAgainst: string;
        shorthandedShotsAgainst: string;
        saveShotsAgainst: string;
        evenStrengthGoalsAgainst: number;
        powerPlayGoalsAgainst: number;
        shorthandedGoalsAgainst: number;
        pim: number;
        goalsAgainst: number;
        toi: string;
        starter: boolean;
        decision?: string;
        savePctg?: string;
      }[];
    };
  };
  summary: {
    linescore: {
      byPeriod: {
        periodDescriptor: {
          number: number;
          periodType: string;
        };
        away: number;
        home: number;
      }[];
      totals: {
        away: number;
        home: number;
      };
    };
    shotsByPeriod: {
      periodDescriptor: {
        number: number;
        periodType: string;
      };
      away: number;
      home: number;
    }[];
    teamGameStats: {
      category: string;
      awayValue: number | string;
      homeValue: number | string;
    }[];
    seasonSeries: {
      id: number;
      season: number;
      gameType: number;
      gameDate: string;
      startTimeUTC: string;
      easternUTCOffset: string;
      venueUTCOffset: string;
      gameState: string;
      gameScheduleState: string;
      awayTeam: {
        id: number;
        abbrev: string;
        logo: string;
        score: number;
      };
      homeTeam: {
        id: number;
        abbrev: string;
        logo: string;
        score: number;
      };
      summary: {
        linescore: {
          byPeriod: {
            periodDescriptor: {
              number: number;
              periodType: string;
            };
            away: number;
            home: number;
          }[];
          totals: {
            away: number;
            home: number;
          };
        };
      };
    }[];
  };
};
