import './index.css';
//import marked from 'marked';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

//const markdownText = "# Hello there";

// const MarkdownComponent = (markdownText) => {  
//   const html = marked(markdownText);

//   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// };




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="container">
                <h2>Column 1</h2>
                <p>Content of column 1</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="container">
                <h2>Column 2</h2>
                <p>Content of column 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
} 

export default App;
