import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import maximizeIcon from '../assets/icons/max.svg';
import minimizeIcon from '../assets/icons/min.svg';

const Editor = ({ displayName, language, value, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'} `}>
            <div className="editor-title">
                {displayName}
                <button className="expand-collapse-btn" onClick={ () => setOpen(prevOpen => !prevOpen) } ><img width="20" height="15" src={open ? minimizeIcon : maximizeIcon} /></button>
            </div>
            <ControlledEditor 
                onBeforeChange={ handleChange }
                value={ value }
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor
