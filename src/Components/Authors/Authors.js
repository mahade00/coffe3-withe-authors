import React, { useEffect, useState } from 'react';
import './Authors.css'
import Author from '../Author/Author';
import Cart from '../Cart/Cart';

const Authors = () => {
    const [displayAuthor, setDisplayAuthor] = useState([]);
    const [amountOfAuthors, setAmountOfAuthors] = useState([]);     

   
    // fetch data using useEffect
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then((data )=>setDisplayAuthor(data))
    }, []);

 const selectedAuthors = (author) => {        
     const authorsAmount = [...amountOfAuthors, author]; 
        setAmountOfAuthors(authorsAmount);
}     

    return (
        <div className='authors-conatiner'>
            <div className='author-detail'>
            {
                    displayAuthor.map(author => <Author                    
                    key={author.id}
                    author={author}                                        
                    selectedAuthors={selectedAuthors}                    
                ></Author>)
                }                
            </div>

            <div className='author-cart'>                 
                <Cart                    
                    amountOfAuthors={amountOfAuthors}
                    >
                </Cart>                 
            </div>
        </div>        
        ); 
};

export default Authors;