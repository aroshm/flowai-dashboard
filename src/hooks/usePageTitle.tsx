import { useContext, useEffect } from "react";
import { PageTitleContext } from "../context/PageTitleContext";

export const usePageTitleContext = () => {
  const context = useContext(PageTitleContext);

  if (!context) {
    throw new Error("usePageTitleContext must be used inside PageTitleProvider");
  }

  return context;
};

const usePageTitle = (title: string) => {
  const { setTitle } = usePageTitleContext();

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
};

export default usePageTitle;
