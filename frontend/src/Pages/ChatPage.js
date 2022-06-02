import { Box } from "@chakra-ui/react";
import ChatBox from "../components/Authentication/ChatBox";
import SideDrawer from "../components/Authentication/miscellaneous/SideDrawer";
import MyChats from "../components/Authentication/MyChats";
import { ChatState } from "../Context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="90vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
