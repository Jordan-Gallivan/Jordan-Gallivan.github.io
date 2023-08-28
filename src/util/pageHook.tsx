import React, { createContext, ReactNode, useContext, useState } from "react";
import { PageTypes } from "./constants";

type changePageFn = (pageUpdate: PageTypes) => void;

export type ContextType = {
  page: PageTypes,
  changePage: changePageFn,
}

export const PageContext = createContext<ContextType>({
  page: PageTypes.HOME,
  changePage: (pageUpdate: PageTypes) => {},
});
export const usePage = () => useContext(PageContext);

export default function PageProvider({children}:{children: ReactNode}) {
  const [page, setPage] = useState<PageTypes>(PageTypes.HOME);

  const changePage = (pageUpdate: PageTypes) => {
    setPage(pageUpdate);
  }
  return (
    <PageContext.Provider value={{page, changePage}}>
      {children}
    </PageContext.Provider>
  )
}
