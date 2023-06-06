import marked from 'marked';
import './index.css';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faTint } from '@fortawesome/free-solid-svg-icons';

function App() {
  const placeholderText = `
# Welcome to the Markup Previewer

## This is a my project for

[Link](https://freecodecamp.org

Inline code: \`console.log("Hello, world!");\`

Code block:
\`\`\`
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("Tamara");
\`\`\`

- List Love
- List Dogs
- List Coke Zero

> Blockquote: "Be yourself; everyone else is already taken." - Oscar Wilde

![Image](https://mystickermania.com/cdn/stickers/cute-cats/cat-sunglasses-512x512.png)

**Thank you for visiting!!**
`;
const markdownText = (markdownText) => {  
  const html = marked(markdownText);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
const [editorValue, setEditorValue ] = useState(placeholderText);
const [previewValue, setPreviewValue] = useState(markdownText(editorValue));


const handleEditorChange = (event) =>{
  const newValue = event.target.value;  
  setEditorValue(newValue);
  setPreviewValue(markdownText(newValue));
};
  

  return (    
   <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="theme-buttons">
              <button className="btn btn-light">
                <FontAwesomeIcon icon={faSun} />
              </button>
              <button className="btn btn-dark">
                <FontAwesomeIcon icon={faMoon} />
              </button>
              <button className="btn btn-info">
                <FontAwesomeIcon icon={faTint} />
              </button>
            </div>
          </div>
          <div className="col">
            <div className="half-screen-container">
              <h2>Editor</h2>
              <textarea
                id="editor"
                className="half-screen-textarea editor"
                value={editorValue}
                onChange={handleEditorChange}
              />
            </div>
          </div>
          <div className="col">
            <div className="half-screen-container">
              <h2>Preview</h2>
              <div className="half-screen-textarea preview">{previewValue}</div>
            </div>
          </div>
        </div>
      </div>
    </div>







  );
}

export default App;




