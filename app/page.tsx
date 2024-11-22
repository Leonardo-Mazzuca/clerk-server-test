
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { useId } from "react";

export default async function Home() {

  const {userId} = await auth();

  console.log('Id: ', userId);

  return (

    <div className="flex flex-col items-center h-screen justify-center w-full">

      <h1 className="font-bold text-3xl">Test</h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    </div>
    
  );
}
