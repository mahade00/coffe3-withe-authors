import { faMugHot, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const { amountOfAuthors } = props;
    let total = 0;
    let totalSelectedAuthor = 0;
    let selectedAuthorName = [];
    
    for (const author of amountOfAuthors) {     
        if (!selectedAuthorName.includes(author.name)){
            selectedAuthorName = selectedAuthorName + ' ' + author.name + ', ';
        }
        if (!author.numberOfselected) {
           author.numberOfselected=1
        }
        totalSelectedAuthor = totalSelectedAuthor + author.numberOfselected;
        total = total + author.coffeAmount * author.numberOfselected;
    }
  

    return (
        <div className='cart'>
            <h3> <FontAwesomeIcon icon={faUserFriends} />Total Seclcted Author : {totalSelectedAuthor}</h3>           
            <h3> <FontAwesomeIcon icon={faMugHot} /> Total Coffe Amount: ${ total}</h3>
            <p>Author You Select: {selectedAuthorName }</p>
        </div>
       
    );
};

export default Cart;