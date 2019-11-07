import React, { Component } from "react";
//import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./App.css";
import Map from "./map";

class App extends Component {
  state = {
    street: "",
    city: "",
    zipcode: "",
    state: "",
    lat: "",
    lng: "",
    resaltState: false,
    data: [],
    lol: [],
    apiKey: "AIzaSyDjxQG1nLTRjlCFbVB4mq_jMtu40GMR5D4"
  };

  // function to be implamented
  /**
   * when button is pressed it will call the function error catch
   * then based on the resalts will convert state to a JSON then
   * send that info to the dack end.
   * once a respons ie receved send that JSON object to
   * the plot function.
   */

  buttonClick = () => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDjxQG1nLTRjlCFbVB4mq_jMtu40GMR5D4"
    )
      .then(response => response.json())
      .then(data => this.setState({ data }));

    //this.render.message2 = "You selected " + this.state.data.results;

    //var obj = JSON.parse(this.state.data);

    //this.setState({ lol: JSON.parse(this.state.data) });

    //alert("A name was submitted: " + obj);
  };

  handleChange = e => {
    this.setState({ state: e.target.value });
  };
  handleChangeStreet = e => {
    this.setState({ street: e.target.value });
  };
  handleChangeCity = e => {
    this.setState({ city: e.target.value });
  };
  handleChangeZip = e => {
    this.setState({ zipcode: e.target.value });
  };

  render() {
    var message = "You selected " + this.state.state;
    var message1 = "You selected " + this.state.street;
    var message2 = "You selected " + this.state.data;
    return (
      <div>
        <div className="tittle">
          <font style={{ color: "white" }}>demo</font>
        </div>
        <body className="body">
          <Map
            id="myMap"
            options={{
              center: { lat: 41.0082, lng: 28.9784 },
              zoom: 4
            }}
            onMapLoad={map => {
              var marker = new window.google.maps.Marker({
                position: { lat: 41.0082, lng: 28.9784 },
                map: map,
                title: "Hello Istanbul!"
              });
              var marker = new window.google.maps.Marker({
                position: { lat: 47, lng: 28.9784 },
                map: map,
                title: "Hello Istanbul!"
              });
            }}
          />
          <div className="resalt">
            <div className="menu">
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>Reslats</font>
                </text>
              </view>
              <br></br>
            </div>
          </div>
          <div className="option">
            <div className="menu" onClick={() => this.optionClick({})}>
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>MENU</font>
                </text>
              </view>
              <br></br>
            </div>
            enter address or zip
            <form>
              address and street:
              <input
                type="text"
                name="fname"
                value={this.state.street}
                onChange={this.handleChangeStreet}
              ></input>
              <br></br>
            </form>
            state:
            <select value={this.state.state} onChange={this.handleChange}>
              <option selected>select one</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            city:
            <input
              type="text"
              name="fname"
              value={this.state.city}
              onChange={this.handleChangeCity}
            ></input>
            <br></br>
            zipcode:
            <input
              type="text"
              name="fname"
              value={this.state.zipcode}
              onChange={this.handleChangeZip}
            ></input>
            <br></br>
            <div>
              <button
                type="button"
                onClick={() => this.buttonClick({})}
                style={{
                  backgroundColor: "MediumSeaGreen"
                }}
              >
                search
              </button>
              <p>{message}</p>
              <p>{message1}</p>
              <p>{message2}</p>
            </div>
          </div>
        </body>
      </div>
    );
  }

  /*render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: { lat: 41.0082, lng: 28.9784 },
            map: map,
            title: "Hello Istanbul!"
          });
        }}
      />
    );
  }*/
}

export default App;
