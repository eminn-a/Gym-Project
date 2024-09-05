import { useQuery } from "@tanstack/react-query";
import MyComments from "../components/MyComments/MyComments";
import { useContext } from "react";
import { UserContext } from "../context/authContext";
import * as commentService from "../services/commentService";

export default function CommentsPage() {
  const { isAdmin } = useContext(UserContext);

  const fetchComments = async () => {
    if (isAdmin) {
      return commentService.getAll();
    } else {
      return commentService.getLatest(2);
    }
  };

  const {
    data: userComments,
    isLoading: isUserCommentsLoading,
    error: userCommentsError,
  } = useQuery({
    queryKey: ["userComments"],
    queryFn: fetchComments,
    retry: 1,
  });

  //need to fix loading spinner and error
  if (isUserCommentsLoading) {
    return <div>Loading...</div>;
  }

  if (userCommentsError) {
    return <div>Error: {userCommentsError.message}</div>;
  }

  return <MyComments comments={userComments} />;
}
