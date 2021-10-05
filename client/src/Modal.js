import React from "react";
import reactDom from "react-dom";

const Modal =(props)=>{
    return   reactDom.createPortal(
            <div onClick={props.onDismis} className="ui dimmer modals visible active">
                <div onClick={ (e)=> e.stopPropagation() } className="ui standrad modal visible active">
                    <div className="header">{props.title}</div>
                    <div className="content">{props.content}</div>
                    <div className="actions">
                        {props.actions}
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
};

export default Modal;