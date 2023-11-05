import React from 'react';
import { StreamChat } from 'stream-chat';
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';
import '@stream-io/stream-chat-css/dist/css/index.css';

const apiKey = "48kmaj4gqgva";

const user = {
  id: 'thuc',
  name: "thuc"
}
const userId = user.id; 

const chatClient = StreamChat.getInstance(apiKey);

if (typeof window !== 'undefined') {
  chatClient.connectUser({ id: userId }, chatClient.devToken(userId));
}
const channel = chatClient.channel('messaging', 'travel', {
  name: 'Awesome channel about traveling',
  members: [userId]
});
// Here, 'travel' will be the channel ID
await channel.watch();
// if (process.env.REACT_APP_CHAT_SERVER_ENDPOINT) {
//   chatClient.setBaseURL(process.env.REACT_APP_CHAT_SERVER_ENDPOINT);
// }
const filters = { type: 'messaging', members: {$in: [userId]}  };
const options = { state: true, presence: true, limit: 10 };
const sort = { last_message_at: -1, updated_at: -1 };
  
const App = () => (
  <Chat client={chatClient}>
    <ChannelList filters={filters} options={options} showChannelSearch sort={sort} />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput focus />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);
import "./App.css";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserOutlined, MessageOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Menu, Button, Layout, Card, Tag, FloatButton } from "antd";

import NewHelp from "./pages/NewHelp";
import Blogs from "./pages/Blogs";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UserPage from "./pages/UserPage";

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />}>
          <Route path="/" element={<Main />} />
          <Route path="/newhelp" element={<NewHelp />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;