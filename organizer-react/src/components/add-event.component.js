import React, { Component } from "react";
import EventDataService from "../services/event.service";

export default class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeVenueName = this.onChangeVenueName.bind(this);
    this.onChangeVenueAddress = this.onChangeVenueAddress.bind(this);
    this.onChangeDateOfEvent = this.onChangeDateOfEvent.bind(this);
    this.onChangeStartTime = this.onChangeStartTime.bind(this);
    this.onChangeEndTime = this.onChangeEndTime.bind(this);
    this.onChangeAvailability = this.onChangeAvailability.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      venueName: "",
      venueAddress: "",
      dateOfEvent: "",
      startTime: "",
      endTime: "",
      availability: 0,
      price: "",
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  // 
  onChangeVenueName(e) {
    this.setState({
      venueName: e.target.value
    });
  }

  onChangeVenueAddress(e) {
    this.setState({
      venueAddress: e.target.value
    });
  }

  onChangeDateOfEvent(e) {
    this.setState({
      dateOfEvent: e.target.value
    });
  }

  onChangeStartTime(e) {
    this.setState({
      startTime: e.target.value
    });
  }

  onChangeEndTime(e) {
    this.setState({
      endTime: e.target.value
    });
  }

  onChangeAvailability(e) {
    this.setState({
      availability: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }
  // 
  saveEvent() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      venueName: this.state.venueName,
      venueAddress: this.state.venueAddress,
      dateOfEvent: this.state.dateOfEvent,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      availability: this.state.availability,
      price: this.state.price
    };

    EventDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          venueName: response.data.venueName,
          venueAddress: response.data.venueAddress,
          dateOfEvent: response.data.dateOfEvent,
          startTime: response.data.startTime,
          availability: response.data.availability,
          price: response.data.price,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEvent() {
    this.setState({
      id: null,
      title: "",
      description: "",
      venueName: "",
      venueAddress: "",
      dateOfEvent: "",
      startTime: "",
      endTime: "",
      availability: 0,
      price: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newEvent}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Event Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            {/*  */}

            <div className="form-group">
              <label htmlFor="venueName">Venue Name</label>
              <input
                type="text"
                className="form-control"
                id="venueName"
                required
                value={this.state.venueName}
                onChange={this.onChangeVenueName}
                name="venueName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="venueAddress">Venue Address</label>
              <input
                type="text"
                className="form-control"
                id="venueName"
                required
                value={this.state.venueAddress}
                onChange={this.onChangeVenueAddress}
                name="venueAddress"
              />
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="dateOfEvent">Date Of Event</label>
              <input
                type="text"
                className="form-control"
                id="dateOfEvent"
                required
                value={this.state.dateOfEvent}
                onChange={this.onChangeDateOfEvent}
                name="dateOfEvent"
              />
            </div>

            <div className="form-group">
              <label htmlFor="startTime">Start Time</label>
              <input
                type="text"
                className="form-control"
                id="startTime"
                required
                value={this.state.startTime}
                onChange={this.onChangeStartTime}
                name="startTime"
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime">End Time</label>
              <input
                type="text"
                className="form-control"
                id="endTime"
                required
                value={this.state.endTime}
                onChange={this.onChangeEndTime}
                name="endTime"
              />
            </div>

            <hr></hr>

            {/*  */}

            <div className="form-group">
              <label htmlFor="description">About The Event</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <hr />

            <div className="form-group">
              <label htmlFor="availability">availability</label>
              <input
                type="text"
                className="form-control"
                id="availability"
                required
                value={this.state.availability}
                onChange={this.onChangeAvailability}
                name="availability"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>



            <button onClick={this.saveEvent} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
