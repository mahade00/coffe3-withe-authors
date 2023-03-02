import React from 'react';
import './Header.css';
import AuthorImage from './author_img/sapmle.png';

const Header = () => {
    // let image = "./author_img/author_symbol.png";
    return (
        <div className='header'>
            <div className='author'>
                <h1> Meet The Novel Authors </h1><br/>
                <h3>Drink a coffe with your favourite author</h3><br/>
                <h2>Learn how to make $1000000000 <br/><br/> Make your day  </h2>
            </div>            
            <div>
                <img src={AuthorImage} alt='author' />
            </div>
        </div>
    );
};

export default Header;