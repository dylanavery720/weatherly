import React from 'react';


export default class StateSearch extends React.Component {
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
    name="state"
    className="state-input"
    placeholder="State"
    aria-label="State"
    value={this.props.state}
    onChange={(e) => {
    this.updateLocation(e);
    }}/>
</section>
    );
  }
}
