import React from 'react';
import './App.css';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';
import ReactPlayer from 'react-player';
import data from './data/data.js';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import header from './assets/header.png';

let countries = ["AL", "AU", "AT", "BE", "BR", "CM", "CA", "CN", "DK", "EE", "FR", "GA", "DE", "GR", "IS", "ID", "IE", "IT", "JM", "JP", "NL", "NZ", "NG", "NO", "PT", "PR", "ZA", "KR", "ES", "SE", "CH", "TR", "GB", "SD", "SK", "HK", "GH", "PE", "SC", "RU", "KZ", "BY", "IN", "MA", "RO", "CO", "VE", "PL", "FI", "MZ", "TH", "AM", "ML", "PH", "UA", "IL", "CG", "AC"];
class App extends React.Component {
  constructor(props) {
    let randIndex = Math.round(0 + (Math.random() * (data.length)));
    super(props);
    this.state = {
      selectedCountry: '',
      YTurl: data[randIndex].youtube,
      pause: true
    }

  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }
  // getYTurl() {
  //   let country = data.find(c => c.country === this.state.selectedCountry);
  //   this.setState({
  //     YTurl: country[0].youtube
  //   })
  //   return country[0].youtube;
  // }
  onSelectFlag(countryCode) {
    let country = data.filter(c => c.country === countryCode);
    let index = Math.round(0 + (Math.random() * (country.length)));
    this.setState((state, props) => ({
      selectedCountry: countryCode,
      YTurl: country[index].youtube
    })
    );

  }
  Pause() {
    if (this.state.pause === false) {
      this.setState({
        pause: true
      })
    } else if (this.state.pause === true) {
      this.setState({
        pause: false
      })
    }
  }
  Next() {
    if (this.state.selectedCountry === '') {
      let allIndex = Math.round(0 + (Math.random() * (data.length)));
      this.setState((state, props) => ({
        YTurl: data[allIndex].youtube
      })
      );

    } else {
      var countryforNext = data.filter(c => c.country === this.state.selectedCountry)
      var index = Math.round(0 + (Math.random() * (countryforNext.length)));
      this.setState((state, props) => ({
        YTurl: countryforNext[index].youtube
      })
      );
    }
  }
  render() {

    return (
      <center>
        <div style={{ backgroundImage: header }}>
          <div style={{ margin: '2%', backgroundImage: header }}>
            <ReactFlagsSelect
              countries={countries}
              searchable={true}
              searchPlaceholder="Search for a country"
              onSelect={this.onSelectFlag.bind(this)}
            />
          </div>
          <div style={{ margin: '2%' }}>
              <Button content='Pause' icon='pause' labelPosition='left' onClick={this.Pause.bind(this)} />
              <span style={{ margin: '1%' }} />
              <Button content='Next' icon='right arrow' labelPosition='right' onClick={this.Next.bind(this)} />
            </div>
          <div style={{ height: 600, backgroundImage: header }}>
            <ReactPlayer
              url={this.state.YTurl}
              width='100%'
              height='100%'
              playing={this.state.pause}
            />

          </div>
        </div>
      </center>

    );
  };
}


export default App;
