import React, { useEffect } from 'react';
import './styles.scss';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import {LoadReposProvider} from '../../../providers/users';
import { loadRepos } from '../../../actions/repos';
import ReposList from '../reposList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

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

const ReposModal = ({repos}) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.search.data);
    const [modalIsOpen,setIsOpen] = React.useState(false);

    useEffect(()=>{
        async function loadRepositories() {
            const repos = await LoadReposProvider(user.login);
                dispatch(loadRepos(repos));
        }
        if(modalIsOpen){
            loadRepositories();
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
          <button className="btn default" onClick={openModal}><FontAwesomeIcon icon={faCodeBranch} />  {`Repos [${repos}]`}</button>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="User repos">
              <div className="modal-content">
                <div className="modal-title">
                    <h3>public repositories</h3>
                    <br />
                    <div className="divisor">
                        <hr />
                    </div>
                </div>
                <div className="modal-body">
                    <ReposList />
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

export default ReposModal;