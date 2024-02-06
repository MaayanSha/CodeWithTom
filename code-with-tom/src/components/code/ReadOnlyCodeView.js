import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import "highlight.js/styles/base16/espresso.css";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

export default function ReadOnlyCodeView({title}) {
    //fetch code block data from state by title
    const codeBlock = useSelector(state => state.codeContent.codeBlocks?.find(block =>
        block.title === title));
    const codeRef = useRef(null);

    //highlight the code block upon mounting
    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);

    //must return a pre tag with a code tag inside for highlight.js to work
    return (
        <pre style={{width:"100%", height:"100%"}}>
          <code className="javascript" ref={codeRef} style={{width:"100%", height:"100%", borderRadius:20}}>
              {`${codeBlock?.code}`}
          </code>
        </pre>
    );
}

