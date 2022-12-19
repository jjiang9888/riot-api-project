import fetch from 'node-fetch'; //Required module in order to fetch
import {promises as fsPromises} from 'fs';


const riotKey='RGAPI-58f7a1dd-e56a-4824-a233-6f1ef59e1acb'  //Generated Riot developer key

fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/HotAsianGirl69?api_key=${riotKey}`)
   .then(response => response.json())
   .then(data => {
        fsPromises.writeFile("./seed/SummonerData.json", JSON.stringify(data))
   })
   .catch(error => console.error(error));


