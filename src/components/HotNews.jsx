import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard.jsx";

const morePlaylists = [
  {
    id: 1,
    title:
      "Switzerland vs Italy LIVE: Watch Euro 2024 football stream, score, commentary, line-ups & updates",
    link: "https://www.bbc.com/sport/football/live/ce781j4kxy0t",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SyBP10-2ItQ-VaMQ950j9OJYjDaWr4Pn2viUj-XcHwrchzXz20Y8URvX1g&s",
  },
  {
    id: 2,
    title: "Jamal Musiala: From England youngster to Germany star",
    link: "https://www.bbc.com/sport/football/articles/c1ee5ejwle8o",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_wfHQQMTqz1L0TTx2DjYZpy48oljHvjv6tlIeJRfLSrOQWycM5NKsW8gkA&s",
  },
  {
    id: 3,
    title: "Ian Maatsen: Aston Villa sign defender from Chelsea",
    link: "https://www.bbc.com/sport/football/articles/ceqd09exwqqo",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwkw1WGNe0nfyGs4eXmUSoEF1Z7gJ_FB2RsgXs7p9Zm5uJjb6dHGngBhlLg&s",
  },
  {
    id: 4,
    title: "Latest football news, rumours and gossip | Football News",
    link: "https://www.skysports.com/football/live-blog/11095/12507208/latest-football-news-rumours-and-gossip",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWlUeSCx1EkpjTY7y-HFenJz6l0w9PxEB0DXk1XE2leUUfloe9HW_SearrA&s",
  },
  {
    id: 5,
    title: "Deloitte Football Money League 2024",
    link: "https://www.deloitte.com/uk/en/services/financial-advisory/analysis/deloitte-football-money-league.html",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszEYq_OKkXPYJ1HGbISdhK8uCcDS3Xmbgz1Isb8dJdyEggPBQ9wS5aYfKew&s",
  },
  {
    id: 6,
    title:
      "Arsenal transfer news: Gunners look to convince Newcastle to make Guimaraes sale with player-plus-cash deal ...",
    link: "https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2024/06/arsenal-transfer-news-gunners-ook-to-convince-newcastle-to-make-guimaraes-sale-with-player-plus-cash-deal",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduscVJ4pdHRkSOhDfLvzW8lRgQHtQSKqdYe_k8FGb1i9X8MCWY5EOdxvEBg&s",
  },
  {
    id: 7,
    title:
      "LIVE: India vs South Africa – ICC T20 World Cup 2024 final | Cricket News",
    link: "https://www.aljazeera.com/sports/liveblog/2024/6/29/live-south-africa-vs-india-icc-t20-world-cup-2024-final",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 8,
    title:
      "India vs South Africa Live Score, T20 World Cup 2024 Final: India defeat SA by 7 runs to win T20 WC title for 2nd time, end 11-year ICC trophy drought",
    link: "https://indianexpress.com/article/sports/cricket/india-vs-south-africa-live-score-t20-world-cup-2024-final-match-55-today-ind-vs-sa-latest-scorecard-updates-9422139/",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 9,
    title:
      "Ind vs SA Highlights, T20 World Cup 2024 Final: We Are The Champions - Rohit Sharma's Team India Wins T20 WC After 17 Years",
    link: "https://sports.ndtv.com/t20-world-cup-2024/ind-vs-sa-final-live-cricket-score-t20-world-cup-2024-india-vs-south-africa-live-score-and-commentary-29-june-5994843",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 10,
    title:
      "India vs. South Africa Cricket World Cup Final Livestream: How to Watch the T20 Match Online Free",
    link: "https://variety.com/2024/shopping/athletes/india-vs-south-africa-cricket-world-cup-live-stream-t20-final-online-free-1236055825/",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 11,
    title:
      "India seal T20 World Cup glory after epic duel against South Africa",
    link: "https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/live-india-and-south-africa-face-off-in-t20-world-cup-final",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 12,
    title:
      "T20 Cricket World Cup Final Livestream: How to Watch India vs. South Africa From Anywhere",
    link: "https://www.cnet.com/tech/services-and-software/t20-cricket-world-cup-final-livestream-how-to-watch-india-vs-south-africa-from-anywhere/",
    imageUrl: "https://placehold.co/400",
  },
  {
    id: 13,
    title:
      "Poll: 66% of Israelis want Netanyahu to leave politics, 85% support Oct. 7 probe",
    link: "https://www.timesofisrael.com/poll-66-of-israelis-want-netanyahu-to-leave-politics-85-support-oct-7-probe/",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHD-zDcGF_bjg_8Dh-1LX7jVbrRErT0i60IfWF8hud5UA7xIgOA-dYd47dA&s",
  },
  {
    id: 14,
    title:
      "Remembering the ‘Stronismo’: How ghost of a brutal dictator haunts Paraguay",
    link: "https://www.aljazeera.com/features/2024/6/29/remembering-the-stronismo-how-ghost-of-a-brutal-dictator-haunts-paraguay",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-LPinOvCLtHHWeyp1eb5chJpTBCQSKTlYnfUEBDujufj1kSOOf1W1c3SAw&s",
  },
  {
    id: 15,
    title:
      "Foreign diplomats react with horror to Biden’s dismal debate performance",
    link: "https://www.cnn.com/2024/06/28/politics/foreign-diplomats-biden-debate-reaction/index.html",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFV3cV1yS_S12MYwThBmvJBdhjGU2Tz9Xif7N_2aUo1zyz0r1qorGsYt9NEA&s",
  },
  {
    id: 16,
    title:
      "People not voting in general election blame distrust in politicians",
    link: "https://www.bbc.com/news/articles/c28ed9j2d28o",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhw80X-qYrwoxY1hJ-2RBj8isoJLwkYBe8EFVoFCHP7ABkGcK5hD8h2d5dg&s",
  },
  {
    id: 17,
    title: "Glastonbury: How politics accompanies the music of the festival",
    link: "https://news.sky.com/story/glastonbury-how-politics-accompanies-the-music-of-the-festival-13160970",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndoqlE03oIHVH_5cdXUoXjr8qqcBEk89CYdnMDFPRhWee9-gm4ivhO0evZQ&s",
  },
  {
    id: 18,
    title: "Ron DeSantis’s Campaign is Floundering: Here’s Why",
    link: "https://www.vox.com/policy/2024/6/28/ron-desantis-campaign-floundering",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSda-jBYayuzXkoMiOjq2zcm8y7F9n5Vds4LJwClXNeQJ1QUtk6-rV_Y4mTvlg&s",
  },
];

const Interests = [
  "Sports",
  "Politics",
  "Music",
  "Technology",
  "Science",
  "Health",
];

class HotNews extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="px-6 relative z-10 mt-4">
          <h2 class="text-2xl font-bold">
            Select the Hot News to generate Blogcasts
          </h2>
          <div class="flex flex-wrap mt-6 gap-4">
            {morePlaylists.map((song) => (
              <PlaylistCard
                song={song}
                client:load
                id={song.id}
                key={song.id}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HotNews;
