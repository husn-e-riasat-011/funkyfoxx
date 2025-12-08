"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  // const router = useRouter();

  // // const pathname = usePathname();
  // // Check if running in the browser environment
  // const isBrowser = typeof window !== "undefined";

  // // Check localStorage for authentication status (only in browser)
  // const isAuthenticated = isBrowser
  //   ? localStorage?.getItem("token") !== null
  //   : false;

  // // Redirect to login page if not authenticated
  // useEffect(() => {
  //   if (isBrowser && !isAuthenticated) {
  //     router.replace("/auth/signin"); // Replace with your login page path
  //   } else {
  //     setLoading(false); // Mark loading as complete when authenticated or not in browser
  //   }
  // }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
