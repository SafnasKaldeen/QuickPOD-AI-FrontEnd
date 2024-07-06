import React, { useEffect, useState } from "react";
// import Layout from "../../layouts/Layout";
import PageHeader from "./PageHeader";
import AudioPlayer from "./Player/AudioPlayer";
import Transcript from "./Transcript";
import Markup from "./markup";
import Cookies from "js-cookie";

const PodcastDetail = () => {
  const [POD, setPOD] = useState(null);

  useEffect(() => {
    const fetchPODData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/get_all_blogcasts",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + Cookies.get("access_token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Fetched data:", data);
        console.log("Fetched data:", data.blogcasts[data.blogcasts.length - 1]);
        setPOD(data.blogcasts[data.blogcasts.length - 1]);
      } catch (error) {
        console.error("Error fetching the POD data:", error);
      }
    };

    fetchPODData();
  }, []);

  const handleBlogButtonClick = () => {
    if (document.getElementById("POD").classList.contains("hidden")) {
      document.getElementById("POD").classList.remove("hidden");
      document.getElementById("BLG").classList.add("hidden");
    } else {
      document.getElementById("POD").classList.toggle("hidden");
      document.getElementById("BLG").classList.toggle("hidden");
    }
  };

  const handleAudioButtonClick = () => {
    document.getElementById("POD").classList.remove("hidden");
    document.getElementById("BLG").classList.add("hidden");
  };

  if (!POD) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="p-4  rounded shadow">
          <img src="/images/loader.gif" alt="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <Layout
        image={POD?.podcast.thumbnail_url}
        title={POD?.blog.title || "404"}
      > */}
      <div
        className="relative transition-all duration-1000 bg-context h-1/2"
        style={{
          backgroundImage: `url("../components/blog_image_20240705015429.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PageHeader />
        <div className="relative z-10 px-6">
          <span>
            <h1 className="text-5xl font-bold h-80">{POD?.blog.title}</h1>
          </span>
          {/* <img
            src="/images/cover/SriLanka.webp"
            alt="Sri Lanka"
            className="h-60 w-60 object-cover"
          /> */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-sm">
              <div className="relative space-y-8 py-3 px-3">
                <div>
                  <a
                    className="text-xl font-semibold text-gray-700 dark:text-blue-400 transition flex items-center gap-1 relative group font-semibold hover:cursor-pointer"
                    id="blog-button"
                    onClick={handleBlogButtonClick}
                  >
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-green-500">
                      <span>{"BLOG <-> PODCAST"}</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 "></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div>
      </div>
      <div className="px-6 relative z-10 "></div>
      <div
        id="POD"
        className="relative transition-all duration-1000 bg-context h-1/2 opacity-100"
      >
        <div className="flex flex-col items-center md:flex-row md:items-stretch gap-8 px-6">
          <div className="flex flex-col justify-between">
            <div className="flex-1 flex items-end">
              <div className="text-sm">
                <div className="relative px-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 mt-6 flex-1 p-6">
          <div className="px-6 pt-4">
            <main className="flex min-h-screen flex-col items-center gap-20 py-20 px-4 md:px-24 md:py-24">
              <div className="flex flex-col gap-4">
                <AudioPlayer
                  title={POD?.podcast.transcript.title}
                  src="/Audio/1.mp3"
                />
              </div>
              <Transcript Transcript={POD?.podcast.transcript.content} />
            </main>
          </div>
        </div>
        <div
          className="absolute h-screen inset-0 z-[-1] bg-gradient-to-b from-white"
          style={{ "--context-color": POD?.blog.title }}
        >
          <img
            src={POD?.blog.blog_img_url}
            alt={POD?.blog.title}
            className="el-to-fade transition-all duration-500 z-[-1] absolute inset-0 mix-blend-overlay opacity-20 scale-90 w-full h-full object-cover blur-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t via-transparent from-zinc-900"></div>
        </div>
      </div>

      <div className="px-6 relative z-10 mt-4 hidden" id="BLG">
        <div className="flex flex-wrap mt-6 gap-4">
          <Markup markdownContent={POD?.blog.markdown} />
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
