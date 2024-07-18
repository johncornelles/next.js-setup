"use client"
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const data = await getProviders();
        setProviders(Object.values(data)); 
        console.log("Providers:", data); 
      } catch (error) {
        console.error("Error fetching providers:", error.message);
      }
    };
    fetchProviders();
  }, []);

  return (
    <nav className="flex justify-around p-5 bg-red-300 w-full">
      <Link href="/">
        <p>Home</p>
      </Link>
      {/* Desktop navigation */}
      <div className="sm:flex justify-center items-center w-[300px] hidden">
        {session?.user  ? (
          <>
            <Link href="/profile">
              <Image 
              className="rounded-full"
              src ={session?.user?.image}
              width={50}
              height={50}
              />
            </Link>
            <Link href="/create-post">
              <p>Create Post</p>
            </Link>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <> 
            {/* Render sign-in buttons for each provider */}
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            ))}
          </>
        )}
      </div>
      {/* Mobile navigation */}
      <div className="flex justify-center items-center w-[300px] sm:hidden">
        {session?.user ? (
          <>
            <div className="relative">
              <Image
              src={session?.user?.image}
              width={50}
              height={50}
              onClick={() => setToggle((prev) => !prev)}
              className="rounded-full"
              />
              {toggle && (
                <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end">
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                  <Link href="/create-post">
                    <p>Create Post</p>
                  </Link>
                  <button onClick={() => signOut()}>Sign Out</button>
                  <p
                    className="cursor-pointer"
                    onClick={() => setToggle(false)}
                  >
                    Close
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
