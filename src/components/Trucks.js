import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Trucks = () => {
    const [values, setValues] = useState({
        name: "", 
        address: "",
        zipcode: "",
        hours: {
            mon: "",
            tue: "",
            wed: "",
            thu: "",
            fri: "",
            sat: "",
            sun: ""
            },
        phone_number: "",
        email_address: "",
        website_url: "",
        image_url: "",
        currentLocation: "",
        owner: "", 
        buttonText: 'Submit'
    });
    
    const {name, address, zipcode, hours, 
            phone_number, email_address, website_url, image_url, currentLocation, owner,  
            buttonText } = values;
    
    const handleChange = name => event => {
        //event.target.value
        
    };
    
    const clickSubmit = event => {
        //event.target.value
        
    };
    
    const truckForm = () => (
      <div className="container">
        <div class="row">
        <h1 style="text-align: center">Truck Information Page</h1>
        <div style="width: 30%; margin: 25px auto;">
             <form action="/trucks" method="POST">
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Truck name"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="address" placeholder="Address"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="zipcode" placeholder="Zipcode"></input>
                </div>
                <div className="form-group">
                    <label for="hours">Hours</label>
                    <input className="form-control" type="text" name="hours.Mon" placeholder="Monday"></input>
                    <input className="form-control" type="text" name="hours.Tue" placeholder="Tuesday"></input>
                    <input className="form-control" type="text" name="hours.Wed" placeholder="Wednesday"></input>
                    <input className="form-control" type="text" name="hours.Thu" placeholder="Thursday"></input>
                    <input className="form-control" type="text" name="hours.Fri" placeholder="Friday"></input>
                    <input className="form-control" type="text" name="hours.Sat" placeholder="Saturday"></input>
                    <input className="form-control" type="text" name="hours.Sun" placeholder="Sunday"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="phone_number" placeholder="Phone number"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="email_address" placeholder="Email address"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="website_url" placeholder="Website"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="image_url" placeholder="truck image URL"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="currentLocation" placeholder="currentLocation"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="owner" placeholder="owner"></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block" onClick={clickSubmit}>{buttonText}</button>
                </div>
            </form>
            <Link to="/trucks">Go back</Link>
        </div>
    </div>
    </div>
    )
  return (
    <Layout>
        <ToastContainer />
        {truckForm}
    </Layout>
    )
};

export default Trucks;