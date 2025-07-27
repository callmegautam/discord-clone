import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="bg-black h-screen text-white">
            <h1>Home page</h1>

            <UserButton afterSwitchSessionUrl="/" />
        </div>
    );
}
