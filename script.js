const pubg = require('pubg.js');
const client = new pubg.Client('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5MGI0NzhmMC03Mjg3LTAxMzYtNmFlZC0xM2I1MzBjZThjNjUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTMyNTU3NTMxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1lN2I1NWI4ZC0yMGQ2LTRjMWMtYmNmOC0xMjI5NTFjZjJhNjUifQ.TXwC8UC8LGCt5S6XIcDo1HyF2fVb1w9OCR64YBMJt54',
'pc-na');

// const player = client.getPlayer({name:'Tommy2016'}).then( matches = (value) =>{
//     // console.log(value);
// })

// const seasons = client.getSeasons().then(season = (value) => {
//     // console.log(value);
// })

// const playerseason = client.getPlayerSeason('account.2c0137b95750407e8dd6775a445c21fb','division.bro.official.2018-07').then(season = (value) =>{
//     console.log(value.relationships.matchesSquadFPP);
// })

const tele = client.getMatch('d75407c8-0459-42ee-8c71-6ee48364f617').then(match = (value) =>{
    console.log(value.relationships.assets);
})

// const info = client.getTelemetry('https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-na/2018/07/24/03/59/08bfeb75-8ef6-11e8-8027-0a586462231a-telemetry.json').then (match = (value) =>{
//     console.log(value[0]);
// })
