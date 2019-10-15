import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class mainPage extends Component {
  state = {
    titlestyle: {
      backgroundColor: "MediumSeaGreen",
      position: "absolute",
      height: "5%",
      width: "100%",
      textAlign: "center",
      textAlignVertical: "bottom"
    },
    bodystyle: {
      position: "absolute",
      display: "flex",
      top: "5%",
      width: "100%",
      height: "95%"
    },
    mapstyle: {
      backgroundColor: "red",
      width: "67%",
      height: "100%"
    },
    optionsstyle: {
      position: "absolute",
      zindex: 1,
      width: "33%",
      height: "75%",
      left: "67%",
      backgroundColor: "white"
    },
    menustyle: {
      backgroundColor: "MediumSeaGreen",
      position: "right",
      height: "25px",
      textAlign: "center"
    },
    resaltsstyle: {
      position: "absolute",
      zindex: 1,
      width: "33%",
      height: "75%",
      left: "67%",
      backgroundColor: "white"
    },
    map: {
      height: "100%",
      width: "67%"
    }
  };

  handleSupermarketsCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleSchoolsCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleChurchesCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleCommunityCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleLibrariesCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleCafeCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleDanceCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleGymsCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleSwimmingCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handlePlaygroundsCheckboxChange = event =>
    this.setState({ checked: event.target.checked });
  handleParksCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  clicked_baby = () => {
    this.setState({
      optionsstyle: {
        position: "absolute",
        zindex: 1,
        width: "33%",
        height: "75%",
        left: "67%",
        backgroundColor: "white",
        display: "none"
      },
      resaltsstyle: {
        position: "absolute",
        zindex: 2,
        width: "33%",
        height: "75%",
        left: "67%",
        backgroundColor: "white",
        display: "inline"
      }
    });
  };

  render() {
    return (
      <div>
        <div style={this.state.titlestyle}>
          <font style={{ color: "white" }}>NAME OF WEBPAGE</font>
        </div>
        <div style={this.state.bodystyle}>
          <div style={this.state.mapstyle}>
            <Map
              google={this.props.google}
              zoom={8}
              style={this.state.map}
              initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
          </div>
          <div style={this.state.resaltsstyle}>
            <div style={this.state.menustyle}>
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>Reslats</font>
                </text>
              </view>
              <br></br>
            </div>
          </div>
          <div style={this.state.optionsstyle}>
            <div style={this.state.menustyle}>
              <view style={{ flex: 1 }}>
                <text style={{ textAlign: "right" }}>
                  <font style={{ color: "white" }}>MENU</font>
                </text>
              </view>
              <br></br>
            </div>
            enter address or zip
            <form action="/action_page.php">
              address and streat:
              <input type="text" name="fname"></input>
              <br></br>
            </form>
            state:
            <select>
              <option selected value="grapefruit">
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
            <input type="text" name="fname"></input>
            <br></br>
            zipcode:
            <input type="text" name="fname"></input>
            <br></br>
            <div>
              distance:
              <input
                type="range"
                min="1"
                max="25"
                style={{ height: "25px", verticalAlign: "middle" }}
              ></input>
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
                onClick={() => this.clicked_baby({})}
                style={{
                  backgroundColor: "MediumSeaGreen"
                }}
              >
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB7pQd3kQPwZXm8n-vRT1YJ37x5ZGkLt0Y"
})(mainPage);
//export default Test69M;
