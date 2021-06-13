<h2>Problem Statement: </h2>
1. Develop an API that accepts a customer location as an input parameter and returns the correct outlet identifier for the input location.
2. Develop a frontend that allows a user to enter and submit an address and then displays the outlet identifier returned from the API.


<h2>Solution: </h2>

The Project consists of 2 Components 
1. FrontEnd : A nodeJS-Express backend API service to support (1) of problem statement.
2. Backend: An Angular based frontend for (2) of the problem statement.

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

Sample Request: <br>
POST : <br>
    `url: localhost:8080/fetch-outlet`<br>
    `Body:   {"address": "Stumpergasse 51, 1060 Vienna"}`<br>
    `type: application/json`<br>


<h3>Possible Improvements and Future Functionalities:</h3><br>
Since I am not an expert in JS based technologies,this is the first attempt to solve the given problem in 4.5 hours.
This is not production level code has lot of scope for improvement. It needs improvements/additional functionality in the following areas. 

1. Should be able to handle a batch of addresses and return outlets for all of them in an array.
2. Looking up the shapes from DB, instead of a file. And using secrets from environment variables.
3. Adding Test cases.
4. Some deprecated packages have been used and need to be updated/replaced.
5. Code can further be optimized to run faster, by optimizing the algorithm.
6. UI (Angular Frontend) can certainly be improved as it just has the basic functionality and no real CSS.
7.  The backend code can be better structured to follow a proven design pattern and better modular code.  
