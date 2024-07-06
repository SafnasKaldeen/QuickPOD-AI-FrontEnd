import React from "react";
import ReactMarkdown from "react-markdown";

const BLOG = `# Semi Finals BLOG
## The Road to the Semi-Finals: Team Scenarios Unfold

As the ICC Men's T20 World Cup 2024 heads into its final stages, the competition intensifies with only four matches remaining in the Super Eight stage. Intriguingly, all eight teams still have chances to clinch a spot in the semi-finals.

In *Group 1*, India leads with four points and a strong net run rate. A win against Australia would secure their semi-final berth. Meanwhile, Australia, Afghanistan, and Bangladesh remain in the hunt, each requiring specific results and positive net run rates to advance.

In *Group 2*, South Africa tops the group with four points. A victory against the West Indies would guarantee their place in the semi-finals. The West Indies, England, and the USA are still vying for a spot, each dependent on various match outcomes and bolstered performances [source](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/t20-world-cup-state-of-play-all-the-scenarios-and-every-side-s-path-to-super-eight).

## Afghanistan's Inspirational Triumph

Afghanistan's cricketing journey reached new heights with a historical victory against Australia in the Super Eight stage. This landmark win, driven by Gulbadin Naib's exceptional four-wicket haul, marked Afghanistan's first triumph over the former champions. Captain Rashid Khan lauded the team's strategic brilliance and emphasized that this victory is only the beginning. As they prepare to face Bangladesh, Afghanistan's determination to make the semi-finals remains resolute [source](https://marksmendaily.com/2024/06/25/afghanistans-historic-triumph-defying-odds-to-reach-t20-world-cup-semis-sending-australia-packing/).

## Pat Cummins’ Record-Breaking Hat-Tricks

Australia's pace sensation Pat Cummins delivered a remarkable feat by securing back-to-back hat-tricks in consecutive matches. Cummins achieved this rare milestone against Bangladesh and Afghanistan, thus joining an elite group of bowlers like Brett Lee and Kagiso Rabada. This exceptional performance not only highlights Cummins' prowess but also solidifies his legacy in T20 cricket history [source](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/pat-cummins-joins-exclusive-group-with-t20-world-cup-hat-trick).

## USA’s Determined Challenge

USA’s stand-in captain Aaron Jones is set on finishing the tournament on a high note as they prepare to face England. Despite a challenging position in the Super Eights, Jones expressed pride in their previous victories and emphasized the rising prominence of associate cricket. The USA aims to defy expectations and secure a significant win against the defending champions [source](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/jones-ready-for-england-challenge-as-usa-eye-a-positive-end).

## Hardik Pandya Silences Critics

India's dynamic all-rounder Hardik Pandya rebounded with a scintillating performance against Bangladesh. Pandya's explosive 27-ball fifty, his first in a year and a half, showcased his immense potential and silenced critics. This innings underscores the critical role of impactful batting in T20 cricket, boosting India's campaign in the tournament [source](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/live-india-face-bangladesh-in-crucial-super-eights-clash).

---

### Sources:
- [T20 World Cup Semi-Final Scenarios](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/t20-world-cup-state-of-play-all-the-scenarios-and-every-side-s-path-to-super-eight)
- [Afghanistan's Historic Triumph](https://marksmendaily.com/2024/06/25/afghanistans-historic-triumph-defying-odds-to-reach-t20-world-cup-semis-sending-australia-packing/)
- [Cummins' Hat-Trick Record](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/pat-cummins-joins-exclusive-group-with-t20-world-cup-hat-trick)
- [USA's Challenge Against England](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/jones-ready-for-england-challenge-as-usa-eye-a-positive-end)
- [Hardik Pandya's Explosive Innings](https://www.icc-cricket.com/tournaments/t20cricketworldcup/news/live-india-face-bangladesh-in-crucial-super-eights-clash)

*Created on: 23.06.2024*`;

const MarkupComponent = ({ markdownContent }) => {
  return (
    <div className="markup-container mb-10">
      {/* {markdownContent} */}
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                margin: "1.5rem 0",
                color: "skyblue",
                fontFamily: "fantasy",
                borderBottom: "2px solid skyblue",
                // textShadow:
                //   "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
              }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                margin: "1.3rem 0",
                color: "skyblue",
                fontFamily: "serif",
              }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              style={{
                fontSize: "2.3rem",
                fontWeight: "bold",
                margin: "1.1rem 0",
                color: "#ff7e33",
                fontFamily: "cursive",
              }}
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                margin: "0.9rem 0",
                color: "lightgreen",
                fontFamily: "initial",
              }}
              {...props}
            />
          ),
          h5: ({ node, ...props }) => (
            <h5
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                margin: "0.7rem 0",
                color: "slateblue",
              }}
              {...props}
            />
          ),
          h6: ({ node, ...props }) => (
            <h6
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                margin: "0.5rem 0",
                color: "salmon",
              }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{
                color: "skyblue",
                textDecoration: "underline",
                target: "_blank",
              }}
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li
              style={{
                margin: "0.7rem 0",
                listStyle: "circle",
                marginLeft: "2rem",
              }}
              {...props}
            />
          ),
          em: ({ node, ...props }) => (
            <em
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
              }}
              {...props}
            />
          ),
        }}
      >
        {BLOG}
      </ReactMarkdown>
    </div>
  );
};

export default MarkupComponent;
