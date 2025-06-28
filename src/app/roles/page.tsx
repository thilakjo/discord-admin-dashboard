"use client";

import React, { useState } from "react";
import { mockRoles } from "../../lib/data";
import ToggleSwitch from "../../components/ui/ToggleSwitch";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const RolesPage = () => {
  const [roles, setRoles] = useState(mockRoles);
  const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
  const [newRoleName, setNewRoleName] = useState("");

  const handleToggleVisibility = (id: string, newState: boolean) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, enabled: newState } : role
      )
    );
  };

  const handleRenameClick = (roleId: string, currentName: string) => {
    setEditingRoleId(roleId);
    setNewRoleName(currentName);
  };

  const handleSaveRename = (roleId: string) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId ? { ...role, name: newRoleName } : role
      )
    );
    setEditingRoleId(null);
    setNewRoleName("");
    console.log(`Simulating role rename to: ${newRoleName}`);
  };

  const handleCancelRename = () => {
    setEditingRoleId(null);
    setNewRoleName("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Server Roles</h1>

      <div className="bg-discordDark rounded-lg shadow-lg overflow-hidden">
        <ul className="divide-y divide-discordLightGrey">
          {roles.map((role) => (
            <li
              key={role.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 hover:bg-discordLightGrey/50 transition-colors"
            >
              <div className="flex items-center mb-2 sm:mb-0">
                <span
                  className={`inline-block h-4 w-4 rounded-full mr-3 ${role.color}`}
                ></span>
                {editingRoleId === role.id ? (
                  <Input
                    type="text"
                    value={newRoleName}
                    onChange={(e) => setNewRoleName(e.target.value)}
                    className="mr-2"
                    aria-label={`Rename role ${role.name}`}
                  />
                ) : (
                  <span className="text-lg font-medium text-white">
                    {role.name}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-4">
                {editingRoleId === role.id ? (
                  <>
                    <Button
                      variant="primary"
                      onClick={() => handleSaveRename(role.id)}
                    >
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelRename}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <ToggleSwitch
                      id={`toggle-${role.id}`}
                      initialState={role.enabled}
                      onToggle={(newState) =>
                        handleToggleVisibility(role.id, newState)
                      }
                      label="Visible"
                    />
                    <Button
                      variant="secondary"
                      onClick={() => handleRenameClick(role.id, role.name)}
                    >
                      Rename
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RolesPage;
