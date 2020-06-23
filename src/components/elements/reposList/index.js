import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const ReposList = () => {

   const repos = useSelector(state => state.repos.data);
    
    return (
        <div className="custom-list-container">
            <ul className="custom-list">
                {repos.map((repo, index)=> {
                    return (
                    <li key={index}>
                        <a href={repo.html_url}><span></span><FontAwesomeIcon icon={faCodeBranch} /> {repo.name}</a>
                    </li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default ReposList;