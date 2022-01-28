<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
# LuxRide
### React Native Ride Sharing App Boilerplate

## About The App

LuxRide is a React Native ride sharing application (think Uber, Grab, etc) designed to showcase the Google Places, Directions and Distance Matrix APIs in conjunction with React Redux.

Assuming that user authentication has already occured, the main application wrapper accepts the user object and passes it down via props to the child screens. After user auth, the basic boilerplate focuses around three screens:

### Find Ride

The main or home screen, Find Ride accepts the initial user object, welcoming the user by name and asking for their location. The user is able to enter a custom location which references the Google Places API to get origin data. The user may also select "Use Current Location" which uses Geolocation API to access native location services in order to get location data and cross-reference it with the Google Places API. Location data is stored using Redux using the setOrigin dispatch. Upon pressing "Let's Go", the user is automatically navigated to the "Route" screen.

<div style="display:flex;flex-direction:row;align-items:center;width:100%;margin:5px">
<img src="https://github.com/brad-nst/luxride/blob/main/portfolio/luxRide1.jpg?raw=true" style="width:50%;margin:5px" alt="LuxRide Screen">
<img src="https://github.com/brad-nst/luxride/blob/main/portfolio/luxRide3.jpg?raw=true" style="width:50%;margin:5px" alt="LuxRide Screen">
</div>

### Route

Upon navigating to the routes screen, if the user has not set their origin, they will be directed back to the Find Ride screen. If the user origin location is set, the map will render the user location with a marker and ask them where they are going. Using a similar input to the Find Ride screen, the user can enter their destination, or they can select from a list of favorites. For the boilerplate, favorites are hard coded into the Favorites component as a javascript object, however the intention is for the data object to be dynamically accessed/modified via graphql API client like Apollo. Once users enter their destination, the Google Directions API determines the route and the map renders the destination and route marker, automatically scaling to fit the route. The user can then select to start over or select a ride using the appropriate button, the former navigating to the "Select Ride" sub-screen using a separate navigation stack.


| <img src="https://github.com/brad-nst/luxride/blob/main/portfolio/luxRide4.jpg?raw=true" style="width:50%;margin:5px" alt="LuxRide Find Ride Screen"> | <img src="https://github.com/brad-nst/luxride/blob/main/portfolio/luxRide2.jpg?raw=true" style="width:50%;margin:5px" alt="LuxRideScreen"> |

### Select A Ride

The select a ride screen is where users choose their ride type. They are presented with 3 options, with the data for the boilerplate hard coded as an object into the component. Similar to the favorites component, this data is intended to be managed via headless CMS or cloud database, accessed by a graphql client. Upon screen render, the Google Distance Matrix API calculates the distance from the origin to the destination as well as the travel time for the ride. Based on the ride and locale, a project specific algorithm calculates the cost for each ride type. The user can then select to either modify their trip or start their trip. This is the final actionable screen in the boilerplate.


<img src="https://github.com/brad-nst/luxride/blob/main/portfolio/luxRide5.jpg?raw=true" style="height:250px;margin:5px" alt="LuxRideScreen">


## Future Integrations 

For production applications, once users start a trip, their trip data would be synced to the platforms cloud database and served directly to drivers using the required 'Driver' client app. The users trip would be served to all drivers within a specific radius to the user and once a driver accepts a trip, their location data would be used to calculate estimated pickup times and send relevant notifications to the user such as "Your Lux Driver Has Arrived".   

### Your Trip

Once a driver has accepted the user trip, the user app would navigate back to the Route screen which would then render the drivers distance from the user and estimated time of arrival. Once the user is picked up and the driver starts the trip, this screen would then render estimated time of arrival at the destination as well as the route on the map.

### Billing

For production applications, users payment information could be stored using a 3rd party payment API like Square or Stripe, providing an abstract layer of security for their sensitive information, while handling all transaction requirements. Once trips are completed, their payments would be automatically processed and the invoice emailed to them and updated to the ride history database.

### Account, Ride History & Settings

In the account screen, the user will be able to set relevant data, edit favorites and update billing information.  In the history screen, users are able to view previous trip data including receipts. In settings, users can customize the app interface to whatever level the client app provider chooses. This could be as simple as switching themes or updating notifications.


## Future Functionality

Future upgrades to the boilerplate may include the ability for users to select their location by dropping a pin on the map as well as adding stops along the route. 



