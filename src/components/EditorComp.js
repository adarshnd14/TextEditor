import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from "draft-convert";
import { convertToRaw } from "draft-js";
import { ContentState } from "draft-js";
import DOMPurify from "dompurify";

function EditorComp() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  let _contentState = ContentState.createFromText("Sample content state");
  const raw = convertToRaw(_contentState);
  // const [contentState, setContentState] = useState(raw)

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const uploadCallback = (file) => {
    //   console.log(file);
    //   const reader = new FileReader()
    //     file && reader.readAsDataURL(file)
    //     reader.onload=()=>{
    //         return new Promise((resolve,reject)=>{
    //             resolve({data:{link:reader.result}})
    //         })
    //     }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      file && reader.readAsDataURL(file);
      reader.onload = () => {
        resolve({ data: { link: reader.result } });
      };
    });
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">React Editor</header>
        <Editor
          // editorState={editorState}
          defaultEditorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            image: {
              uploadCallback: uploadCallback,
              default: {
                width: "500px",
                height: "300px",
              },
            },
          }}
        />
      </div>
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </div>
  );
}

export default EditorComp;
