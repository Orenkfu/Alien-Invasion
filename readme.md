## Welcome to the official readme for the ALIEN INVASION project!
### This project was created by Oren Carmel as an Avantis job appliance home assignment.
### Run Instructions:
   
Run the project
```npm start```
    
Build the project:
cd to frontend;
```ng serve```
cd to backend: 
```npm build```
## Front End
 
### Front end contained within the alien-invasion-fe (frontend) folder. Traditional Angular folder structure;
       
* src/app/guards for routing guards (functions that will trigger on specified routing events)
* src/app/pages for page specific components
* src/app/layout for general layout wrappers.
* src/app/services; classes acting as state managers, transfering data, handling logic and API requests.
* src/app/app.component; project root.
## Back End
* /bootstrap; all files first loaded on server start. contains integral dependencies such as express, database connection, API configuration etc.
* /controllers: API application logic. contains routes and business methods, mostly fetching & creating data.
* /db: Data access layer. partially redundant when using Mongo but a good habit in my honest opinion. 
* /models: Data models & schemas describing the structure of the application.
* /scripts: Single use scripts for specified use-cases such as clearing & populating tables.
## API
**Routes:**
* /api/aliens: POST -- create an alien
* /api/aliens: GET - get all aliens - returns a hashmap of arrays, with the keys being alien type.
* /api/aliens/:param?param=[param] - Get aliens by a param specified in query (defaults to ID).
Accepts: type, parent, id.

## Known issues:

**Due to time limitations, some elements had to be 'skimmed':**

* Google authentication is limited to until page refresh. User will have to re-authenticate on refresh.
Unfortunately, did not have enough time to implement token validation expiration, refresh, etc.

* Authentication is not currently validated on server side. With firebase being our authentication platform,
we would have to install a Firebase admin API for auth validation.

* Lack of input validation, especially on backend. Given more time, to scale this app further we would need to validate fields before inserting them to the database.
That could be achieved using Joi, another library or implementing custom field validation.
