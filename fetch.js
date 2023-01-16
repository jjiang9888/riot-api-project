import fetch from 'node-fetch'; //Required module in order to fetch
import {promises as fsPromises} from 'fs';


fetch('https://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion.json')
.then(response => response.json())
.then(data => {
  let championsArray = Object.values(data.data).slice(0,10).map(champion => ({
    name: champion.name,
    title: champion.title,
    blurb: champion.blurb
  }))
  //console.log(championsArray);
  fsPromises.writeFile("./seed/ChampionData.json", JSON.stringify(championsArray));
})
.catch(err => console.log(err))