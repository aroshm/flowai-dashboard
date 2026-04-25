import { useEffect } from "react";

const useHeader = (header?: string) => {
  useEffect(() => {
    const pageHeader = document.getElementById("page-header");

    if (!pageHeader || !header) return;

    pageHeader.textContent = header;
  }, [header]);

  return null;
};

export default useHeader;
