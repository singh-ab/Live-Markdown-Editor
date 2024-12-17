import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {ReactComponent as MoonIcon} from './components/moon.svg';
import {ReactComponent as SunIcon} from './components/sun.svg';
import ThemeSwitch from './components/ThemeSwitch';

export default function MarkdownEditor() {
    const [markdownInput, setMarkdownInput] = useState()
    return (
        <>
        <h1 id='main'>Live Markdown Editor</h1>
        <ThemeSwitch/>
        
        <div className="App">
            <div className="wrapper">
                <div className="head">
                    MARKDOWN
                </div>
                <textarea
                    autoFocus
                    className="textarea"
                    value={markdownInput}
                    onChange={
                        (e) =>
                            setMarkdownInput(e.target.value)
                    }
                ></textarea>
            </div>
            <div className="wrapper">
                <div className="head">
                    PREVIEW
                </div>
                <ReactMarkdown
                    children={markdownInput}
                    components={{
                        code: MarkComponent,
                    }}
                />
            </div>
        </div>
        </>
    )
}
const MarkComponent = ({ value }) => {
    return (
        { value }
    )
}