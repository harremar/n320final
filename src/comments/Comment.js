//https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/144-react-comments
//this is were i got most of the comment code from

import { CardContent } from "@mui/material";
import CommentForm from "./CommentForm";
//importing the styling
import "./comments.css";

//what a comment consisted of
const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  //for editing a comment
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  //for replying to a comment
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  //creating who long a comment has been up
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  //for deleting a comment
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  //for replying to a comment
  const canReply = Boolean(currentUserId);
  //for editing a comment
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  // creating a date posted for comment
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <CardContent className="commentHolder">
      <div key={comment.id} className="comment">
        <div className="comment-image-container">
          <img src="./images/red.webp" />
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{comment.username}</div>
            <div>{createdAt}</div>
          </div>
          {!isEditing && <div className="comment-text">{comment.body}</div>}
          {isEditing && (
            <CommentForm
              submitLabel="Update"
              hasCancelButton
              initialText={comment.body}
              handleSubmit={(text) => updateComment(text, comment.id)}
              handleCancel={() => {
                setActiveComment(null);
              }}
            />
          )}
          <div className="comment-actions">
            {canReply && (
              <div
                className="comment-action"
                onClick={() =>
                  setActiveComment({ id: comment.id, type: "replying" })
                }
              >
                Reply
              </div>
            )}
            {canEdit && (
              <div
                className="comment-action"
                onClick={() =>
                  setActiveComment({ id: comment.id, type: "editing" })
                }
              >
                Edit
              </div>
            )}
            {canDelete && (
              <div
                className="comment-action"
                onClick={() => deleteComment(comment.id)}
              >
                Delete
              </div>
            )}
          </div>
          {isReplying && (
            <CommentForm
              submitLabel="Reply"
              handleSubmit={(text) => addComment(text, replyId)}
            />
          )}
          {replies.length > 0 && (
            <div className="replies">
              {replies.map((reply) => (
                <Comment
                  comment={reply}
                  key={reply.id}
                  setActiveComment={setActiveComment}
                  activeComment={activeComment}
                  updateComment={updateComment}
                  deleteComment={deleteComment}
                  addComment={addComment}
                  parentId={comment.id}
                  replies={[]}
                  currentUserId={currentUserId}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </CardContent>
  );
};

//exporting Comment function
export default Comment;
