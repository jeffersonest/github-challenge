import React from 'react';
import './styles.scss';
import UsersList from '../../elements/usersList';

const HomePage = () => {
    return (
        <section className="container-fluid">
            <UsersList />
        </section>
    )
}

export default HomePage;