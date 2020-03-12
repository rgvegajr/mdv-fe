import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Signin = () => {
    return (
    <Layout>
        <ToastContainer />
        <h1>Signin</h1>

    </Layout>
    )
};

export default Signin;