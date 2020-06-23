import React, { useEffect } from 'react';
import './styles.scss';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { loadStarredRepos } from '../../../actions/starred';
import { LoadStarredProvider } from '../../../providers/users';
import StarredList from '../starredList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-40%',
      transform             : 'translate(-50%, -50%)',
      background            : '#f6f8fa'
    }
  };

Modal.setAppElement('#root');

const StarredModal = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.search.data);
    const [modalIsOpen,setIsOpen] = React.useState(false);

    useEffect(()=>{
        async function loadStarredRepositories() {
            const starredRepos = await LoadStarredProvider(user.login);

            dispatch(loadStarredRepos(starredRepos));
        }

        if(modalIsOpen){
          loadStarredRepositories();
      }
        

    },[modalIsOpen, dispatch, user]);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <>
          <button className="btn default" onClick={openModal}><FontAwesomeIcon icon={faStar} /> {`Starred`}</button>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="User starred">
              <div className="modal-content">
                <div className="modal-title">
                    <h3>starred repositories</h3>
                    <br />
                    <div className="divisor">
                        <hr />
                    </div>
                </div>
                <div className="modal-body">
                    <StarredList />
                </div>
                <div className="divisor">
                    <hr />
                </div>                
                <div className="modal-footer">
                    <button className="btn danger" onClick={closeModal}>close</button>
                </div>
              </div>
          </Modal>
        </>
      );
}

export default StarredModal;