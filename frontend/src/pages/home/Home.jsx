import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/siderbar/Sidebar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { isAction } = useConversation();
  const mediaQuery = useMediaQuery("(max-width: 800px)");
  const mdClassMess = `bg-slate-600 ${isAction ? "fixed h-full" : "hidden"}`;
  const xlClassMess = "";

  return (
    <div className="relative flex sm:h-5/6 md:h-[550px] mm:h-5/6 xl:w-2/4 lg:w-2/3 md:w-4/5 sm:w-5/6 mm:w-5/6 rounded-lg overflow-hidden bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Sidebar />
      {mediaQuery ? (
        <MessageContainer style={mdClassMess} />
      ) : (
        <MessageContainer style={xlClassMess} />
      )}
    </div>
  );
};
export default Home;
