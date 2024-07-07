import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import AudioPlayer from "./Player/AudioPlayer";
import Transcript from "./Transcript";
import Markup from "./markup";
import Cookies from "js-cookie";

const PodcastDetail = () => {
  const [POD, setPOD] = useState(null);
  const [isPodcastView, setIsPodcastView] = useState(true); // Track current view

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

        const processedData = data.blogcasts.map((blogcast) => ({
          ...blogcast,
          blog: {
            ...blogcast.blog,
            blog_img_url: blogcast.blog.blog_img_url.replace(
              "E:\\UOM\\My-CODE_RUSH\\projects\\Quick Pod\\spotify-astro-transitions-main\\spotify-astro-transitions-main\\podcast-frontend\\public",
              ""
            ),
          },
        }));

        setPOD(
          processedData[Cookies.get("id")] ||
            processedData[processedData.length - 1]
        );
      } catch (error) {
        console.error("Error fetching the POD data:", error);
      }
    };

    fetchPODData();
  }, []);

  const handleToggleClick = () => {
    const podElement = document.getElementById("POD");
    const blogElement = document.getElementById("BLG");

    if (podElement && blogElement) {
      podElement.classList.toggle("hidden");
      blogElement.classList.toggle("hidden");
      setIsPodcastView(!isPodcastView); // Toggle view state
    }
  };

  if (!POD) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="p-4 rounded shadow">
          <img src="/images/loader.gif" alt="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative transition-all duration-1000 bg-context h-1/2"
        style={{
          backgroundImage: `url("/${POD?.blog.blog_img_url
            .replace(/\\/g, "/")
            .replace(
              "E://UOM//My-CODE_RUSH//projects//Quick Pod//spotify-astro-transitions-main//spotify-astro-transitions-main//podcast-frontend//public//",
              ""
            )
            .replace(
              "E:/UOM/My-CODE_RUSH/projects/Quick Pod/spotify-astro-transitions-main/spotify-astro-transitions-main/podcast-backend/",
              ""
            )}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PageHeader />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold h-80">{POD?.blog.title}</h1>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-sm">
              <div className="relative space-y-8 py-3 px-3">
                <div>
                  <button
                    className="px-4 py-2 mb-6 bg-primary text-black rounded-md hover:bg-primary/70 transition duration-300"
                    onClick={handleToggleClick}
                    aria-label="Toggle View"
                  >
                    {isPodcastView ? "BLOG" : "PODCAST"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div>
      </div>

      <div
        id="POD"
        className="relative transition-all duration-1000 bg-context h-1/2 opacity-100"
      >
        <div className="flex flex-col items-center md:flex-row md:items-stretch gap-8 px-6">
          {/* Additional podcast details */}
        </div>

        <div className="bg-black flex-1 p-6">
          <div className="px-6 pt-4">
            <main className="flex min-h-screen flex-col items-center gap-20 py-20 px-4 md:px-24 md:py-24">
              <div className="flex flex-col gap-4">
                <AudioPlayer
                  title={POD?.podcast.transcript.title}
                  src={
                    "/" +
                    POD?.podcast.audio_url
                      .replace(/\\/g, "/")
                      .replace(
                        "E://UOM//My-CODE_RUSH//projects//Quick Pod//spotify-astro-transitions-main//spotify-astro-transitions-main//podcast-frontend//public//",
                        ""
                      )
                  }
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
            src={POD?.blog.blog_img_url
              .replace(/\\/g, "/")
              .replace(
                "E://UOM//My-CODE_RUSH//projects//Quick Pod//spotify-astro-transitions-main//spotify-astro-transitions-main//podcast-frontend//public//",
                ""
              )
              .replace(
                "E:/UOM/My-CODE_RUSH/projects/Quick Pod/spotify-astro-transitions-main/spotify-astro-transitions-main/podcast-backend/",
                ""
              )}
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
