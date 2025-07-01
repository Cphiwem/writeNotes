import { useEffect } from "react";

export const useTitles = (title) => {
  useEffect(() => {
    document.title = `${title} - CodeBook`;
  }, [title]);
  return null;
};
