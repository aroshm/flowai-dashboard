import { useState, type ReactNode } from "react";
import { PageTitleContext } from "../../context/PageTitleContext";

type PageTitleProviderProps = {
  children: ReactNode;
  defaultTitle?: string;
};

const PageTitleProvider = ({
  children,
  defaultTitle = "Dashboard",
}: PageTitleProviderProps) => {
  const [title, setTitle] = useState(defaultTitle);

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

export default PageTitleProvider;
