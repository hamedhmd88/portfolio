"use client";

import { useEffect, useState } from "react";

const MobileAlert = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setShow(true);
        } else {
          setShow(false);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!show) return null;

  return (
    // لایه بلر و تار کردن پس‌زمینه
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      {/* خود باکس هشدار */}
      <div className="bg-black-500/45 flex justify-center items-center flex-col text-green-800 rounded-xl p-6 max-w-sm w-full relative shadow-lg border-2 border-green-300">
        <p className="text-center font-semibold text-base md:text-lg">
          For the best experience, please use a larger device.
        </p>
        <button
          onClick={() => setShow(false)}
          className="mt-4 block w-1/2 bg-green-600 text-white font-medium text-lg hover:bg-green-700 rounded-md py-2 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MobileAlert;
