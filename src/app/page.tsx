import React from "react";
import MetricCard from "../components/dashboard/MetricCard";
import { mockDashboardMetrics, mockMemberGrowth } from "../lib/data";
import MemberGrowthChart from "../components/dashboard/MemberGrowthChart"; // Placeholder

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Members"
          value={mockDashboardMetrics.totalMembers}
        />
        <MetricCard
          title="Online Users"
          value={mockDashboardMetrics.onlineUsers}
        />
        <MetricCard
          title="Active Roles"
          value={mockDashboardMetrics.activeRoles}
        />
        <MetricCard
          title="Messages Today"
          value={mockDashboardMetrics.messagesToday}
        />
      </section>

      <section className="bg-discordDark p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Member Growth Over Time</h2>
        {/*
          For a real chart, you'd use a library like Recharts here.
          For this task, a simple mock representation or a placeholder is fine.
        */}
        <MemberGrowthChart data={mockMemberGrowth} />
        <p className="text-gray-400 mt-4">
          (Placeholder for a line/bar chart showing member growth. In a real
          app, this would use a charting library.)
        </p>
      </section>
    </div>
  );
};

export default DashboardPage;
