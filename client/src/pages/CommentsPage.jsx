import { useQuery } from "@tanstack/react-query";
import MyComments from "../components/MyComments/MyComments";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/authContext";
import * as commentService from "../services/commentService";

export default function CommentsPage() {
  const { isAdmin } = useContext(UserContext);

  const {
    data: userComments,
    isLoading: isUserCommentsLoading,
    error: userCommentsError,
  } = useQuery({
    queryKey: ["userComments", isAdmin], // Add isAdmin to the queryKey
    queryFn: () => {
      if (isAdmin) {
        return commentService.getAll();
      } else {
        return commentService.getLatest(2);
      }
    },
    retry: 1,
    enabled: isAdmin !== undefined,
  });

  // useEffect(() => {
  //   if (isAdmin) {
  //     refetch();
  //   }
  // }, [isAdmin, refetch]);

  return (
    <MyComments
      comments={userComments}
      isLoading={isUserCommentsLoading}
      error={userCommentsError}
    />
  );
}
