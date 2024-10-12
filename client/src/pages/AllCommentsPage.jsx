import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import * as commentService from "../services/commentService";

import MyComments from "../components/MyComments/MyComments";

export default function AllCommentsPage() {
  const location = useLocation();
  const queryClient = useQueryClient();

  const {
    data: allComments,
    isLoading: isallCommentsLoading,
    error: allCommentsError,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["allComments"],
    queryFn: ({ pageParam = 1 }) => {
      return commentService.getPage(5, pageParam);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.comments.length < 5 ? undefined : allPages.length + 1;
    },
    retry: 1,
  });

  useEffect(() => {
    queryClient.resetQueries(["allComments"]);
    refetch();
  }, [location.pathname, refetch, queryClient]);

  const allCommentsMap =
    allComments?.pages.flatMap((page) => page.comments) || [];

  return (
    <MyComments
      data={allCommentsMap}
      isLoading={isallCommentsLoading}
      error={allCommentsError}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}
