import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

function DragFiles() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the uploaded files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={isDragActive ? "dropzone-active" : "dropzone"}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}


export default DragFiles;