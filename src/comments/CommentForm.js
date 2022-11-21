import { useState } from "react";
//importing styling
import "./comments.css";
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  Button,
  Input,
  CardContent,
  Typography,
} from "@mui/material";

//function creating commentForm and what a commentForm consisted of
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  //setting the text in comment
  const [text, setText] = useState(initialText);
  //can't post if there are zero characters
  const isTextareaDisabled = text.length === 0;
  //when submit button is clicked post comment and set input box back to nothing
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        className="comment-form-textarea"
        placeholder="enter text here..."
        value={text}
        color="secondary"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

//exporting the commentForm function
export default CommentForm;
