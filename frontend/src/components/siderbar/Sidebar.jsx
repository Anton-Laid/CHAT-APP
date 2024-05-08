import { useMediaQuery } from "../../hooks/useMediaQuery";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  const mediaQuery = useMediaQuery("(max-width: 800px)");

  return (
    <div
      className={` ${
        mediaQuery ? "fixed h-full w-full" : "border-r border-slate-500 "
      }  p-4 flex flex-col`}
    >
      <SearchInput />
      <div className="divider px-3 "></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}
