"use client";

export default function DownloadDataButton({ onDownload }: any) {
  return (
    <button
      onClick={onDownload}
      className="w-full bg-[#38BDF8] text-black font-bold p-2 rounded hover:opacity-80"
    >
      Download Filtered Data
    </button>
  );
}