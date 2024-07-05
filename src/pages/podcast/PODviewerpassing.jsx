import React, { useState, useEffect } from "react";
import AudioPlayer from "../../components/Player/AudioPlayer";
import Transcript from "../../components/Transcript.jsx";
import PageHeader from "../../components/PageHeader";
import Blog from "../../components/Blog.jsx";
import Cookies from "js-cookie"; // Import Cookies library if not already done

const YourComponent = () => {
  const [POD, setPOD] = useState(null); // State to hold the POD data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    // Function to fetch data from the API
    const fetchPOD = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/get_all_blogcasts",
          {
            headers: {
              Authorization: " Bearer " + Cookies.get("access_token"),
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("Fetched data:", data);
        console.log("Fetched data:", data.blogcasts);
        console.log("Fetched data:", data.blogcasts.length);
        if (data && data.blogcasts.length > 0) {
          // Assuming the API response returns an array of blogcasts sorted by date
          // Use the last item in the array as the latest POD
          const latestPOD = data.blogcasts[data.blogcasts.length - 1];
          console.log("Latest POD:", latestPOD);
          setPOD(latestPOD);
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        console.error("Error fetching POD:", error);
        setError(error.message); // Set error state if there's an error
      } finally {
        setLoading(false); // Set loading to false once data is fetched or on error
      }
    };

    fetchPOD(); // Call the fetch function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  useEffect(() => {
    console.log("POD state updated:", POD);
  }, [POD]);

  if (loading) {
    return <div className="m-5">Loading...</div>; // Placeholder for loading state while fetching data
  }

  if (error) {
    return <div className="m-5">Error: {error}</div>; // Display error message if fetch fails
  }

  return (
    <React.Fragment>
      {console.log("Rendering component with POD:", POD)}
      {POD.id && (
        <div id="POD">
          <div className="border-0 bg-gradient-to-b from-zinc-900 to-zinc-900/50 relative z-10 h-1/2">
            <PageHeader />
            <div className="flex flex-col items-center md:flex-row md:items-stretch gap-8 px-6">
              <div className="h-full w-full flex-none">
                <div className="h-52 w-52 flex-none">
                  <img
                    src={POD.podcast.thumbnail_url}
                    alt={POD.podcast.transcript.title}
                    className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h1 className="title-clamp font-bold block text-4xl text-white">
                      {POD.podcast.transcript.title || "Title Not Found"}
                      <span></span>
                    </h1>
                  </div>
                  <div className="flex-1 flex items-end">
                    <div className="text-sm">
                      <div className="relative space-y-8 py-3 px-3">
                        <div>
                          <p className="text-xl font-semibold text-gray-700 dark:text-blue-400 transition flex items-center gap-1 relative group font-semibold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-green-500">
                              Click to Read the Blog
                            </span>
                            <span className="transition transform group-hover:translate-x-1 group-hover:ml-2">
                              -&gt;
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/80 mt-6 flex-1 p-6 blur-100">
                  <div className="px-6 pt-4">
                    <main className="flex min-h-screen flex-col items-center gap-20 py-20 px-4 md:px-24 md:py-24">
                      <div className="flex flex-col gap-4">
                        {/* <AudioPlayer
                          title={POD.podcast?.transcript?.title}
                          src={POD.podcast?.transcript?.audio_url}
                        /> */}
                        <Transcript
                          Transcript={POD.podcast?.transcript?.content}
                        />
                      </div>
                    </main>
                  </div>
                </div>
                <div className="absolute h-screen inset-0 z-[-1] bg-gradient-to-b from-context">
                  <img
                    src={POD.blog_img_url}
                    alt={POD.title}
                    className="el-to-fade transition-all duration-500 z-[-1] absolute inset-0 mix-blend-overlay opacity-20 scale-90 w-full h-full object-cover blur-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent from-zinc-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="BLG">
        <Blog BLOG={POD} />
      </div>
    </React.Fragment>
  );
};

export default YourComponent;
