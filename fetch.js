import fetch from 'node-fetch'; //Required module in order to fetch
import {promises as fsPromises} from 'fs';


const riotKey='RGAPI-4f672c47-19b5-42e3-81d9-521e81610d6c'  //Generated Riot developer key

fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/HotAsianGirl69?api_key=${riotKey}`)
   .then(response => response.json())
   .then(data => {
        fsPromises.writeFile("./seed/SummonerData.json", JSON.stringify(data))
   })
   .catch(error => console.error(error));


