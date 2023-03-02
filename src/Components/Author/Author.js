import { faMoneyBillTransfer, faMugHot, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Author.css'

const Author = (props) => {
    const { name, img, age, genere, rating, coffeAmount, country } = props.author;
    
    return (       
        <div className='author-detail'> 
            <div className='each-author'>
                 <div>
                    <img src={img} alt="Author"/> <br/> 
                </div>       
              <div>
                 <p><span>Author Name:</span> { name}</p>
                 <p><span>Age:</span> { age}</p>
                 <p><span>Country:</span> { country}</p>
                 <p><span>Coffe Amount:</span>  ${ coffeAmount}</p>
                 <p><span>Genere:</span> { genere}</p>
                 <p><span> Author Rating:</span> {rating}</p>
                    <button onClick={()=>props.selectedAuthors(props.author)}> <FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>  Request for Coffe</button>
                    <p className='autor-icon'><FontAwesomeIcon icon={faMoneyBillTransfer}  />   <FontAwesomeIcon icon={faUserClock} /> </p>
                </div>                 
            </div>                      
        </div>
        
            
     

    );
};

export default Author;