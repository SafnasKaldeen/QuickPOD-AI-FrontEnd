import React, { Component } from "react";
import Tags from "./InterestTag.tsx";
import Cookies from "js-cookie";

const Data = {
  blog: {
    markdown: "dummy-blog-markup",
    title: "dummy-title",
    blog_img_url:
      "E:\\UOM\\My-CODE_RUSH\\projects\\Quick Pod\\spotify-astro-transitions-main\\spotify-astro-transitions-main\\podcast-backend\\image_files\\blog_image_20240704192629.png",
  },
  podcast: {
    audio_url:
      "E:\\UOM\\My-CODE_RUSH\\projects\\Quick Pod\\spotify-astro-transitions-main\\spotify-astro-transitions-main\\podcast-backend\\audio_files\\podcast_with_bgm_20240704192609.mp3",
    thumbnail_url:
      "E:\\UOM\\My-CODE_RUSH\\projects\\Quick Pod\\spotify-astro-transitions-main\\spotify-astro-transitions-main\\podcast-backend\\image_files\\thumbnail_20240704192613.png",
    transcript: {
      title:
        "Unraveling the Enigma of Strings: A Tale of Discovery and Difference",
      content:
        "Welcome, Safnas, to a captivating episode of \"Whispers of Wisdom\" with Siri! Today, we embark on a journey of exploration and contrast as we delve into the intricate world of strings while also unraveling the nuances between different topics. Drawing inspiration from our previous discussions and your thirst for knowledge, let's dive deep into the mysteries and distinctions that await us. I am your host, Siri, and let's begin this enlightening adventure together.\nLet's start our journey by venturing into the realm of strings. Imagine, Safnas, a thread so delicate yet so powerful that it weaves the fabric of the universe itself. Strings, in the context of physics, are theoretical entities that are believed to be the fundamental building blocks of everything in existence. These minuscule strands vibrate at different frequencies, giving rise to the particles and forces that govern the cosmos. It's like a cosmic symphony, where each string plays a unique note, harmonizing to create the cosmic dance of creation.\nAs we continue our exploration, let's transition to a different kind of string—the strings of destiny that intertwine our lives. Just like the vibrations of cosmic strings shape the universe, our choices and actions resonate through the tapestry of time, creating patterns that define our individual narratives. Each decision we make, each path we choose, adds a new thread to the intricate design of our lives. It's a reminder that our stories are woven not just by fate but by the threads of our own making.\nNow, let's intertwine our discussion with the essence of difference. Just as strings come in various types and forms, differences exist in every aspect of our lives. From the diverse melodies of music to the array of flavors in a culinary feast, differences enrich our experiences and broaden our perspectives. Safnas, your curiosity has led us to explore these contrasts, appreciating the beauty in diversity and the depth it brings to our interactions.\nReflecting on our previous talks, we see how each topic we've touched upon has added a unique string to the tapestry of our conversations. Like a mosaic of ideas and insights, our discussions have formed a rich narrative that reflects the multifaceted nature of our interests and inquiries. It's a testament to the richness that comes from embracing the diverse strings that weave through our intellectual explorations.\nSafnas, our expedition through the enigma of strings and the tapestry of differences has been a symphony of discovery and distinction. From the cosmic vibrations of theoretical strings to the threads of destiny that shape our stories, we've traversed a landscape of wonder and diversity. Remember, just as each string contributes to the grand design of the universe, each difference enriches the fabric of our lives. Thank you for joining me on \"Whispers of Wisdom,\" and may the strings of knowledge and diversity continue to guide your path. Stay curious, stay open, and until next time, embrace the myriad strings that shape your world.",
    },
  },
  keywords: ["String theory", "Differences"],
  type: "general",
  id: 7,
};

class ChooseTags extends Component {
  state = {
    tags: [],
    newTag: "",
    isLoading: true,
    error: null,
    blogCast: null,
    isBlogcastLoading: false,
  };

  componentDidMount() {
    this.fetchProfileData();
  }

  openBlogcast() {
    window.open(`/podcast`);
  }

