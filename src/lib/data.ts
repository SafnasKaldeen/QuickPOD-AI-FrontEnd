import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Sports Mix",
    color: colors.teal,
    cover:
      "https://th.bing.com/th/id/OIP.5VLOnRewEtg11UoxhT1e8wHaE8?rs=1&pid=ImgDetMain",
    artists: ["Avicii", "Alok"],
  },
  {
    id: "2",
    title: "Politics Mix",
    color: colors.green,
    cover:
      "https://th.bing.com/th/id/R.137c177d001d771a6f55006ebd5e479b?rik=uR9imyvgd2kxOg&pid=ImgRaw&r=0",
    artists: ["Tiesto", "Armin Van Buuren"],
  },
  {
    id: "3",
    title: "Business Mix",
    color: colors.rose,
    cover:
      "https://th.bing.com/th/id/R.66740679ff58c398154c59a00de8fd88?rik=FcPo70d3kfj8Lw&riu=http%3a%2f%2fwilcostrategy.com%2fwp-content%2fuploads%2f2016%2f08%2fimage25.jpg&ehk=p0DPLsYING4A%2f2mKrjGoAWDMXapM2FV0yusmLODGNt0%3d&risl=&pid=ImgRaw&r=0",
    artists: ["Post Malone", "Travis Scott", "21 savage"],
  },
  {
    id: "4",
    title: "Tech Mix",
    color: colors.red,
    cover:
      "https://th.bing.com/th/id/R.6fd3b2549cf1f0bda36b71c42e8d3cd7?rik=L%2fCYIiqulbxToQ&riu=http%3a%2f%2fusdailyreview.com%2fwp-content%2fuploads%2f2014%2f08%2ftechnology.jpg&ehk=dzaRzyft3FDapcPTuIGU6nF%2b2zznUv5dDXCjidMhVMA%3d&risl=&pid=ImgRaw&r=0",
    artists: ["The Beatles"],
  },
  {
    id: "5",
    title: "Korean Mix",
    color: colors.pink,
    cover:
      "https://th.bing.com/th/id/R.fb48ee0e821849456eaffb29a7cc7a47?rik=ov%2f12k7pvgAndg&pid=ImgRaw&r=0",
    artists: ["Deadmau5"],
  },
  {
    id: "6",
    title: "Music Mix",
    color: colors.gray,
    cover:
      "https://images8.alphacoders.com/286/thumb-1920-286149.jpg",
    artists: ["Saint Hilda", "Canada Buffalo"],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "The Nights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    title: "Saint-Tropez",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
    artists: ["Post Malone"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    title: "SICKO MODE",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
    artists: ["Travis Scott", "Drake"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    title: "Blinding Lights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
    artists: ["The Weeknd"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    title: "Shape of You",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_5_rd5xqa.jpg`,
    artists: ["Ed Sheeran"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    title: "Uptown Funk",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_6_f1lt7y.jpg`,
    artists: ["Mark Ronson", "Bruno Mars"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "Bad Guy",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_7_m7f0mh.jpg`,
    artists: ["Billie Eilish"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "Yesterday",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_8_hwxisr.jpg`,
    artists: ["The Beatles"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    title: "Havana",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_9_szemzp.jpg`,
    artists: ["Camila Cabello", "Young Thug"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    title: "Radioactive",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_10_sz0cib.jpg`,
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:07",
  },
];
