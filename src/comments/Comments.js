import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

//importing from the hard coded
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";

//importing styles
import "./comments.css";

//creating the function for comments
const Comments = ({ commentsUrl, currentUserId }) => {
  // creating constants
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  //getting backend replies...so onces that have been posted and sorting them from newest to oldest comment
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  //adding a comment function
  const addComment = (text, parentId) => {
    //call the api to create new comment
    createCommentApi(text, parentId).then((comment) => {
      //adding comment to card
      setBackendComments([comment, ...backendComments]);
      //no one active comment card
      setActiveComment(null);
    });
  };

  //updating comment function
  const updateComment = (text, commentId) => {
    //calling the function in the api
    updateCommentApi(text).then(() => {
      //getting the text
      const updatedBackendComments = backendComments.map((backendComment) => {
        //adding new text
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        //return new edited text/comment
        return backendComment;
      });
      //updating the comments
      setBackendComments(updatedBackendComments);
      //no more active comment input box
      setActiveComment(null);
    });
  };
  //deleting comment function
  const deleteComment = (commentId) => {
    //ask the user if they want to delete their comment
    if (window.confirm("Are you sure you want to delete your comment?")) {
      //if yes delete there comment and remove it from the api
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        //updating comments on teh screen
        setBackendComments(updatedBackendComments);
      });
    }
  };

  //getting the comments from the api and setting them on the screen
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  //returning the commentform
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <CommentForm
        submitLabel="Post Comment"
        variant="contained"
        className="details_button"
        color="secondary"
        handleSubmit={addComment}
        sx={{
          color: "white",
          width: "200px",
          height: "45px",
          backgroundColor: "secondary",
          cursor: "none",
        }}
      />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

//exporting the Comments function
export default Comments;
