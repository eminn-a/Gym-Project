import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import MyComments from "../components/MyComments/MyComments";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/authContext";
import * as commentService from "../services/commentService";
import { useLocation } from "react-router-dom";

export default function CommentsPage() {
  const { isAdmin, userData } = useContext(UserContext);
  const location = useLocation();
  const queryClient = useQueryClient();

  const {
    data: userComments,
    isLoading: isUserCommentsLoading,
    error: userCommentsError,
    fetchNextPage,
    hasNextPage,
    refetch,
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

  useEffect(() => {
    queryClient.resetQueries(["userComments", isAdmin]);
    refetch();
  }, [location.pathname, refetch, queryClient, isAdmin]);

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
