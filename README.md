# PHC NHL API

This package is based on the documentation from [https://gitlab.com/dword4/nhlapi](https://gitlab.com/dword4/nhlapi). This project can be used to call the NHL API and get typed responses. Currently this project only supports Javascript. 

## Installation

Run `npm i phc-nhl-api`.

## Usage

```ts
import { getBoxscore, Boxscore } from 'phc-nhl-api';

const myMethod = async () => {
  const boxscore = await getBoxscore('2023020001');
}
```

## Support

This project is currently in progress and is not on v1.0.0. Feel free to contribute on [Github](https://github.com/scott-mccartney/phc-nhl-api), or reach out to [@ScottMccTech](https://x.com/scottmcctech).
