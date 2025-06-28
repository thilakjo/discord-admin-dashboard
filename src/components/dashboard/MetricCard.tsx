import React from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
}

const MetricCard = ({ title, value }: MetricCardProps) => {
  return (
    <div className="bg-discordDark p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
      <h3 className="text-lg font-medium text-gray-300 mb-2">{title}</h3>
      <p className="text-4xl font-bold text-discordPurple">{value}</p>
    </div>
  );
};

export default MetricCard;
