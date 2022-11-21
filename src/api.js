//this is a data store of one hard coded comment
export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Try posting a comment here it's pretty cool",
      username: "anonymous",
      userId: "1",
      parentId: null,
      createdAt: "2022-11-20",
    },
  ];
};

//this creates the commments in the application. in this case there is only one built in one
export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "anonymous",
    createdAt: new Date().toISOString(),
  };
};

//this function updates/edits the comment
export const updateComment = async (text) => {
  return { text };
};

//this function deletes the comment
export const deleteComment = async () => {
  return {};
};
