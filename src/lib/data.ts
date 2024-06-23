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
    artists: ["Football", "Cricket", "Basketball", "MMA", "WWE"]
  },
  {
    id: "2",
    title: "Political Mix",
    color: colors.green,
    cover:
      "https://th.bing.com/th/id/R.137c177d001d771a6f55006ebd5e479b?rik=uR9imyvgd2kxOg&pid=ImgRaw&r=0",
    artists: ["Sri Lanka", "India", "USA", "UK", "Palestine"],
  },
  {
    id: "3",
    title: "Business Mix",
    color: colors.blue,
    cover:
      "https://th.bing.com/th/id/R.66740679ff58c398154c59a00de8fd88?rik=FcPo70d3kfj8Lw&riu=http%3a%2f%2fwilcostrategy.com%2fwp-content%2fuploads%2f2016%2f08%2fimage25.jpg&ehk=p0DPLsYING4A%2f2mKrjGoAWDMXapM2FV0yusmLODGNt0%3d&risl=&pid=ImgRaw&r=0",
    artists: ["Crypto", "Stocks", "Gold", "Economy", "Fuel"],
  },
  {
    id: "4",
    title: "Tech Mix",
    color: colors.red,
    cover:
      "https://th.bing.com/th/id/R.6fd3b2549cf1f0bda36b71c42e8d3cd7?rik=L%2fCYIiqulbxToQ&riu=http%3a%2f%2fusdailyreview.com%2fwp-content%2fuploads%2f2014%2f08%2ftechnology.jpg&ehk=dzaRzyft3FDapcPTuIGU6nF%2b2zznUv5dDXCjidMhVMA%3d&risl=&pid=ImgRaw&r=0",
    artists: ["Apple", "Google", "Microsoft", "Amazon", "NVIDIA"]
  },
  {
    id: "5",
    title: "Korean Mix",
    color: colors.pink,
    cover:
      "https://th.bing.com/th/id/R.fb48ee0e821849456eaffb29a7cc7a47?rik=ov%2f12k7pvgAndg&pid=ImgRaw&r=0",
    artists: ["BTS", "BlackPink", "Twice", "EXO", "Red Velvet"],
  },
  {
    id: "6",
    title: "Health & Wellness Mix",
    color: colors.gray,
    cover:
      "https://images8.alphacoders.com/286/thumb-1920-286149.jpg",
    artists: ["Yoga", "Meditation", "Workout", "Skin Care", "Nutrition"],
  },
];

