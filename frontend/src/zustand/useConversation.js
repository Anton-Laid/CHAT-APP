import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  isAction: false,
  setIsAction: (bool) => set({ isAction: bool }),
}));

export default useConversation;
