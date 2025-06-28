"use client";

import React, { useState, useMemo } from "react";
import { mockMembers } from "../../lib/data";
import { format } from "date-fns";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const MembersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [sortBy, setSortBy] = useState<"username" | "joinDate">("username");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ username: "", role: "Member" });

  const roles = useMemo(
    () => Array.from(new Set(mockMembers.map((m) => m.role))),
    []
  );

  const filteredAndSortedMembers = useMemo(() => {
    let members = [...mockMembers];

    if (searchTerm) {
      members = members.filter((member) =>
        member.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterRole) {
      members = members.filter((member) => member.role === filterRole);
    }

    members.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "username") {
        comparison = a.username.localeCompare(b.username);
      } else if (sortBy === "joinDate") {
        comparison = a.joinDate.getTime() - b.joinDate.getTime();
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    // Simple pagination - for a full implementation, you'd manage currentPage, itemsPerPage
    return members.slice(0, 10); // Show first 10 for brevity
  }, [searchTerm, filterRole, sortBy, sortOrder]);

  const handleAddMember = () => {
    // In a real app, you'd add this to your state/data
    console.log(
      `Simulating adding new member: ${newMember.username} (${newMember.role})`
    );
    setIsModalOpen(false);
    setNewMember({ username: "", role: "Member" });
    // Instead of alert, you can show a toast notification or update a message in the UI
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Server Members</h1>

      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <Input
          type="text"
          placeholder="Search by username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search members"
        />
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="p-2 rounded-md bg-discordLightGrey border border-discordDark focus:outline-none focus:ring-2 focus:ring-discordPurple"
          aria-label="Filter by role"
        >
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "username" | "joinDate")}
          className="p-2 rounded-md bg-discordLightGrey border border-discordDark focus:outline-none focus:ring-2 focus:ring-discordPurple"
          aria-label="Sort by"
        >
          <option value="username">Sort by Username</option>
          <option value="joinDate">Sort by Join Date</option>
        </select>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="p-2 rounded-md bg-discordPurple hover:bg-discordPurple/80 transition-colors"
          aria-label={`Sort order: ${
            sortOrder === "asc" ? "ascending" : "descending"
          }`}
        >
          {sortOrder === "asc" ? "ASC" : "DESC"}
        </button>
        <Button onClick={() => setIsModalOpen(true)}>Add New Member</Button>
      </div>

      <div className="bg-discordDark rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-discordLightGrey">
          <thead className="bg-discordLightGrey">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Avatar
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Join Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-discordLightGrey">
            {filteredAndSortedMembers.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-discordLightGrey/50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={member.avatar}
                    alt={`${member.username}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white">
                  {member.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                  {format(member.joinDate, "PPP")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      member.role === "Admin"
                        ? "bg-red-600 text-white"
                        : member.role === "Moderator"
                        ? "bg-green-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {member.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination would go here */}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Member"
      >
        <div className="p-4">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={newMember.username}
              onChange={(e) =>
                setNewMember({ ...newMember, username: e.target.value })
              }
              placeholder="Enter username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Role
            </label>
            <select
              id="role"
              value={newMember.role}
              onChange={(e) =>
                setNewMember({ ...newMember, role: e.target.value })
              }
              className="p-2 w-full rounded-md bg-discordLightGrey border border-discordDark focus:outline-none focus:ring-2 focus:ring-discordPurple"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddMember}>Add Member</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MembersPage;
