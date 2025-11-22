import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const Download = React.memo(
  React.forwardRef(({ url, children, className = "", ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDownload = useCallback(async () => {
      if (!url) {
        setError("Download URL is missing");
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Download failed: ${response.status} ${response.statusText}`
          );
        }

        const blob = await response.blob();
        const contentDisposition = response.headers.get("content-disposition");
        const filename = contentDisposition
          ? contentDisposition.split("filename=")[1]?.replace(/"/g, "")
          : "download.xlsx";

        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      } catch (err) {
        setError(err.message);
        console.error("Download error:", err);
      } finally {
        setIsLoading(false);
      }
    }, [url]);

    const buttonClasses = `px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${className}`;
    return (
      <div>
        <motion.button
          ref={ref}
          onClick={handleDownload}
          disabled={isLoading}
          className={buttonClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          aria-label={isLoading ? "Downloading file" : `Download ${children}`}
          {...props}
        >
          {isLoading ? "Downloading..." : children}
        </motion.button>

        {error && (
          <div className="mt-1 text-xs text-red-600 max-w-xs">{error}</div>
        )}
      </div>
    );
  })
);

// API URLs
const queryapi = "http://localhost:8787/download/contact";
const memberapi = "http://localhost:8787/download/member";
const athleteapi = "http://localhost:8787/download/athlete";
const coachapi = "http://localhost:8787/download/coach";

export const QuerySheet = React.memo(() => (
  <Download url={queryapi}>Download Contacts</Download>
));

export const MemberSheet = React.memo(() => (
  <Download url={memberapi}>Download Members</Download>
));

export const AthleteSheet = React.memo(() => (
  <Download url={athleteapi}>Download Athletes</Download>
));

export const CoachSheet = React.memo(() => (
  <Download url={coachapi}>Download Coaches</Download>
));

// Compact Versions
export const CompactQuerySheet = React.memo(() => (
  <Download url={queryapi} className="px-2 py-1 text-xs">
    Contacts
  </Download>
));

export const CompactMemberSheet = React.memo(() => (
  <Download url={memberapi} className="px-2 py-1 text-xs">
    Members
  </Download>
));

export const CompactAthleteSheet = React.memo(() => (
  <Download url={athleteapi} className="px-2 py-1 text-xs">
    Athletes
  </Download>
));

export const CompactCoachSheet = React.memo(() => (
  <Download url={coachapi} className="px-2 py-1 text-xs">
    Coaches
  </Download>
));