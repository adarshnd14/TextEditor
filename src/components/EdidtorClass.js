
// import React, { Component } from 'react';
// import { convertToRaw, EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import '.../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import Grid from '@mui/material/Grid';
// import { Button } from '@mui/material';

// export default class TextEditor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             editorState: EditorState.createEmpty(),
//             message: 'Try the editor below!',
//             rawMessage: ''
//         };

//         this.onEditorStateChange = this.onEditorStateChange.bind(this);
//         this.handleEditorStateToMessage = this.handleEditorStateToMessage.bind(this);
//     }

//     onEditorStateChange(editorState) {
//         this.setState({
//             editorState,
//             rawMessage: draftToHtml(convertToRaw(editorState.getCurrentContent()))
//         });
//     };

//     handleEditorStateToMessage() {
//         this.setState({
//             message: this.state.rawMessage
//         })
//     }

//     render() {
//         const { editorState } = this.state;
//         const wrapperStyle = {
//             border: '1px solid #969696',
//         }
//         const editorStyle = {
//             height: '10rem',
//             padding: '1rem'
//         }
//         return (
//             <React.Fragment>
//                 <Grid container>
//                     <Grid item xs={3}></Grid>
//                     <Grid item xs={12} style={{ border: '1px solid #969696', borderRadius: '3px', height: '10rem', padding: '1rem' }}>
//                         <div dangerouslySetInnerHTML={{ __html: this.state.message }}></div>
//                     </Grid>
//                     <Grid item xs={3}></Grid>
//                 </Grid>
//                 <div style={{ marginTop: '5%' }}>
//                     <Editor
//                         initialEditorState={editorState}
//                         wrapperClassName="wrapper-class"
//                         wrapperStyle={wrapperStyle}
//                         editorStyle={editorStyle}
//                         // toolbarStyle={toolbarStyle}
//                         editorClassName="demo-editor"
//                         onEditorStateChange={this.onEditorStateChange}
//                         toolbar={{
//                             options: ['inline', 'blockType', 'fontSize', 'textAlign',
//                                 'history', 'colorPicker'],
//                             inline: {
//                                 options: ['italic', 'bold'],
//                                 bold: { className: 'demo-option-custom' },
//                                 italic: { className: 'demo-option-custom' },
//                                 underline: { className: 'demo-option-custom' },
//                                 strikethrough: { className: 'demo-option-custom' },
//                                 monospace: { className: 'demo-option-custom' },
//                                 superscript: { className: 'demo-option-custom' },
//                                 subscript: { className: 'demo-option-custom' }
//                             },
//                             blockType: {
//                                 className: 'demo-option-custom-wide',
//                                 dropdownClassName: 'demo-dropdown-custom'
//                             },
//                             fontSize: { className: 'demo-option-custom-medium' }
//                         }}
//                     />
//                 </div>
//                 <div style={{ marginTop: '2%' }}>
//                     <Button
//                         variant="outlined"
//                         onClick={this.handleEditorStateToMessage}
//                     >
//                         submit
//                     </Button>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }