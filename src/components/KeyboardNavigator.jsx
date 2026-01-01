"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const KeyboardNavigator = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "h":
          router.push("/");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return null;
};

export default KeyboardNavigator;
