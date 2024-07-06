import React, { useState, useEffect } from "react";
import PlaylistCardSide from "./PlaylistCardSide";
import Cookies from "js-cookie";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/generate_hot_news",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + Cookies.get("access_token"),
            },
            body: JSON.stringify({}), // Adjust body content if necessary
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.detail || "Network response was not ok");
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Fetched data:", data);
        setNews(data.hot_news); // Assuming data.hot_news is the correct structure
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      {loading ? (
        <img src="/images/03-42-11-849_512.webp" alt="Loading..." />
      ) : error ? (
        <p className="m-5 text-red-500">{error}</p>
      ) : (
        <React.Fragment>
          <div className="news-list">
            {news.length === 0 && (
              <p className="m-5 text-red-500">No Hot News and Artices</p>
            )}
            {news.map((item) => (
              <PlaylistCardSide key={item.id} song={item} />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default NewsFeed;
