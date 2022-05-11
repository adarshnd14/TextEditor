import React, { Component } from "react";
// import { render } from 'react-dom';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import './App.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DOMPurify from "dompurify";
import { convertToHTML } from "draft-convert";

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      convertedContent: null,
    };
  }

  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(
      this.state.editorState.getCurrentContent()
    );
    this.setState({ convertedContent: currentContentAsHTML });
  };

  render() {
    const { editorState } = this.state;

    function uploadImageCallBack(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        file && reader.readAsDataURL(file);
        reader.onload = () => {
          resolve({ data: { link: reader.result } });
        };
      });
    }

    function createMarkup(html) {
      return {
        __html: DOMPurify.sanitize(html),
      };
    }

    return (
      <div className="editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true },
            },
          }}
        />
      </div>
    );
  }
}

const RichTextEditor = () => (
  <div>
    <h2>React Wysiwyg Rich Editor Using Draft.js</h2>
    <EditorContainer />
  </div>
);
export default RichTextEditor;
