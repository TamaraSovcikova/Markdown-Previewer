import './App.css';
import marked from 'marked';

const markdownText = "# Hello there";

const MarkdownComponent = (markdownText) => {  
  const html = marked(markdownText);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};




function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 

export { App, MarkdownComponent };
