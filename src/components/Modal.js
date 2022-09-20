import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose, isSalesModal }) {
  return ReactDOM.createPortal ((
        <div className="modal--backdrop">
            <div className="modal" style ={{
                borderColor: isSalesModal ? "#ff4500" : "#000"
            }}>
                {children}
                <button 
                    className={isSalesModal ? "sales-btn" : ""} 
                    onClick={handleClose}
                >Close</button>
            </div>
        </div>
  ), document.body)
}
