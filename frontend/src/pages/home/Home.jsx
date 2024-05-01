import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/siderbar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
