import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { createBrowserHistory } from "history";

const UserCard = () => {

    const user = useSelector(state => state.search.data);
    const status = useSelector(state => state.search.status);
    const history = createBrowserHistory();

    function handleRepos() {
        history.push(`/${user.login}/repos`);
    }
    
    return (
    <div className={`card col-md-4 col-lg-3 ${status}`}>
      <div className="card-content">
       <div className="card-thumb-container">
           <img src={user.avatar_url} alt="thumb"></img>
           <a href={user.html_url}>
               {user.login}
            </a>
       </div>
       <div className="card-divisor">
            <hr />
       </div>
        <div className="card-options">
            <button className="btn default" onClick={handleRepos}>Repos [{user.public_repos}]</button>
            <button className="btn default">Starred</button>
        </div>
      </div>
    </div>
    )
}

export default UserCard;