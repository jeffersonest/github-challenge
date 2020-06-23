import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import ReposModal from '../reposModal';
import StarredModal from '../starredModal';
import UserDetailsModal from '../userDetailsModal';

const UserCard = () => {

    const user = useSelector(state => state.search.data);
    const status = useSelector(state => state.search.status);
    
    return (
    <div className={`card col-md-4 col-lg-3 ${status}`}>
      <div className="card-content">
       <div className="card-thumb-container">
           <img src={user.avatar_url} alt="thumb"></img>
           <UserDetailsModal user={user}/>
       </div>
       <div className="card-divisor">
            <hr />
       </div>
        <div className="card-options">
            <ReposModal repos={user.public_repos} />
            <StarredModal />
        </div>
      </div>
    </div>
    )
}

export default UserCard;