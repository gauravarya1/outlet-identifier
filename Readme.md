THe Project consists of 2 Components 
1. FrontEnd
2. Backend

To Run Front End Follow the steps:
1. go to folder  ~/frontend/outlet-identifier/
2. Run ` npm install` to build and download dependencies.
3. Run `ng serve`
4. The service runs on port 4200 of your server. Usually it can be accessed by localhost:4200


To Run Front End Follow the steps:
1. go to folder  ~/Backend/outlet-identifier/
2. Run ` npm install` to build the project and download dependencies.
3. Run `npm start`
4. The service runs on port 8080 of your server. Usually it can be accessed by `localhost:8080/fetch-outlet`

Sample Request: 
POST : 
    url: localhost:8080/fetch-outlet
    Body:   {
            "address": "Stumpergasse 51, 1060 Vienna"
            }
    type: application/json