import React from 'react';
import {Ellipsis} from 'lucide-react'

const messages = [
  {
    name: 'Europia Hotel',
    message: 'We are pleased to announc...',
    time: '11:00 AM',
    unread: 1,
    avatar: '🏨'
  },
  {
    name: 'Global Travel Co',
    message: 'We have updated our com...',
    time: '2:30 PM',
    unread: 3,
    avatar: '🌍'
  },
  {
    name: 'Kalendra Umbara',
    message: 'Hi, I need assistance with c...',
    time: '9:45 AM',
    unread: 5,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Osman Farooq',
    message: 'Hello, I had an amazing tim...',
    time: '10:15 AM',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Mellinda Jenkins',
    message: 'Can you provide more deta...',
    time: '1:20 PM',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'David Hernandez',
    message: 'I would like to upgrade my...',
    time: '10:00 AM',
    unread: 1,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Alexandra Green',
    message: 'Our company is interested i...',
    time: '12:30 PM',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const MessagesList = () => {
  return (
    <div className=" rounded-2xl shadow-md p-4 w-full h-auto border border-solid border-gray-400/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Messages</h2>
        <Ellipsis className="text-gray-500 cursor-pointer" />
      </div>
      <ul className="space-y-3 ">
        {messages.map((msg, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden flex justify-center items-center">
                {msg.avatar.startsWith('http') ? (
                  <img src={msg.avatar} alt={msg.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span className="text-2xl">{msg.avatar}</span>
                )}
              </div>
              <div>
                <h4 className="text-md font-bold">{msg.name}</h4>
                <p className="text-gray-500 text-sm">{msg.message}</p>
              </div>
            </div>
            <div className="text-right w-1/4">
              <p className="text-xs text-sky-400 font-bold">{msg.time}</p>
              <span className="inline-block bg-blue-600 text-white text-xs font-bold rounded-sm px-2 py-0.5">
                {msg.unread}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;
