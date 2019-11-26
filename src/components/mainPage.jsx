import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, mapStyles } from "google-maps-react";
import "./mainPage.css";


class mainPage extends Component {
  state = {
    distance: 15,
    address: '',
    city: '',
    state: '',
    Supermarkets: false,
    Schools: false,
    Churches: false,
    communityCenter: false,
    Libraries: false,
    Cafe: false,
    danceStudio: false,
    Gyms: false,
    pool: false,
    playgrounds: false,
    Parks: false,
    resaltState: false,
    error: false,
    x: 0,
    y: 0,
    hold: null
  };

  props = {
    x: 0,
    y: 0
  }

  hold = {
    place1: {lat: 40,
             lng: 40},
    place2: {lat: 41,
             lng: 40},

  }

  test = () => {
    var API_key = "&key=AIzaSyDjxQG1nLTRjlCFbVB4mq_jMtu40GMR5D4";
    var lol;
    fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=pool&keyword=cruise&key=AIzaSyDjxQG1nLTRjlCFbVB4mq_jMtu40GMR5D4")
      .then(res => res.json())
      .then(
      (result) => {
        lol = result;

        this.setState({
          hold: JSON.stringify(result)
        });
      },
      (error) => {
        this.setState({
          hold: ""
          
        });
      }
    )
  }

  handleSupermarketsCheckboxChange = event =>
    this.setState({ Supermarkets: event.target.checked});
  handleSchoolsCheckboxChange = event =>
    this.setState({ schools: event.target.checked });
  handleChurchesCheckboxChange = event =>
    this.setState({ churches: event.target.checked });
  handleCommunityCheckboxChange = event =>
    this.setState({ Community: event.target.checked });
  handleLibrariesCheckboxChange = event =>
    this.setState({ Libraries: event.target.checked });
  handleCafeCheckboxChange = event =>
    this.setState({ cafe: event.target.checked });
  handleDanceCheckboxChange = event =>
    this.setState({ Dance: event.target.checked });
  handleGymsCheckboxChange = event =>
    this.setState({ Gyms: event.target.checked });
  handleSwimmingCheckboxChange = event =>
    this.setState({ Swimming: event.target.checked });
  handlePlaygroundsCheckboxChange = event =>
    this.setState({ Playgrounds: event.target.checked });
  handleParksCheckboxChange = event =>
    this.setState({ Parks: event.target.checked });

    
    handleChangeAddress = e => {
      this.setState({ address: e.target.value });
    };
    handleChangeState = e => {
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
    handleDistanceChange = e =>{
      this.setState({ distance: e.target.value });
    }


  // function to be implamented 
  /**
   * when button is pressed it will call the function errorCheck.
   * error check will determin if there iis an error or not if there is an error this.state.error will be true. else false
   * then based on the resalts will convert state to a JSON then 
   * send that info to the dack end.
   *      this will be done through an ajax call react uses the fetch function as an ajax comand.
   * once a respons is receved send that JSON object to the plot function. 
   */

  buttonClick = () => {

    var res;

      fetch("http://71.166.53.242/Circles447/build/GoogleMapsPort.py?state")
      .then(result => res)
      .then(


      ),
      error(
        
      )












    this.errorCheck();
    this.setState({resaltState: true});
    

  };

  errorButtonClick = () => {
    this.setState({error: false});
    this.setState({resaltState: false});
  }

  errorCheck = () => {

    if( this.state.address === ""){
      this.setState({error: true})
    }
    else if( this.state.zipcode === ""){
      this.setState({error: true})
    }
    else if( this.state.state === "" || this.state.state === "select one"){
      this.setState({error: true})
    }
    else if( this.state.city === ""){
      this.setState({error: true})
    }
  };

  optionClick = () =>{
    
    if (this.state.resaltState === true){this.setState({resaltState: false});}

    else{this.setState({resaltState: true})};

  };

  resultClick = () =>{
    
    if (this.state.resaltState === true){this.setState({resaltState: true});}

    else{this.setState({resaltState: true})};

  };

  plot = (x) =>{

    
    return null;
  }

  mapPoint = () =>{

    return(

      <Map
        google={this.props.google}
        zoom={4}
        style={this.state.map}
        initialCenter={{ lat: this.state.x, lng: this.state.y }}
      >
        
      </Map>
    );
  }

  Error = () =>{
    var hold1 = this.state.hold;
    return(
      <div className="error">
        ERROR:<br></br>
                Pleae make sure that all text areas are filed <br></br>
          <button onClick = {this.errorButtonClick}>
          Okay
        </button>
        <button onClick = {this.test}>
          test
        </button>
        <br></br>
        data: {hold1}
      </div>
    );
  }

  

  Resalts = () =>{
    return(
      
      <div className="option">
            <div className="menu" onClick={() => this.optionClick({})}>
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>Options</font>
                </text>
              </view>
              <br></br>
            </div>
            <div/>
      <div className="resalt" onClick={() => this.resultClick({})}>
            <div className="menu">
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>Reslats</font>
                </text>
              </view>
              <br></br>
            </div>
          </div>
          </div>
    );
    
  }

  Options = () =>{
    var dis = this.state.distance;
    return(
      <div className="option">
            <div className="menu" onClick={() => this.optionClick({})}>
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>Options</font>
                </text>
              </view>
              <br></br>
            </div>
            enter address or zip
            <br></br>
              address and street:
              <input type="text"
              name="fname"
              value={this.state.address}
              onChange={this.handleChangeAddress}></input>
            <br></br>
            state:
            <select value={this.state.state} onChange={this.handleChangeState}>
              <option selected >
                select one
              </option>
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
            <input type="text"
              name="fname"
              value={this.state.city}
              onChange={this.handleChangeCity}></input>
            <br></br>
            zipcode:
            <input type="text"
              name="fname"
              value={this.state.zipcode}
              onChange={this.handleChangeZip}></input>
            <br></br>
            <div class="slidecontainer">
              distance:
              <input
               type="range" 
               min="1" 
               max="50" 
               value={this.state.distance}
               onChange= {this.handleDistanceChange}
               class="slider" 
               id="myRange"
              ></input>
              <br></br>
              The current distence is {dis} miles
            </div>
            options: <br></br>
            <div>
              <input
                type="checkbox"
                style={this.checkboxStyle}
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Supermarkets
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Schools
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Churches
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Community Buildings
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Libraries
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Cafe
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Dance schools
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Gyms
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Swimming pools
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              Playgrounds
              <br></br>
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleParksCheckboxChange}
              />
              Parks
              <br></br>
            </div>
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
              <div className="resalt" onClick={() => this.resultClick({})}>
            <div className="menu1">
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>Reslats</font>
                </text>
              </view>
              <br></br>
            </div>
          </div>
            </div>
          </div>
    );
  }

  render() {
    return (
      <div>
        <div className="tittle">
          <font style={{ color: "white" }}>NAME OF WEBPAGE</font>
        </div>
        {this.state.error ? <this.Error /> :
        <body className="body">

          <div className="map">
            <this.mapPoint
            />
          </div>
          {this.state.resaltState ? <this.Resalts /> : <this.Options/>}
        </body>
        }
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDjxQG1nLTRjlCFbVB4mq_jMtu40GMR5D4"
})(mainPage); 
//export default Test69M;

class Mapstuff extends Component {

  render(){
    return(
      <Map
      google={this.props.google}
      zoom={4}
      style={mapStyles}
      initialCenter={{ lat: 0, lng: 0 }}
    >
    </Map>
  );
  }

}


