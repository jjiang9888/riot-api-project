import express from 'express';

const app= express();
const port= 3000;

const api_url = "https://na.api.riotgames.com/lol/summoner/v4/summoners/by-name/{HotAsianGirl69}";

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
};
