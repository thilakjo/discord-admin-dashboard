import { format } from "date-fns";

export const mockMembers = [
  {
    id: "1",
    avatar: "https://i.pravatar.cc/150?img=21", // Changed image number
    username: "RahulSharma",
    joinDate: new Date("2023-01-15"),
    role: "Admin",
  },
  {
    id: "2",
    avatar: "https://i.pravatar.cc/150?img=22", // Changed image number
    username: "PriyaSingh",
    joinDate: new Date("2023-02-20"),
    role: "Member",
  },
  {
    id: "3",
    avatar: "https://i.pravatar.cc/150?img=23", // Changed image number
    username: "AmitKumar",
    joinDate: new Date("2023-03-10"),
    role: "Moderator",
  },
  {
    id: "4",
    avatar: "https://i.pravatar.cc/150?img=24", // Changed image number
    username: "MeeraDevi",
    joinDate: new Date("2023-04-01"),
    role: "Member",
  },
  {
    id: "5",
    avatar: "https://i.pravatar.cc/150?img=25", // Changed image number
    username: "SanjayGupta",
    joinDate: new Date("2023-05-05"),
    role: "Member",
  },
  {
    id: "6",
    avatar: "https://i.pravatar.cc/150?img=26", // Changed image number
    username: "AnjaliVerma",
    joinDate: new Date("2023-06-12"),
    role: "Admin",
  },
  {
    id: "7",
    avatar: "https://i.pravatar.cc/150?img=27", // Changed image number
    username: "VikramYadav",
    joinDate: new Date("2023-07-20"),
    role: "Member",
  },
  {
    id: "8",
    avatar: "https://i.pravatar.cc/150?img=28", // Changed image number
    username: "ShilpaRao",
    joinDate: new Date("2023-08-01"),
    role: "Member",
  },
  {
    id: "9",
    avatar: "https://i.pravatar.cc/150?img=29", // Changed image number
    username: "RohanMehta",
    joinDate: new Date("2023-09-15"),
    role: "Member",
  },
  {
    id: "10",
    avatar: "https://i.pravatar.cc/150?img=30", // Changed image number
    username: "DeepaReddy",
    joinDate: new Date("2023-10-22"),
    role: "Member",
  },
];

export const mockRoles = [
  { id: "r1", name: "Admin", color: "bg-red-500", enabled: true },
  { id: "r2", name: "Moderator", color: "bg-green-500", enabled: true },
  { id: "r3", name: "Member", color: "bg-blue-500", enabled: true },
  { id: "r4", name: "Guest", color: "bg-gray-500", enabled: false },
  { id: "r5", name: "Bot", color: "bg-purple-500", enabled: true },
];

export const mockMessages = [
  {
    id: "m1",
    username: "RahulSharma",
    avatar: "https://i.pravatar.cc/150?img=21",
    timestamp: new Date("2024-06-27T10:00:00Z"),
    content: "Namaste everyone, welcome to the server!",
  },
  {
    id: "m2",
    username: "PriyaSingh",
    avatar: "https://i.pravatar.cc/150?img=22",
    timestamp: new Date("2024-06-27T10:05:00Z"),
    content: "Dhanyawad, Rahul! Glad to be here.",
  },
  {
    id: "m3",
    username: "AmitKumar",
    avatar: "https://i.pravatar.cc/150?img=23",
    timestamp: new Date("2024-06-27T10:10:00Z"),
    content: "Just checking in, koi nayi khabar?",
  },
  {
    id: "m4",
    username: "MeeraDevi",
    avatar: "https://i.pravatar.cc/150?img=24",
    timestamp: new Date("2024-06-27T10:15:00Z"),
    content: "Naye niyam #announcements mein hain.",
  },
  {
    id: "m5",
    username: "RahulSharma",
    avatar: "https://i.pravatar.cc/150?img=21",
    timestamp: new Date("2024-06-27T10:20:00Z"),
    content: "Achha, main dekh lunga.",
  },
];

export const mockDashboardMetrics = {
  totalMembers: mockMembers.length,
  onlineUsers: 7, // Mocked
  activeRoles: mockRoles.filter((role) => role.enabled).length,
  messagesToday: mockMessages.length,
};

export const mockMemberGrowth = [
  { month: "Jan", members: 100 },
  { month: "Feb", members: 120 },
  { month: "Mar", members: 150 },
  { month: "Apr", members: 170 },
  { month: "May", members: 200 },
  { month: "Jun", members: 230 },
];
