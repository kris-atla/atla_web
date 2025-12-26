"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react"), {
  ssr: false,
});

export const Component = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      // Use the parent container height instead of window height
      const hero = document.getElementById("hero-section");

      setSize({
        width: window.innerWidth,
        height: hero ? hero.offsetHeight : window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!size.width || !size.height) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <UnicornScene
        production
        projectId="ed7SJMvTJEVxfqzypOOQ"
        width={size.width}
        height={size.height}
      />
    </div>
  );
};
