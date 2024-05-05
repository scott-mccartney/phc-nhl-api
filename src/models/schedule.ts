export type Schedule = {
  nextStartDate: string;
  previousStartDate: string;
  gameWeek: {
    date: string;
    dayAbbrev: string;
    numberOfGames: number;
    games: Game[];
  }[];
  oddsPartners: OddsPartner[];
  preSeasonStartDate: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  playoffEndDate: string;
  numberOfGames: number;
};

interface Venue {
  default: string;
}

interface PlaceName {
  default: string;
  fr?: string;
}

interface Team {
  id: number;
  placeName: PlaceName;
  abbrev: string;
  logo: string;
  darkLogo?: string;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
  radioLink?: string;
  odds?: {
    providerId: number;
    value: string;
  }[];
}

interface PeriodDescriptor {
  number: number;
  periodType: string;
}

interface SeriesStatus {
  round: number;
  seriesAbbrev: string;
  seriesLetter: string;
  neededToWin: number;
  topSeedTeamAbbrev: string;
  topSeedWins: number;
  bottomSeedTeamAbbrev: string;
  bottomSeedWins: number;
  gameNumberOfSeries: number;
}

interface TvBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}

interface Game {
  id: number;
  season: number;
  gameType: number;
  venue: Venue;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts: TvBroadcast[];
  awayTeam: Team;
  homeTeam: Team;
  periodDescriptor: PeriodDescriptor;
  seriesStatus: SeriesStatus;
  seriesUrl: string;
  ticketsLink: string;
  gameCenterLink: string;
}

interface OddsPartner {
  partnerId: number;
  country?: string;
  name: string;
  imageUrl: string;
  siteUrl?: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}
