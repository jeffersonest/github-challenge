import React from 'react';
import './styles.scss';

const Main = ({children}) => {
    return(
        <section className="main">  
            {children}
        </section>
    )
}

export default Main;