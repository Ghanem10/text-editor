import React, { useRef, useState } from 'react';
import BarIcon from './barIcons';
import SideBar from './bar';
import './editor.scss';

export default function TextEditorComponent() {
    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string[]>([]);

    const divref = useRef<HTMLDivElement | null>(null);

    function addInfoToList() {
        const arr = ['React.ts', 'JavaScript', 'TypeScript'];

        if (count > 2 || count < 0) return;
        setCount(pre => pre + 1);
        setValue(pre => [...pre, arr[count]]);
    }

    return (
        <div className="container" ref={divref}>
            <div className="table-temp">
                <SideBar 
                    addInfoToList={addInfoToList}
                    newData={value}
                />
                <div className="text-editor">
                    <BarIcon />
                    <textarea
                        className="textarea"
                        placeholder='Write a text'
                    >
                    </textarea>
                    <div className="footer">
                        @copyRight reserved by the author.
                    </div>
                </div>
            </div>
        </div>
    );
}