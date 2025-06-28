"use client";

import React, { useState } from "react";
import { mockMessages } from "../../lib/data";
import { format } from "date-fns";
import Button from "../../components/ui/Button";

const MessagesPage = () => {
  const [messages, setMessages] = useState(mockMessages);

  const handleDeleteMessage = (id: string) => {
    // Instead of window.confirm, you would use a custom modal for confirmation
    const isConfirmed = confirm(
      "Are you sure you want to simulate deleting this message?"
    ); // Using confirm for quick demo, replace with custom modal
    if (isConfirmed) {
      console.log(`Simulating deletion of message ID: ${id}`);
      // In a real app, you'd filter out the message from state for a visual update
      // setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Server Messages</h1>

      <div className="bg-discordDark rounded-lg shadow-lg overflow-hidden">
        <ul className="divide-y divide-discordLightGrey">
          {messages.map((message) => (
            <li
              key={message.id}
              className="flex items-start p-4 hover:bg-discordLightGrey/50 transition-colors"
            >
              <img
                src={message.avatar}
                alt={`${message.username}'s avatar`}
                className="w-10 h-10 rounded-full mr-4 flex-shrink-0"
              />
              <div className="flex-grow">
                <div className="flex items-baseline mb-1">
                  <span className="font-semibold text-discordPurple mr-2">
                    {message.username}
                  </span>
                  <span className="text-xs text-gray-400">
                    {format(message.timestamp, "MMM dd, yyyy HH:mm")}
                  </span>
                </div>
                <p className="text-white text-sm mb-2">{message.content}</p>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteMessage(message.id)}
                  className="px-3 py-1 text-xs"
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessagesPage;