export interface Song {
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
    title: "Football",
    image: "https://th.bing.com/th/id/R.baf1141f11df02e29ea4891e38443b10?rik=r9DyuQixCjD%2bkQ&pid=ImgRaw&r=0",
    artists: ["Sports Mix"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    title: "Cricket",
    image: `https://th.bing.com/th/id/R.c20fc55ff5a59c74bb568a663f40e572?rik=3hiy3MKf2PQUnA&pid=ImgRaw&r=0`,
    artists: ["Sports Mix"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    title: "Basketball",
    image: `https://www.wallpaperflare.com/static/565/556/8/derrick-rose-slam-dunk-basketball-basketball-wallpaper.jpg`,
    artists: ["Sports Mix"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    title: "MMA",
    image: `https://www.mixedmartialarts.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTk0Njc2MTY5ODgxMTY3Mzg0/islam-makhachev.jpg`,
    artists: ["Sports Mix"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    title: "WWE",
    image: `https://th.bing.com/th/id/R.a44efab2fa983932995a70bd1607e75d?rik=3%2bWE0i57Q0dRyQ&pid=ImgRaw&r=0`,
    artists: ["Sports Mix"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    title: "Sri Lanka", 
    image: `https://th.bing.com/th/id/OIP.K3zUL5HH7ltWvzba2sI71wHaE8?rs=1&pid=ImgDetMain`,
    artists: ["Political Mix"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "India", 
    image: `https://th.bing.com/th/id/OIP.tadFSva6KbzEaYsgsILcwwHaFO?rs=1&pid=ImgDetMain`,
    artists: ["Political Mix"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "USA", 
    image: `https://th.bing.com/th/id/R.291e5d9498fc97244dda4d633dcff80e?rik=y4gUTr%2fUnIqBpA&riu=http%3a%2f%2fwww.glbrain.com%2fimages%2ftools%2f9a%2f4f%2f8fd9353496f4aeb15633f521ddc94f9a_xxbig.jpg&ehk=7VxnhNn6fCTyfEMx02HG%2b42EX2LlESFEY2V6epAKJ0Q%3d&risl=&pid=ImgRaw&r=0`,
    artists: ["Political Mix"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    title: "UK", 
    image: `https://th.bing.com/th/id/OIP.8qaISNNRV2sTE92gWAnQMAHaEo?rs=1&pid=ImgDetMain`,
    artists: ["Political Mix"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    title: "Palestine",
    image: `https://cdn.givingcompass.org/wp-content/uploads/2021/06/30172913/How-Israel%E2%80%99s-Home-Demolition-Harms-Palestinian-Children.jpg`,
    artists: ["Political Mix"],
    album: "Night Visions",
    duration: "3:07",
  },
  {
    id: "11",
    title: "Crypto",
    image: `https://th.bing.com/th/id/OIP.lS34iT8Tqf6PJC5ywWjOdQAAAA?rs=1&pid=ImgDetMain`,
    artists: ["Business Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "12",
    title: "Stocks",
    image: `https://th.bing.com/th/id/OIP.wYtOETfZwIbRCWUkVIhVNAHaE8?rs=1&pid=ImgDetMain`,
    artists: ["Business Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "13",
    title: "Gold",
    image: `https://th.bing.com/th/id/OIP.iWF7w9FRAuvHPlW6p2NtigHaEu?rs=1&pid=ImgDetMain`,
    artists: ["Business Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "14",
    title: "Economy",
    image: `https://th.bing.com/th/id/OIP.nIw_Dr7cDy3yNzLgT5WzKQHaFH?rs=1&pid=ImgDetMain`,
    artists: ["Business Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "15",
    title: "Fuel",
    image: `https://img.freepik.com/premium-photo/factory-lights-sunset-scenery-oil-gas-refinery-plant-petrochemical-industry-chemical-petroleum-industrial-buildings-sky-concept-power-steel-facility_788189-14146.jpg`,
    artists: ["Business Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "16",
    title: "Apple",
    image: `https://th.bing.com/th/id/OIP.t1UbVWH7KdS2B6scs1NorgAAAA?rs=1&pid=ImgDetMain`,
    artists: ["Tech Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "17",
    title: "Google",
    image: `https://th.bing.com/th/id/OIP.mYKhZMCwGk_7vVw-TtBVoQAAAA?rs=1&pid=ImgDetMain`,
    artists: ["Tech Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "18",
    title: "Microsoft",
    image: `https://th.bing.com/th/id/OIP.tiFwlQZ-XOT1qokXEUc_KQAAAA?rs=1&pid=ImgDetMain`,
    artists: ["Tech Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "19",
    title: "Amazon",
    image: `https://th.bing.com/th/id/OIP.vahcn-vrMBzBn4PAOhMezwHaEK?rs=1&pid=ImgDetMain`,
    artists: ["Tech Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "20",
    title: "NVIDIA",
    image: `https://th.bing.com/th/id/R.ba6cecd86f5c406d3d6aa35ff191e0d9?rik=RUSTe1wFvnX%2bRQ&pid=ImgRaw&r=0`,
    artists: ["Tech Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "21",
    title: "BTS",
    image: `https://i.pinimg.com/originals/6e/2a/91/6e2a91eb550405819f7e3938483050de.jpg`,
    artists: ["Korean Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "22",
    title: "BlackPink",
    image: `https://th.bing.com/th/id/OIP.GaNLf7x4XnmxBNOt9gDFaAHaL3?rs=1&pid=ImgDetMain`,
    artists: ["Korean Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "23",
    title: "Twice",
    image: `https://images.genius.com/6f73b9bb216f1c08fd1f4fbd415e7721.720x720x1.png`,
    artists: ["Korean Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "24",
    title: "EXO",
    image: `https://th.bing.com/th/id/R.2df6b317798505c949ab1e52308aac59?rik=mh1NpEuuYqijMQ&pid=ImgRaw&r=0`,
    artists: ["Korean Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "25",
    title: "Red Velvet",
    image: `https://th.bing.com/th/id/OIP.FpTj0dNHmtU5QoxeM8y8GAHaKX?rs=1&pid=ImgDetMain`,
    artists: ["Korean Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "26",
    title: "Yoga",
    image: `https://e0.pxfuel.com/wallpapers/561/415/desktop-wallpaper-yoga-poses-fresh-yoga-pose-girl-nature-landscape.jpg`,
    artists: ["Health & Wellness Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "27",
    title: "Meditation",
    image: `https://th.bing.com/th/id/R.98d30bc1c39d7ae7ae9c1f174bf5eea3?rik=wo%2b3q%2bazGxTNOw&pid=ImgRaw&r=0`,
    artists: ["Health & Wellness Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "28",
    title: "Workout",
    image: `https://i.ytimg.com/vi/cB3_MbYD4so/maxresdefault.jpg`,
    artists: ["Health & Wellness Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "29",
    title: "Skin Care",
    image: `https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_20/1435573/overdoing-skincare-today-main-190509.jpg`,
    artists: ["Health & Wellness Mix"],
    album: "The Album",
    duration: "3:00",
  },
  {
    id: "30",
    title: "Nutrition",
    image: `https://th.bing.com/th/id/R.dfbde96c0cc1cf2bc15bb539b1db7ebb?rik=BRlVNraplOGfqA&pid=ImgRaw&r=0`,
    artists: ["Health & Wellness Mix"],
    album: "The Album",
    duration: "3:00",
  }
];

export const morePlaylists = [
  ...songs.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...songs.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

