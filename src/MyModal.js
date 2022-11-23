import React from 'react';
import ReactDOM  from 'react-dom'
 
const MODAL_STYLES = {
   position: 'fixed',
   top: '50%',
   left: '50%',
   backgroundColor:'#FFF',
   transform: 'translate(-50%,-50%)',
   border: '1px solid green',
   borderRadius:'8px',
   boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
   padding: '10px',
   zIndex: 1000,
}
const OVERLAY_STYLES = {
   position:'fixed',
   top: 0,
   left:0,
   right: 0,
   bottom: 0,
   backgroundColor: '#000',
   opacity:'60%',
   zIndex:1000,
   
}
const MyModal = ({ children, open , onClose }) => {
  if(!open ) return null;
  return ReactDOM.createPortal(
    <>
    <div onClick={onClose} style={ OVERLAY_STYLES } />
    <div style = { MODAL_STYLES }>
       { children}
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default MyModal