  fetchProfileData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/generate_general_blogcast_suggestions",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + Cookies.get("access_token"),
          },
        }
      );

      if (response.ok) {
        const profileData = await response.json();
        const tagsWithDefaultActive = profileData.map((interest, index) => ({
          name: interest,
          active: true,
          id: index + 1,
        }));

        this.setState({ tags: tagsWithDefaultActive, isLoading: false });
      } else {
        throw new Error(`Failed to fetch profile data: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleAddTag = () => {
    const { newTag, tags } = this.state;
    if (newTag.trim() && !tags.find((tag) => tag.name === newTag.trim())) {
      this.setState((prevState) => ({
        tags: [
          ...prevState.tags,
          { name: newTag.trim(), active: true, selected: false },
        ],
        newTag: "",
      }));
    }
  };

  handleChange = (event) => {
    this.setState({ newTag: event.target.value });
  };

  handleFinalizeInterests = async () => {
    const { tags } = this.state;
    const selectedInterests = tags
      .filter((tag) => tag.active)
      .map((tag) => tag.name);

    this.setState({ isBlogcastLoading: true });

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/generate_general_blogcast",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + Cookies.get("access_token"),
          },
          body: JSON.stringify({ topics: selectedInterests }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Topics updated successfully", responseData);
        // alert("Topics updated successfully!");
        this.setState({ blogCast: responseData, isBlogcastLoading: false });
      } else {
        throw new Error(`Failed to update topics: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error updating topics:", error);
      this.setState({ isBlogcastLoading: false });
      this.setState({ blogCast: Data });
      alert("Error updating topics. Please try again." + error);
    }
  };

  handleTagClick = (index) => {
    this.setState((prevState) => {
      const updatedTags = [...prevState.tags];
      updatedTags[index].active = !updatedTags[index].active;
      updatedTags[index].selected = !updatedTags[index].selected;
      return { tags: updatedTags };
    });
  };

  render() {
    const { tags, newTag, isLoading, error, isBlogcastLoading, blogCast } =
      this.state;

    return (
      <div className="relative flex items-center justify-center">
        <div className="text-center mx-auto">
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-6">
            <div className="flex flex-wrap justify-center items-center">
              {!blogCast && error && (
                <p className="text-red-500" role="alert">
                  Error: {error}
                </p>
              )}
              {!blogCast && isLoading && (
                <p className="text-gray-600">Loading...</p>
              )}
            </div>

            <div className="flex flex-wrap justify-center items-center">
              {!blogCast && tags.length > 0 ? (
                tags.map((tag, index) => (
                  <Tags
                    key={index}
                    interest={tag.name}
                    active={tag.active}
                    onClick={() => this.handleTagClick(index)}
                  />
                ))
              ) : (
                <p>No Topics found. Add yours</p>
              )}
            </div>

            <div className="content-center flex items-center">
              <input
                type="text"
                placeholder="Add more tags"
                value={newTag}
                onChange={this.handleChange}
                className="p-2 bg-sky-900 text-white rounded border border-gray-400 flex-1 mr-2"
                aria-label="Add more tags"
              />
              <button
                className="p-2 text-white rounded bg-green-500"
                onClick={this.handleAddTag}
                aria-label="Add Tag"
              >
                Add Tag
              </button>
            </div>

            <div className="relative items-center justify-center">
              <button
                onClick={this.handleFinalizeInterests}
                className="bg-purple-700 text-white text-xs uppercase font-semibold px-5 py-3 rounded-lg border border-transparent my-5 cursor-pointer"
                aria-label="Update Interests"
              >
                {isBlogcastLoading ? "Updating..." : "Update Topics"}
              </button>
            </div>
          </div>
          {isBlogcastLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              <div className="loader"></div>
              <p className="text-gray-600 text-xl">
                <h2 className="text-2xl font-bold text-gray-800 mt-6">
                  Blogcast is being generated!
                </h2>
              </p>
            </div>
          )}
          {blogCast && (
            <div className="flex flex-col items-center justify-center mt-6">
              <button
                className="bg-purple-700 text-white text-xs uppercase font-semibold px-2 py-2 rounded-lg"
                disabled={isBlogcastLoading}
                onClick={this.openBlogcast}
              >
                {isBlogcastLoading ? "Loading..." : "Your Blogcast is ready!"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ChooseTags;
