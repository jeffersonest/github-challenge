import React from 'react';
import './styles.scss';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faHeart, faInfoCircle, faLink } from '@fortawesome/free-solid-svg-icons'

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

const UserDetailsModal = ({user}) => {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <>
          <button className="btn clean" onClick={openModal}>{user.login} <FontAwesomeIcon icon={faInfoCircle} /></button>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="User starred">
                <div className="modal-content user-details">
                    <div className="modal-image">
                        <img src={user.avatar_url} alt="thumb"></img>
                    </div>
                    <div className="modal-title user-details">
                        <h3>{user.name}</h3>
                        <h5><a href={user.html_url}><FontAwesomeIcon icon={faLink} /> {user.login}</a></h5>
                        <br />
                        <div className="divisor">
                            <hr />
                        </div>
                    </div>
                    <div className="modal-body">
                        <p><FontAwesomeIcon icon={faCodeBranch} /> Public Repos: {user.public_repos} </p>
                        <p><FontAwesomeIcon icon={faHeart} /> Followers: {user.followers} / Following: {user.following}</p>
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

export default UserDetailsModal;