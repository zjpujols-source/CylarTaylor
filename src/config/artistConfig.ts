import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "Cylar Taylor",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-video.mp4",
  heroImage: "/hero-poster.jpg",
  profileImage: "/profile.jpg",

  // ============================================================
  // SOCIALS
  // ============================================================
  socials: [
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/5hfz3vJFAZ1gZtraW3xU0g?si=2OhcA_KgR_q4E2_LjqZPdA&utm_source=copy-link",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/cylar-taylor/1882621931",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://youtube.com/@cylartaylor?si=6JV-ibGULGfKy_1r",
      label: "YouTube"
    },
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/cylartaylor?xtok=MW93ZXg5dDl2YnJ4aQ==",
      label: "Instagram"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@cylartaylor?_r=1&_t=ZP-9BAESTAgmdz",
      label: "TikTok"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "oh-hello",
          title: "Oh Hello",
          type: "single",
          releaseDate: "November 20, 2026",
          coverArt: "/covers/oh-hello.jpg",
          presaveUrl: "https://unitedmasters.com/m/oh-hello-2?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
          songlinkUrl: "https://unitedmasters.com/m/oh-hello-2?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
          spotifyUrl: "https://unitedmasters.com/m/oh-hello-2?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
          appleMusicUrl: "https://unitedmasters.com/m/oh-hello-2?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
        },
        {
          id: "alone",
          title: "Alone",
          type: "single",
          releaseDate: "October 2, 2026",
          coverArt: "/covers/alone.jpg",
          spotifyUrl: "https://open.spotify.com/track/0eRgSz4aq4BNBOV3Vly0yp",
          appleMusicUrl: "https://music.apple.com/us/album/alone-single/6813812800",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Cylar+Taylor+Alone",
          deezerUrl: "https://www.deezer.com/album/1081863892",
          amazonMusicUrl: "https://music.amazon.com/search/Cylar+Taylor+Alone",
          tidalUrl: "https://listen.tidal.com/search?q=Cylar+Taylor+Alone",
          itunesUrl: "https://music.apple.com/us/album/alone-single/6813812800"
        },
        {
          id: "must-we",
          title: "Must We",
          type: "single",
          releaseDate: "July 31, 2026",
          coverArt: "/covers/must-we.jpg",
          spotifyUrl: "https://open.spotify.com/track/4pD42c6ateI434NAOvwtap",
          appleMusicUrl: "https://music.apple.com/us/album/must-we-single/6790602689",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Cylar+Taylor+Must+We",
          youtubeUrl: "https://youtu.be/_X66Nz1XHfM",
          deezerUrl: "https://www.deezer.com/album/1028342802",
          amazonMusicUrl: "https://music.amazon.com/search/Cylar+Taylor+Must+We",
          tidalUrl: "https://listen.tidal.com/search?q=Cylar+Taylor+Must+We",
          itunesUrl: "https://music.apple.com/us/album/must-we-single/6790602689"
        },
        {
          id: "blue-mountain",
          title: "Blue Mountain",
          type: "single",
          releaseDate: "June 17, 2026",
          coverArt: "/covers/blue-mountain.jpg",
          spotifyUrl: "https://open.spotify.com/track/64BUeOnaY6Z4FkNhqkPNC8",
          appleMusicUrl: "https://music.apple.com/us/album/blue-mountain-single/6771087743",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Cylar+Taylor+Blue+Mountain",
          youtubeUrl: "https://youtu.be/ALBWuntHmsQ",
          deezerUrl: "https://www.deezer.com/album/986567771",
          amazonMusicUrl: "https://music.amazon.com/search/Cylar+Taylor+Blue+Mountain",
          tidalUrl: "https://listen.tidal.com/search?q=Cylar+Taylor+Blue+Mountain",
          itunesUrl: "https://music.apple.com/us/album/blue-mountain-single/6771087743"
        },
        {
          id: "somebodys-knockin",
          title: "Somebody's Knockin'",
          type: "single",
          releaseDate: "March 20, 2026",
          coverArt: "/covers/somebodys-knockin.jpg",
          spotifyUrl: "https://open.spotify.com/track/2iCT7cbLl6Rbhw62QQzCDy",
          appleMusicUrl: "https://music.apple.com/us/album/somebodys-knockin-single/1882622037",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Cylar+Taylor+Somebody's+Knockin'",
          youtubeUrl: "https://youtu.be/fKJWa3tOvnM",
          deezerUrl: "https://www.deezer.com/album/932676231",
          amazonMusicUrl: "https://music.amazon.com/search/Cylar+Taylor+Somebody's+Knockin'",
          tidalUrl: "https://listen.tidal.com/search?q=Cylar+Taylor+Somebody's+Knockin'",
          itunesUrl: "https://music.apple.com/us/album/somebodys-knockin-single/1882622037"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "must-we",
          title: "Cylar Taylor - Must We (Live from Sedona)",
          youtubeId: "_X66Nz1XHfM",
          thumbnail: "https://i.ytimg.com/vi/_X66Nz1XHfM/hqdefault.jpg"
        },
        {
          id: "somebodys-knockin",
          title: "Cylar Taylor - Somebody's Knockin' (The Bonfire Sessions)",
          youtubeId: "fKJWa3tOvnM",
          thumbnail: "https://i.ytimg.com/vi/fKJWa3tOvnM/hqdefault.jpg"
        },
        {
          id: "blue-mountain",
          title: "Cylar Taylor - Blue Mountain (Live from Sedona, AZ)",
          youtubeId: "ALBWuntHmsQ",
          thumbnail: "https://i.ytimg.com/vi/ALBWuntHmsQ/hqdefault.jpg"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
