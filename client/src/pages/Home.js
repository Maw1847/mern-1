import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from '../composants/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <h1 className="text-center">
                Welcome to this students management app.
            </h1>
            
        </div>
    );
};

export default Home;