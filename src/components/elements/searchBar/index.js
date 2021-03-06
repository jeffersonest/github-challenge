import React, { useState } from 'react';
import './styles.scss';
import {SearchProvider} from '../../../providers/users';
import {TextClear} from '../../../helpers/text';
import {Message} from '../../../helpers/messages';
import { toast } from 'react-toastify';
import { search, openList } from '../../../actions/search';
import { useDispatch } from 'react-redux';
import { createBrowserHistory } from "history";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBar = props => {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const history = createBrowserHistory()

    async function handleSearch(event) {
        try {
            event.preventDefault();

            if(history.location.pathname !== '/'){
                history.push('/');
            }

            const users = await SearchProvider(username);
            
            if(users.status === 200) {
                dispatch(search(users));
                dispatch(openList());
                toast.success(Message(1));
            } else if(users.status === 404) {
                toast.error(Message(3));    
            } else if(users.status === 403 || users.status === 401) {
                toast.error(Message(4));    
            } else {
                toast.error('Problem with request!')
            }

        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <>
            <form onSubmit={handleSearch}>
            <FontAwesomeIcon className="searchbar-icon-position" icon={faSearch} /><input name="username" placeholder="Username" onChange={(event) => {setUsername(TextClear(event.target.value))} } value={username}></input>
            </form>
        </>
    );
}

export default SearchBar;