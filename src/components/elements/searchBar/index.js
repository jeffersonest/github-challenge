import React, { useState } from 'react';
import './styles.scss';
import {SearchProvider} from '../../../providers/users';
import {TextClear} from '../../../helpers/text';
import {Message} from '../../../helpers/messages';
import { toast } from 'react-toastify';
import { search, openList } from '../../../actions/search';
import { useDispatch } from 'react-redux';
import { createBrowserHistory } from "history";


const SearchBar = props => {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const history = createBrowserHistory()

    async function handleSearch(event) {
        try {
            event.preventDefault();
            console.log(props);

            if(history.location.pathname !== '/'){
                history.push('/');
            }

            const users = await SearchProvider(username);
    
            if(users) {
                dispatch(search(users));
                dispatch(openList());
                toast.success(Message(1));
            } else {
                toast.error(Message(2));
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <>
            <form onSubmit={handleSearch}>
                <input name="username" placeholder="Username" onChange={(event) => {setUsername(TextClear(event.target.value))} } value={username}></input>
            </form>
        </>
    );
}

export default SearchBar;