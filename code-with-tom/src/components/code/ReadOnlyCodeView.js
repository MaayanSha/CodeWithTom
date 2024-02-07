import React from 'react';
import {useSelector} from "react-redux";
import "highlight.js/styles/base16/espresso.css";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import Highlight from 'react-highlight'

export default function ReadOnlyCodeView({title}) {
    hljs.registerLanguage('javascript', javascript);

    //fetch code block data from state by title
    const codeBlock = useSelector(state => state.codeContent.codeBlocks?.find(block =>
        block.title === title));
    //const codeRef = useRef(codeBlock?.code);
    //highlight the code block upon mounting and every change of the code
    // hljs.initHighlightingOnLoad();
    // useEffect(() => {
    //     hljs.initHighlighting.called = false;
    //     hljs.initHighlighting();
    // },[]);

    //must return a pre tag with a code tag inside for highlight.js to work
    return (
    <Highlight className="javascript">
        {codeBlock?.code}
    </Highlight>
    );
}

// <pre style={{width: "100%", height: "100%", textAlign:"left"}}>
//           <code className="javascript" ref={codeRef} style={{width: "100%", height: "100%", borderRadius: 20}}>
//             {codeBlock?.code}
//           </code>
//         </pre>

