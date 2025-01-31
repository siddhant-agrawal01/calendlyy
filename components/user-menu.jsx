"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => {
  const { user, isLoaded } = useUser();

  
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          labelIcon={<ChartNoAxesGantt size={15} />}
          href="/events"
        />
      
        <UserButton.Action label="Manage Account" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;
