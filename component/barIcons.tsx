import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUnderline,
    faRemoveFormat,
    faQuoteRight,
    faQuoteLeft,
    faItalic,
    faBold,
    faBrush,
    faPaste,
    faCopy,
    faHeading,
} from '@fortawesome/free-solid-svg-icons';

export default function BarIcons() {
    return (
        <div className="text-nav">
            <input 
                className="input-title" 
                type='text' 
                placeholder='Title'
            />
            <div className="font-style">
                <FontAwesomeIcon className="font-icon" icon={faRemoveFormat} />
                <FontAwesomeIcon className="font-icon" icon={faHeading} />
                <FontAwesomeIcon className="font-icon" icon={faUnderline} />
                <FontAwesomeIcon className="font-icon" icon={faItalic} />
                <FontAwesomeIcon className="font-icon" icon={faBold} />
                <FontAwesomeIcon  className="font-s" icon={faBrush} />
                <FontAwesomeIcon className="font-s" icon={faQuoteRight} />
                <FontAwesomeIcon className="font-s" icon={faQuoteLeft} />
                <FontAwesomeIcon className="font-s" icon={faCopy} />
                <FontAwesomeIcon className="font-s" icon={faPaste} />
            </div>
        </div>
    );
}