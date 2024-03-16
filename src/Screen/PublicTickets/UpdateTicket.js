import React from 'react'
import { useState } from 'react';
import RichTextEditor from '../Submitticket/RichTextEditor';
export const UpdateTicket = () => {
    const [editorValue, setEditorValue] = useState('');
    const getValue = (editorValue) => {
      setEditorValue(editorValue);
      console.log(editorValue);
    };
    return (
        <div className='type-comment user'>
            <span className="left cf">
                <img
                    src="https://secure.gravatar.com/avatar/e1be7c574255213ec379d746b9088c19?s=160&amp;d=https%3A%2F%2Fs3.amazonaws.com%2Fticksy_avatars%2Fdefault_avatar.png&amp;r=pg"
                    className="avatar"
                    alt="User Avatar"
                />
            </span>
            <div>
            <RichTextEditor
              className="texteditor"
              name="ticket_description"
              initialValue=''
              getValue={getValue}
              value={editorValue}
            />
            </div>
            <div>
            <button id="submit-ticket-comment-button" className="button sm color-2">
                      update Reply
                    </button>
                    <button id="cancel-post-comment" className="front">
                      Cancel
                    </button>
            </div>
        </div>
    )
}
