import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import CelebrityList from '../components/celebrity-item'
import {getCountries, getCelebs, getCurrencyRates} from '../actions/index';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBirthplace: '',
      selectedCurrency: '',
      selectedOrder: 'rank',
      searchText: ''
    }
  }
  
  componentDidMount() {
    this.props.dispatch(getCountries());
    this.props.dispatch(getCurrencyRates());
    this.props.dispatch(getCelebs());
  }
  
  renderCountryList(item) {
    return (
      <option key={item} value={item}>{item}</option>
    )
  }
  
  handleChange(e) {
    const newValue = e.target.value;
    const key = e.target.id;
    this.setState({...this.state, [key]: newValue});
  }
  
  render() {
    return (
      <Row>
        <Col xs={12} sm={6} smOffset={3}>
          <div className="title text-center">
            <h1>Vodafone Technical Test</h1>
            <h2>Celebrity Rich List</h2>
          </div>
          <form>
            <Row>
              <Col xs={12} sm={6}>
                <FormGroup controlId="selectedBirthplace">
                  <ControlLabel>Birthplace:</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="all"
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value="">Show all</option>
                    {this.props.countryList.map(this.renderCountryList)}
                  </FormControl>
                </FormGroup>
              </Col>
              <Col xs={12} sm={6}>
                <FormGroup controlId="selectedCurrency">
                  <ControlLabel>Currency Converter:</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="usd"
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value="usd">US Dollar</option>
                    <option value="euro">Euro</option>
                    <option value="aud">AU Dollar</option>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <FormGroup controlId="searchText">
                  <ControlLabel>Search:</ControlLabel>
                  <FormControl type="text" placeholder="Search" onChange={this.handleChange.bind(this)}/>
                </FormGroup>
              </Col>
              <Col xs={12} sm={6}>
                <FormGroup controlId="selectedOrder">
                  <ControlLabel>Order by:</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="rank"
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value="rank">Rank</option>
                    <option value="age">Age</option>
                    <option value="name">Name</option>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
          </form>
          <CelebrityList
            celebrities={this.props.celebrityList}
            countryFilter={this.state.selectedBirthplace}
            textFilter={this.state.searchText}
            sortBy={this.state.selectedOrder}
            currency={this.state.selectedCurrency}
            currencyRate={this.props.currencyRates[this.state.selectedCurrency]}
          />
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    countryList: state.data.countryList,
    celebrityList: state.data.celebrityList,
    currencyRates: state.data.currencyRates
  }
}

export default connect(mapStateToProps, null)(Home);