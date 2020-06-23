import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const StarredList = () => {

   const starred = useSelector(state => state.starred.data);

    return (
        <div className="custom-list-container">
            <ul className="custom-list">
                <li className={`${(starred.length <= 0)}`}>Don't have!</li>
                {starred.map((repo, index)=> {
                    return (
                    <li key={index}>
                        <a href={repo.html_url}><FontAwesomeIcon icon={faCodeBranch} /> {repo.name}</a>
                    </li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default StarredList;