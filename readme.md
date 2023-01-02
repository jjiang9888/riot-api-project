# Intro #
As a longtime League of Legends RTS player who has used 3rd party API applications to get information about players while in lobby, I decided to create my own API based on the RIOT API. 

## Initializing ##
* npm init -y 
* gitignore
* npm install mongoose express chalk cors morgan 
* "type":"module" in package.json to allow import and export of variables for modules
* npm i nodmeon --save -dev
* Add in package.json scripts - start, dev, and db:seed to allow for easier npm run dev

## Fetching the API ##
An initial roadblock in accessing the raw data came from the use of the RIOT API itself. Normally, RIOT allows developers to sign up for developer status in order to access the API permanently but at time of writing, RIOT was not accepting applications during the holidays. Luckily, RIOT still allows access thru temporary developer keys on a 24 hour basis. fetch.js currently has a riotkey variable that needs to be manually updated in order to refresh the fetched data. 

## Using the API data ##
Create a model based on the object properties of the player profile data fetched from RIOT API. Establish connection to MongoDB cloud. Create controllers for use in routes. Seed the database with the fetched data. Routes for CRUD interaction on browser.

## CRUD ##

Creating fake player profiles based on model schema
![Updating database with additional fake player]images/API-POST Update.png

Deleting a player profile
![Added and then deleted another fake player]images/API-DELETE.png

## Deployment ## 

Deployed to Railway with connection to Mongodb cloud. 