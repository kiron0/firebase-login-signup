import React from 'react';
import './Home.css'
import {RiUserHeartLine, RiArrowDropRightFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome To Home Page <RiUserHeartLine></RiUserHeartLine></h1>
            <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga illum molestias nihil velit perferendis! At ad libero nihil tempore explicabo architecto in obcaecati. Fuga, sequi nihil id ex libero rerum?" - <strong>Vince Lobardi</strong></p>
            <Link
              to='/about'
              className='explore-btn'
            >
              Explore Page <RiArrowDropRightFill className='arrow'></RiArrowDropRightFill>
            </Link>
        </div>
    );
};

export default Home;