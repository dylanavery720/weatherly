import React from 'react';


export default class Search extends React.Component {
  constructor() {
    super();
  }


  updateLocation(e) {
    const { name, value } = e.target;
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
    id={this.props.id}
    placeholder={this.props.placeholder}
    aria-label={this.props.placeholder}
    value={this.props.location}
    onChange={(e) => {
      this.updateLocation(e);
    }}/>
 </section>
    );
  }
}
