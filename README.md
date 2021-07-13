# Spill-The-Tea : A Video Call Web Application 
This is a web application that would enable two users to connect on a video call and "spill the tea" (as the name suggests).

This application was developed during my mentorship in the Microsoft Engage Program'21.

# Technologies Used:
 - Browser: Microsoft Edge
 - HTML
 - CSS (Sass)
 - Programmimg Languages: Javascript
 - Framework: Node.js & Express
 - Libraries: 
   - Front-end: font-awesome, react-router-dom, node-sass, axios, moment, socket.io-client, simple-peer, shortid, reactjs (useEffect, useReducer, useHistory, useParams etc)
   - Back-end: express, cors, dotenv, socket.io, body-parser, redis
 - Databases: Redis (to store the video call information)
 - Deployment: Heroku
 
 # Functionalities Implemented
 - Audio Settings (mute/unmute)
 - Video Settings (turning on/off the camera)
 - Screen Sharing
 - Text Messages during the video call
 
 # How to Use the Application
 The first page that would appear on the screen would be the home-page of the website, that would enable the user to start a video call.
 
 On clicking the **New Meeting** button, the user would enter the video call webpage. Since the user would be the one to "create" this call, he would be presented with a **Meeting Information Pop-Up**, from where he can copy the link to the call and send it to the other user to join the call.
 
 When the other user gets connected, both the users will be able to see each other on their screens.
 
 Both the users can use the features provided to them:
 - To change their Audio Setting, click the **Microphone** button at the bottom.
 - To change their Video Setting, click the **Camera** button at the bottom.
 - To share their screen/tab/window, click the **Present Now** button at the bottom-right corner.
 - To send messages, click the **Chat** button at the top-right corner.
 - To end the video call, click the **Phone** button at the bottom, that would redirect them to the home-page of the website.
 
 # Challenges and Future Work
 Further work on the web application includes group call functionality(more than two people can join the call), a video stream that would enable the user to see themselves on their screen along with the other users, resolving echo issues of the audio stream etc.
 
