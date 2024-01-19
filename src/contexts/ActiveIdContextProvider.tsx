import { ReactNode, createContext } from "react";
import { useActiveId } from "../hooks/useActiveId";

type ActiveIdContextType = { activeId: number | null };

export const ActiveIdContext = createContext<ActiveIdContextType | null>(null);

export default function ActiveIdContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider value={{ activeId }}>
      {children}
    </ActiveIdContext.Provider>
  );
}
