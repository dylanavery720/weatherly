import React from 'react';


export default class LocationSearch extends React.Component {
  constructor() {
    super();
  }


  updateLocation(e) {
    const { name, value } = e.target;
    console.log(name)
    this.setState({ [name]: value },
   this.props.handleChange(value));
  }



  render() {
    return (
  <section className="search">
    <input
    type="text"
    name="city"
    className="location-input"
    placeholder="City"
    aria-label="City"
    value={this.props.city}
    onChange={(e) => {
      this.updateLocation(e);
    }}/>
 </section>
    );
  }
}
