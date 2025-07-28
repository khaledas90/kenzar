"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const location = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.back
    );
  }, [location.back]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-cinzel text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-4 font-inter">Oops! Page not found</p>
        <a href="/" className="text-secondary hover:text-secondary/80 underline transition-quick font-inter">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
