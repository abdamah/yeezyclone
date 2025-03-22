"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg text-center ">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        {sessionId ? (
          <>
            <p className="text-gray-700 mb-2">
              Thank you for your purchase! Your payment session ID is:
            </p>
            <p
              className="text-sm text-gray-500 font-mono truncate"
              style={{
                wordWrap: "break-word",
                maxWidth: "100%",
                overflowWrap: "anywhere",
              }}
            >
              {sessionId}
            </p>
          </>
        ) : (
          <p className="text-gray-700">No session ID found in the URL.</p>
        )}
        <Link
          href="/"
          className={buttonVariants({
            size: "sm",
            className: "mt-2",
          })}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
