import React from 'react';
import './App.css';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';
import ReactPlayer from 'react-player';
import data from './data/data.js';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import header from './assets/header.png';
import { Divider, Grid } from 'semantic-ui-react';
import { Menu, Segment, Container, Header } from 'semantic-ui-react';
import { Image} from 'semantic-ui-react';
import TBlogo from './assets/White Text.png';
import astro from './assets/astro.png';

let countries = ["AL", "AU", "AT", "BE", "BR", "CM", "CA", "CN", "DK", "EE", "FR", "GA", "DE", "GR", "IS", "ID", "IE", "IT", "JM", "JP", "NL", "NZ", "NG", "NO", "PT", "PR", "ZA", "KR", "ES", "SE", "CH", "TR", "GB", "SD", "SK", "HK", "GH", "PE", "SC", "RU", "KZ", "BY", "IN", "MA", "RO", "CO", "PL", "FI", "MZ", "TH", "AM", "ML", "PH", "UA", "IL", "CG", "AC"];
class App extends React.Component {
  constructor(props) {
    let randIndex = Math.round(0 + (Math.random() * (data.length)));
    super(props);
    this.state = {
      selectedCountry: '',
      YTurl: data[randIndex].youtube,
      pause: true,
      YTID: '',
      activeItem: 'home',
      videostar: 0
    }

  }
  componentDidMount() {
    document.body.classList.add("background-black");
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
      YTurl: country[index].youtube,
      YTID: country[index].id
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
        YTurl: data[allIndex].youtube,
        YTID: data[allIndex].id
      })
      );

    } else {
      var countryforNext = data.filter(c => c.country === this.state.selectedCountry)
      var index = Math.round(0 + (Math.random() * (countryforNext.length)));
      this.setState((state, props) => ({
        YTurl: countryforNext[index].youtube,
        YTID: countryforNext[index].id
      })
      );
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    if (this.state.activeItem === 'home') {
      return (

        <div>
          <Container textAlign='center'>
            <Segment inverted >
              <Menu inverted pointing secondary >
              <Header as='h2' color='teal'> G Zone</Header>
                <Menu.Item
                  icon={'home'}
                  position={'right'}
                  name='home'
                  active={this.state.activeItem === 'home'}
                  onClick={this.handleItemClick} />
                <Menu.Item
                  icon={'info'}
                  name='about'
                  active={this.state.activeItem === 'about'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                icon={'mail'}
                  name='contact'
                  active={this.state.activeItem === 'contact'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Segment>
            <Divider />
          </Container>
          <center>
            <div className='bgimg'>

              <div style={{ margin: '2%', marginTop: '2%', display: 'felx' }}>
                {this.state.pause === true
                  ?
                  <Button circular={true} content='Pause' icon='pause' labelPosition='left' onClick={this.Pause.bind(this)} />
                  :
                  <Button  circular={true} content='Play' icon='play' labelPosition='left' onClick={this.Pause.bind(this)} />}
                <span style={{ margin: '1%' }} />
                <Button circular={true} content='Next' icon='right arrow' labelPosition='right' onClick={this.Next.bind(this)} />
                <div style={{ marginTop: 10 }}>
                  <ReactFlagsSelect
                    className='selector'
                    countries={countries}
                    searchPlaceholder="Select Country"
                    onSelect={this.onSelectFlag.bind(this)}
                    selectedSize={22}
                    optionsSize={20}
                  />
                </div>
              </div>
              <div style={{ height: 600, backgroundImage: header }}>
                <ReactPlayer
                  url={this.state.YTurl}
                  width='100%'
                  height='100%'
                  playing={this.state.pause}
                  pip={true}
                  onEnded={this.Next.bind(this)}

                />

              </div>
              <div>
              <Container textAlign='center'>
              <Segment inverted>
                  <h3 style={{color:'white'}}> Powered By</h3>
                  <Image inline={true} src={TBlogo} size='small'/> 
                  </Segment>
                </Container>
               
                
               </div>
            </div>

          </center>
        </div>

      );
    } else {
      return (
        <div>
          <Container textAlign='center'>
            <Segment inverted >
              <Menu inverted pointing secondary >
                <h2>G-Zone</h2>
                <Menu.Item
                  icon={'home'}
                  position={'right'}
                  name='home'
                  active={this.state.activeItem === 'home'}
                  onClick={this.handleItemClick} />
                <Menu.Item
                  icon={'info'}
                  name='about'
                  active={this.state.activeItem === 'about'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                icon={'mail'}
                  name='contact'
                  active={this.state.activeItem === 'contact'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Segment>
            <Divider />
          </Container>
          <Grid>
    <Grid.Row>
      <Grid.Column width={10} style={{marginTop:'7%'}}>
      <center>
      <Image position='center' size='large' src={astro}></Image>
      </center>
      </Grid.Column>
      <Grid.Column width={6}>
        <div style={{float:'left', color:'white', marginTop:'4%'}} >
        <Header as='h2' color='teal'>
          About Us
        </Header>
        </div>
      </Grid.Column>
    </Grid.Row>
    </Grid>
          
               
        </div>
        
      )
    }
  };
}


export default App;
