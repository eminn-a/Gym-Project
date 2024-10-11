import { useInfiniteQuery } from "@tanstack/react-query";
import MyComments from "../components/MyComments/MyComments";
import { useContext } from "react";
import { UserContext } from "../context/authContext";
import * as commentService from "../services/commentService";

export default function CommentsPage() {
  const { isAdmin, userData } = useContext(UserContext);

  const {
    data: userComments,
    isLoading: isUserCommentsLoading,
    error: userCommentsError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["userComments", isAdmin],
    queryFn: ({ pageParam = 1 }) => {
      if (isAdmin) {
        return commentService.getPage(5, pageParam);
      } else {
        return commentService.getPage(5, pageParam, userData._id);
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.comments.length < 5 ? undefined : allPages.length + 1;
    },
    retry: 1,
    enabled: isAdmin !== undefined,
  });

  const allComments =
    userComments?.pages.flatMap((page) => page.comments) || [];

  return (
    <MyComments
      data={allComments}
      isLoading={isUserCommentsLoading}
      error={userCommentsError}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}
