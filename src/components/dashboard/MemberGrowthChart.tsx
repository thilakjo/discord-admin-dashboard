import React from "react";

interface MemberGrowthData {
  month: string;
  members: number;
}

interface MemberGrowthChartProps {
  data: MemberGrowthData[];
}

const MemberGrowthChart = ({ data }: MemberGrowthChartProps) => {
  // This is a very basic placeholder.
  // In a real application, you would integrate a charting library like Recharts here.
  const maxMembers = Math.max(...data.map((item) => item.members));

  return (
    <div className="w-full h-64 bg-discordLightGrey rounded-md flex items-end justify-around p-4 relative overflow-hidden">
      {/* Horizontal lines for visual reference */}
      <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none">
        <div className="h-px bg-gray-500 opacity-20 w-full"></div>
        <div className="h-px bg-gray-500 opacity-20 w-full"></div>
        <div className="h-px bg-gray-500 opacity-20 w-full"></div>
        <div className="h-px bg-gray-500 opacity-20 w-full"></div>
      </div>

      {data.map((item, index) => (
        <div
          key={item.month}
          className="flex flex-col items-center group cursor-pointer relative h-full justify-end px-2"
        >
          {/* Bar */}
          <div
            className="bg-discordPurple w-8 rounded-t-md transition-all duration-300 hover:scale-y-105"
            style={{ height: `${(item.members / maxMembers) * 90}%` }} // Scale height relative to max members
            aria-label={`${item.month}: ${item.members} members`}
          ></div>
          {/* Tooltip for accessibility and hover */}
          <span className="absolute bottom-full mb-2 text-xs text-white bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {item.members}
          </span>
          <span className="text-xs text-gray-400 mt-1">{item.month}</span>
        </div>
      ))}
    </div>
  );
};

export default MemberGrowthChart;
