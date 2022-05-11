//npm i draft-js html-to-draftjs react-draft-wysiwyg draftjs-to-html
import './App.css';
import DraftFunctinalComp from './components/DraftFunctionalComp';
import TextEditor from './components/EdidtorClass';
import EditorComp from './components/EditorComp'
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <div className="App">
      {/* <EditorComp/> */}
      {/* <TextEditor/> */}
      {/* <DraftFunctinalComp/> */}
      <RichTextEditor/>
    </div>
  );
}

export default App;
