"use client";

import { FileUpload } from "@/components/ui/file-upload";
import React, { useState } from "react";

const UploadPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="flex items-center w-full h-screen overflow-hidden border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
};

export default UploadPage;
