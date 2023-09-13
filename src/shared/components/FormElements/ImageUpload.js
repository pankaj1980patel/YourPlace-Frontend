import React from "react";
import Button from "./Button";

import "./ImageUpload.css";

const ImageUpload = (props) => {
  return (
    <div>
      <div className="form-control">
        <input
          id={props.id}
          style={{ display: "none" }}
          type="file"
          accept=".jpg,.jpeg,.png"
        />
      </div>
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
            <img src="" alt="preview" />
        </div>
        <Button type="button" >PICK IMAGE</Button>
      </div>
    </div>
  );
};

export default ImageUpload;
