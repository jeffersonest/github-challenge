import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const ReposList = () => {

   const repos = useSelector(state => state.repos.data);
    
    return (
        <div className="custom-list-container">
            <ul className="custom-list">
                <li className={`${(repos.length <= 0)}`}>Don't have!</li>
                {repos.map((repo, index)=> {
                    return (
                    <li key={index}>
                        <a className="text-dots" href={repo.html_url}><span></span><FontAwesomeIcon icon={faCodeBranch} /> {repo.name}</a>
                    </li> 
                    )
                })}
            </ul>
        </div>
    )
}

export default ReposList;