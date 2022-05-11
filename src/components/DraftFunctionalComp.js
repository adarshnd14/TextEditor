// import React, { useState } from 'react';
// import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import { convertToHTML } from 'draft-convert';
// // Converts an HTML fragment to an object with two keys one of which holds an array of ContentBlock objects and 
// // another holding a reference to the entityMap. This object can then be used to construct 
// // content state
// import DOMPurify from 'dompurify';
// // to ensure that your HTML is properly structured and sanitized before adding it to
// //  your page. An easy way to do this is by using libraries such as dompurify
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import '../App.css';


// function DraftFunctinalComp (props) {
//   const [text, settext] = useState('')
//   const [editorState, setEditorState] = useState(
//     () => EditorState.createEmpty(),
//   );
//   const [img, setImg] = useState()
//   // EditorState provides a snapshot of the editor state. This includes the undo/redo history, 
//   //contents, and cursor takes EditorState as a prop.
//    // controlled editor is achieved using EditorState

//   const  [convertedContent, setConvertedContent] = useState(null);
//   const handleEditorChange = (value) => {
//     setEditorState(value);
//     convertContentToHTML();
//   }
//   const convertContentToHTML = () => {
//     let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
//     setConvertedContent(currentContentAsHTML);
//     console.log(currentContentAsHTML.toString());
//     settext(currentContentAsHTML.toString())
//   }
//   const createMarkup = (html) => {
//     return  {
//       __html: DOMPurify.sanitize(html)
//     }
//   }
//   // function uploadPlugin(editor) {
//   //   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
//   //     return uploadAdapter(loader);
//   //   };
//   // }
// //   const uploadCallback = (file, callback) => {
// //     console.log(file);
// //     return new Promise((resolve, reject) => {
// //       const reader = new window.FileReader();
// //       console.log(reader);
// //       reader.onloadend = async () => {
// //         const form_data = new FormData();
// //         form_data.append("file", file);
// //         const res = await uploadFile(form_data);
// //         setValue("thumbnail", res.data);
// //         resolve({ data: { link: process.env.REACT_APP_API + res.data } });
// //       };
// //       reader.readAsDataURL(file);
// //     });
// //   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         React Draft 
//       </header>
//       <Editor
//         editorState={editorState}
//         //  oneditorStateChange :- A function called when there is a change in editor state
//         // that takes an object argument of type EditorState
//         onEditorStateChange={handleEditorChange}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//         toolbar={{
//                             inline: { inDropdown: true },
//                             list: { inDropdown: true },
//                             textAlign: { inDropdown: true },
//                             link: { inDropdown: true },
//                             history: { inDropdown: true },
//                             // image: { uploadCallback: this._uploadImageCallBack },
//                             inputAccept: 'application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel'
//                         }}
//       />
     

//       {/* dangerouslySetInnerHTML receives an object with a __html key(two underscores). This key will 
//       hold the sanitized HTML. We can now add the methods to sanitize the HTML and element to hold it */}
//       <div className="HTMLpreview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
//       <h3>{text}</h3>
    

//     </div>
//   )
// }
// export default DraftFunctinalComp;