import React from 'react';
import './styles.scss';
import UserCard from '../userCard';

const UsersList = () => {
  return (
    // Can be a userlist
      <section className="row">
          <UserCard />
      </section>
  )
}

export default UsersList;