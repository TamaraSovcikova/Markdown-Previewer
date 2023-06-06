//import marked from 'marked';
import './index.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const placeholderText = `
# Heading 1

## Subheading 2

[Link](https://example.com)

Inline code: \`console.log("Hello, world!");\`

Code block:

\`\`\`
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("Alice");
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote: "Be yourself; everyone else is already taken." - Oscar Wilde

![Image](https://example.com/image.jpg)

**Bolded text**
`;
const [editorValue, setEditorValue ] = useState(placeholderText);
const [previewValue, setPreviewValue] = useState(editorValue);


const handleEditorChange = (event) =>{
  const newValue = event.target.value;  
  setEditorValue(newValue);
  setPreviewValue(newValue);
};

  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="container">
                <h2>Editor</h2>
                <textarea id="editor" value={editorValue} onChange={handleEditorChange} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="container">
                <h2>Preview</h2>
                <textarea id="preview" value={previewValue} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;


//const markdownText = "# Hello there";

// const MarkdownComponent = (markdownText) => {  
//   const html = marked(markdownText);

//   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// };