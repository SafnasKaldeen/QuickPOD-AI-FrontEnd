import React, { useState } from "react";

const ProfileUpload = () => {
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/Undefined-avatar.png"
  );
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/upload-avatar", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Upload successful!");
      } else {
        setUploadStatus("Upload failed. Please try again.");
      }
    } catch (error) {
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div className="col-span-3 border border-gray-300 rounded p-4">
      <h1 className="text-3xl font-bold text-center text-gray-200">
        Select your Profile Image
      </h1>
      <form
        id="avatarForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col items-center"
      >
        <input
          type="file"
          id="avatar"
          name="avatar"
          className="form-input w-full px-4 py-2 mt-4 border border-gray-300 rounded text-white bg-sky-900/30"
          onChange={handleFileChange}
        />
        {avatarPreview && (
          <img
            id="avatarPreview"
            src={avatarPreview}
            alt="Image Preview"
            className="w-40 h-40 rounded-full mt-4 object-cover object-center"
          />
        )}
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 rounded">
          Upload
        </button>
        <p
          id="uploadStatus"
          className={`mt-2 text-center ${
            uploadStatus === "Upload successful!"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {uploadStatus}
        </p>
      </form>
    </div>
  );
};

export default ProfileUpload;
