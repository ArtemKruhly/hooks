import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUploader(props) {
  const onDrop = useCallback(acceptedFiles => {
    props.uploadFile(acceptedFiles);
    alert(`File ${acceptedFiles.map(item => item.name).toString()} has been added
     Size - ${acceptedFiles.map(item => item.size).toString()} bytes`);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
				<input {...getInputProps()} />
				{
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
		</div>
  );
}
