The following application is a REST API written in Javascript. 

The backend of the application is made with the use of Node.js and the Express Framework. 
More specifically, the app.js is the main method of the application which communicates with the routes according to the entity they belong to.
The routes include the HTTP requests for the actions of the CRUD interface.
The entities are saved in a MongoDB by the use of Mongoose. 

The only issue regarding the backend is the filter by category post request for the articles' entity which does not work properly. 
The rest functions of the API are working properly and efficiently.

The frontend of the application is made with the React.js and the Material UI library. 
More specifically, the App.js is the main method of the application which communicates with the rest methods according to the entity and the request type they belong to.
The HTTP requests are managed with Axios.

All the functions of the frontend are working properly and efficiently. 
The UI of the application could be better presentable but due to time limitation and the absence of previous knowledge about Material UI Library led to the creation of a simple and most function interface.   

Overall the API works properly and the selection of the building since they function well together without any bugs. 
Yet, this may have some limitations in addition to other more complex/ well presentable components.   


Other features that could be added in the features could be the full management of all the functions of the backend by the frontend and the implementation of a more well-designed UI.
