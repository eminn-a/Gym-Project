import { useQuery } from "@tanstack/react-query";
import MyComments from "../components/MyComments/MyComments";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/authContext";
import * as commentService from "../services/commentService";

export default function CommentsPage() {
  const { isAdmin, userData } = useContext(UserContext);
  const {
    data: userComments,
    isLoading: isUserCommentsLoading,
    error: userCommentsError,
  } = useQuery({
    queryKey: ["userComments", isAdmin],
    queryFn: () => {
      if (isAdmin) {
        return commentService.getPage(5, 1);
      } else {
        return commentService.getPage(5, 1, userData._id);
      }
    },
    retry: 1,
    enabled: isAdmin !== undefined,
  });

  return (
    <MyComments
      data={userComments}
      isLoading={isUserCommentsLoading}
      error={userCommentsError}
    />
  );
}
