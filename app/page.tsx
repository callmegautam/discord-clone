"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SignOutButton, UserButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className=" flex items-center justify-between gap-4 p-4">
            <h1>Home page</h1>

            <div className="flex items-center gap-4">
                <ModeToggle />

                <UserButton afterSwitchSessionUrl="/" />
            </div>
        </div>
    );
}
