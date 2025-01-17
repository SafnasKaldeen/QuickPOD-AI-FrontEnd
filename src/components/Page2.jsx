import PageHeader from "../components/PageHeader.jsx";
// import Layout from "../layouts/Layout.jsx";
import Markup from "../components/markup.jsx";
import React from "react";

const Blog = `# Overview of Sri Lankan Cricket

## Introduction

Sri Lankan cricket is a rich tapestry of talent, passion, and historical significance. From its inception influenced by British colonialism to its rise as a powerhouse in international cricket, Sri Lanka's cricketing journey is marked by triumphs, challenges, and enduring legacy.

## Key Aspects of Sri Lankan Cricket

### 1. Historical Significance

- _Founding Years:_ Sri Lanka's cricketing roots date back to the late 19th century when the sport was introduced by the British. It quickly gained popularity among the local elite and spread across the island.
- _Test Status:_ Sri Lanka gained Test status in 1981, a significant milestone in its cricketing history. Since then, Sri Lanka has become a formidable competitor in international cricket.

### 2. Achievements and Milestones

- _1996 World Cup Victory:_ Sri Lanka's crowning achievement came in 1996 when they clinched the ICC Cricket World Cup under the captaincy of Arjuna Ranatunga. This victory brought glory to the nation and put Sri Lankan cricket on the global map.
- _Legendary Players:_ Sri Lanka has produced legendary cricketers who have left an indelible mark on the sport. Players like Sanath Jayasuriya, Muttiah Muralitharan, Kumar Sangakkara, and Mahela Jayawardene are celebrated for their skill and contributions to the game.
- _World Record Holder:_ Muttiah Muralitharan, Sri Lanka's spin wizard, holds the world record for the most wickets in both Test and One-Day International cricket, showcasing Sri Lanka's prowess in bowling talent.

### 3. Talent Development and Domestic Structure

- _Domestic Competitions:_ Sri Lanka Cricket (SLC) oversees a robust domestic cricket structure comprising first-class tournaments, limited-overs competitions, and age-group leagues. This setup provides a fertile ground for nurturing young talent.
- _Emerging Stars:_ Sri Lanka consistently produces promising cricketers who transition from domestic success to international stardom. Lasith Malinga, Angelo Mathews, Dinesh Chandimal, and Dimuth Karunaratne are recent examples of emerging talents.

### 4. Challenges and Considerations

#### Sustainability and Development

Maintaining consistent performance and developing infrastructure are ongoing challenges for Sri Lankan cricket. Investments in coaching, facilities, and grassroots development are crucial for sustaining competitiveness.

#### Fan Engagement and Support

Cricket holds a special place in Sri Lankan culture, with passionate fans supporting their team fervently through victories and setbacks. Enhancing fan engagement, stadium experiences, and grassroots participation is vital for fostering a robust cricketing culture.

### 5. International Tournaments and Series

- _Asia Cup Success:_ Sri Lanka has enjoyed success in the Asia Cup, winning multiple titles and showcasing their dominance in the region.
- _Series Triumphs:_ Sri Lanka has defeated top cricketing nations in memorable Test and ODI series, demonstrating their ability to compete at the highest level of international cricket.

### 6. Contributions to World Cricket

- _Innovative Batting Styles:_ Sri Lankan batsmen are known for their innovative stroke play and adaptability to different conditions, influencing modern batting techniques.
- _Spin Bowling Legacy:_ Sri Lanka's mastery in spin bowling, epitomized by Muralitharan and others, has shaped strategies and tactics in international cricket.

### 7. Future Outlook

Sri Lankan cricket faces the challenge of preserving its rich cricketing heritage while adapting to modern trends and global competition. Strategic planning, youth development programs, and embracing technological advancements will be pivotal in shaping its future trajectory.

# Conclusion

Sri Lankan cricket continues to captivate audiences worldwide with its flair, resilience, and deep-rooted passion. As it navigates the complexities of modern cricket, Sri Lanka remains committed to upholding its legacy and achieving new milestones on the global stage.

## Sources

1. [History of Sri Lankan Cricket](https://example.com/sri-lanka-cricket-history)
2. [Sri Lanka's Impact on World Cricket](https://example.com/sri-lanka-cricket-impact)
3. [Challenges in Sri Lankan Cricket](https://example.com/sri-lanka-cricket-challenges)
4. [Future Trends in Sri Lankan Cricket](https://example.com/sri-lanka-cricket-future)
5. [Role of Domestic Cricket in Sri Lanka](https://example.com/sri-lanka-domestic-cricket)
`;

const BlogPage = () => (
  <React.Fragment>
    <div
      id="playlist-container"
      className="relative transition-all duration-1000 bg-context h-1/2"
      style={{
        backgroundImage: "url('/images/cover/SriLanka.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <PageHeader />
      <div className="relative z-10 px-6">
        <span>
          <h1 className="text-9xl font-bold">Cricket</h1>
        </span>
        <div className="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6">
          {/* Any additional content grid items can be added here */}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div>
    </div>
    <div className="px-6 relative z-10 mt-4">
      <div className="flex flex-wrap mt-6 gap-4">
        <Markup clientLoad markdownContent={Blog} />
      </div>
    </div>
  </React.Fragment>
);

export default BlogPage;
