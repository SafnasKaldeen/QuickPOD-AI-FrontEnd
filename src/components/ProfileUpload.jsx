import React, { useState } from "react";

// Placeholder URL for default image
const defaultImage = "/images/Undefined-avatar.png";

const ProfileUpload = () => {
  const [avatarPreview, setAvatarPreview] = useState(defaultImage);
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");

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
        const { fileName } = await response.json(); // Assuming the server returns the file name after successful upload
        setUploadedFileName(fileName);
        setUploadStatus("Upload successful!");
      } else {
        setUploadStatus("Upload failed. Please try again.");
      }
    } catch (error) {
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div className="col-span-3 rounded">
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
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="avatar"
          className="relative cursor-pointer mt-4 w-full px-4 py-2 border border-gray-300 rounded text-center text-white bg-sky-900/30 hover:bg-sky-900 transition duration-300 ease-in-out"
        >
          {uploadedFileName ? uploadedFileName : "Choose File"}
        </label>
        {avatarPreview && (
          <img
            id="avatarPreview"
            src={avatarPreview}
            alt="Image Preview"
            className="w-47 h-47 rounded-full mt-4 object-cover object-center"
          />
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-sky-900 text-white rounded hover:bg-sky-700 hover:border-sky-700 transition duration-300 ease-in-out"
        >
          Upload Image
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
