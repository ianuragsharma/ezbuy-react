import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `ezBuy | ${title}`;
  }, [title]);
};
export { useDocumentTitle };
