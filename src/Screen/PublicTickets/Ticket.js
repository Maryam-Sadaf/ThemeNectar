import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import '../../Styles/Ticket.css';
import {FaEdit} from 'react-icons/fa';
// import TicketData from './TicketData';
import {useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import RichTextEditor from '../Submitticket/RichTextEditor';
import { AiOutlineCloseCircle} from "react-icons/ai";
import appStore from '../../Store/AppStore';
import { observer } from 'mobx-react-lite';
// import { UpdateTicket } from './UpdateTicket';
import { toJS } from 'mobx';
import axios from 'axios';
const Ticket =observer(() => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState('');
  const [comment, setComment] = useState('');
  const handleSubmit = async () => {
    try {
      // Make a POST request to the API endpoint
      const response = await axios.post('https://wpwebsol.com/wp-json/wpwsst/v1/data', {
        comment: comment, // Replace with the actual comment data you want to send
        // Other data you want to send in the request body
      });

      // Handle the response as needed
      console.log('API Response:', response.data);

      // Clear the comment and uploaded file after successful submission
      setComment('');
      setUploadedFile(null);
    } catch (error) {
      // Handle any errors here
      console.error('Error:', error);
    }
  };

  const getValue = (value) => {
    setValue(value);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFile(acceptedFiles[0]);
      setIsDropdownOpen(true);
    },
    accept: 'image/*',
    multiple: false,
  });

  const toggleEditor = () => {
    setIsEditorOpen(!isEditorOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
console.log(toJS(appStore.selectedTicketInfo))
 
  const handleEditTicket=()=>{
    appStore.setUpdateTicket(true);
  }
  const PublicTicketsOpen = () => {
    navigate("/publicTicket")
  }
  return (
    <div className="popup-container-ticket">
      <div className="popup-content">
        <small className="ticket-type-ribbon">
          <i className="ti ti-user">Public Ticket #{appStore.selectedTicketInfo.id}
          <div className="cross-heading" onClick={PublicTicketsOpen}>
                    <span className="close-icon">
                        <AiOutlineCloseCircle />
                    </span>
            </div>
          </i>

        </small> 
             
        <section id="single-article" className="ticketBlock" data-ticket-id={appStore.selectedTicketInfo.id}>
          <div className="ticket-header">
            <div className="content">
              <div id="ticket-title-subject">{appStore.selectedTicketInfo.ticket_subject}</div>
              <span className="status">Open</span>
            </div>

            <div className="action-bar" >
              <button onClick={toggleEditor} className="postRply">
                Post a Reply
              </button>
              {isEditorOpen && (
                <div className="rich-editor" onSubmit={handleSubmit}>
                  <RichTextEditor initialValue="" getValue={getValue} />
                  <p className="ticket-paragraph">
                    <button id="submit-ticket-comment-button" className="button sm color-2">
                      Post Reply
                    </button>
                    <span id="cancel-post-comment" className="front" onClick={toggleEditor}>
                      Cancel
                    </span>
                    <span id="unsubscribe" className="front">
                      Unsubscribe
                    </span>
                    <div {...getRootProps()} className="dropzone">
                      <input {...getInputProps()} />
                      <button className="ticksyAttachFile-dz">
                        <span>Upload Attachment</span>
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div className="dropdown">
                        <button className="close-button" onClick={closeDropdown}>
                          &#10006;
                        </button>
                        <div className="file-info">
                          {uploadedFile && (
                            <>
                              <p className='file-name'>{uploadedFile.name}</p>
                              <p className='file-name-size'>{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div id="comment-container" className="not-reversed">
            <ul className="comment-list">
              <li id={`commentBlock-${appStore.selectedTicketInfo.id}`} data-comment-id={appStore.selectedTicketInfo.id} className="cf type-comment user">
                <span className="left cf">
                  <img
                    src="https://secure.gravatar.com/avatar/e1be7c574255213ec379d746b9088c19?s=160&amp;d=https%3A%2F%2Fs3.amazonaws.com%2Fticksy_avatars%2Fdefault_avatar.png&amp;r=pg"
                    className="avatar"
                    alt="User Avatar"
                  />
                </span>
                <div id={`commentWrap-${appStore.selectedTicketInfo.id}`} className="right">
                  <div className="comment user cf">
                    <div className="edit-delete" onClick={handleEditTicket}>
                      <span className="edit-comment" data-comment-id={appStore.selectedTicketInfo.id} href="#">
                        <FaEdit />
                      </span> 
                    </div>
                    <div className="comment-block-wrap">
                      <span className="comment-from">
                        <span className="name">maryam</span>
                        <span className="reply-type-comment">started the conversation</span>
                      </span>
                      <div className="comment-meta cf">
                        <a className="post-date" href={`#comment-${appStore.selectedTicketInfo.id}`}>
                          {appStore.selectedTicketInfo.created_at}
                        </a>
                      </div>
                      <div className="comment-content">
                        <p>{appStore.selectedTicketInfo.ticket_description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* {appStore.updateTicket && <UpdateTicket/>} */}
      </div>
    </div>
  );
});

export default Ticket;
