import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import Backdrop from './Backdrop';

import './Modal.css';

const ModalOverlay = (props) => {
  const content = (
    <div className='modal' style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
        <div style={{ fontStyle: 'italic', paddingLeft: '8px' }}>
          {props.subheader}
        </div>
      </header>
      <div>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          <div className='button-div'>
            <a
              href={props.git}
              className='git-button'
              style={{
                fontSize: '15px',
                margin: '5px',
              }}
            >
              GITHUB
            </a>

            {props.website && (
              <a href={props.website}
                className='website-button'
                style={{
                  fontSize: '15px',
                  margin: '5px',
                }}
              >
                WEBSITE
              </a>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;