import marked from 'marked';
import './index.css';
import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faTint } from '@fortawesome/free-solid-svg-icons';

function App() {
  const placeholderText = `# (づ ◕‿◕ )づ
  ## Welcome to the Markup Previewer
##### This is a project for the Front End Development Libraries Certificate

[freecodecamp](https://freecodecamp.org)<br><br>

Inline Code:
\`console.log("Pleasure to see u here!");\`
<br>
Code block:
\`\`\`
function greet(name) {
  console.log(\`Hello, my name is \${name}!\`);
}
greet("Tamara");
\`\`\`

This project was made with:
- List Love
- List Passion
- List Coke Zero

> Blockquote: "Be yourself; everyone else is already taken." - Oscar Wilde

![Image](https://mystickermania.com/cdn/stickers/cute-cats/cat-sunglasses-512x512.png)
**Thank you for visiting!!**`;



const markdownText = (markdownText) => {
  const renderer = new marked.Renderer();

  renderer.paragraph = (text) => {
    return text.replace(/\n/g, '<br>'); 
  };

  renderer.codespan = (code) => {
    return `<code>${code}</code>`; 
  };

  renderer.code = (code, language) => {
    return `<pre><code>${code}</code></pre>`;
  };

  const html = marked(markdownText, { renderer });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};


const [editorValue, setEditorValue] = useState(placeholderText);
const [previewValue, setPreviewValue] = useState(markdownText(placeholderText));

const handleEditorChange = (event) => {
  const newValue = event.target.value;
  setEditorValue(newValue);
  setPreviewValue(markdownText(newValue));
};

const [theme, setTheme] = useState('dark');

const toggleTheme = (selectedTheme) => {
  setTheme(selectedTheme);
};

useEffect(() => {
  const root = document.documentElement;

  const themes = {
    dark: {
      backgroundColor: '#212020',
      h2Color: '#e1dfe1',
      buttonColor: '#e1dfe1',
      buttonIcon: '#454545',
    },
    light: {
      backgroundColor: '#e1dfe1',
      h2Color: 'black',
      buttonColor: 'black',
      buttonIcon: '#e1dfe1',
    },
    aqua: {
      backgroundColor: '#b9d0e1',
      h2Color: '#445066',
      buttonColor: '#e1dfe1;',
      buttonIcon: '#454545',
    },
  };

  const selectedTheme = themes[theme];

  Object.entries(selectedTheme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}, [theme]);

return (
  <div className="App">
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-1 pl-0  d-flex align-items-center justify-content-center">
          <div className="theme-buttons">
            <button onClick={() => toggleTheme('light')} className="btn btn-light">
              <FontAwesomeIcon icon={faSun} />
            </button>
            <button onClick={() => toggleTheme('dark')} className="btn btn-dark">
              <FontAwesomeIcon icon={faMoon} />
            </button>
            <button onClick={() => toggleTheme('aqua')} className="btn btn-info">
              <FontAwesomeIcon icon={faTint} />
            </button>
          </div>
        </div>
        <div className="col-4">
          <div className="half-screen-container">
            <h2 className="head">Editor</h2>
            <textarea
              id="editor"
              className="half-screen-textarea editor"
              value={editorValue}
              onChange={handleEditorChange}
            />
          </div>
        </div>
        <div className="col-7">
          <div className="half-screen-container">
            <h2 className="head">Preview</h2>
            <div className="half-screen-textarea preview">{previewValue}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
