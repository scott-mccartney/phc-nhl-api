export type Schedule = {
    nextStartDate: string;
    previousStartDate: string;
    gameWeek: {
        date: string;
        dayAbbrev: string;
        numberOfGames: number;
        games: {
            id: number;
            season: number;
            gameType: number;
            venue: string;
            neutralSite: boolean;
            startTimeUTC: string;
            easternUTCOffset: string;
            venueUTCOffset: string;
            venueTimezone: string;
            gameState: string;
            gameScheduleState: string;
            tvBroadcasts: {
                id: number;
                market: string;
                countryCode: string;
                network: string;
            }[];
            awayTeam: {
                id: number;
                city: string;
                abbrev: string;
                logo: string;
                awaySplitSquad: boolean;
                score: number;
            };
            homeTeam: {
                id: number;
                city: string;
                abbrev: string;
                logo: string;
                homeSplitSquad: boolean;
                score: number;
            };
            gameOutcome: {
                lastPeriodType: string;
            };
            winningGoalie: {
                playerId: number;
                firstInitial: string;
                lastName: string;
            };
            winningGoalScorer: {
                playerId: number;
                firstInitial: string;
                lastName: string;
            };
            specialEvent: string;
            gameCenterLink: string;
        }[];
    }[];
    oddsPartners: {
        partnerId: number;
        country: string;
        name: string;
        imageUrl: string;
        siteUrl?: string;
        bgColor: string;
        textColor: string;
        accentColor: string;
    }[];
    preSeasonStartDate: string;
    regularSeasonStartDate: string;
    regularSeasonEndDate: string;
    playoffEndDate: string;
    numberOfGames: number;
};
