import { useState } from "react";
import "./App.css";

const artistName = "FX rudo";
const youtubeChannel = "https://www.youtube.com/@fxrudo826";
const channelAvatar = "https://yt3.googleusercontent.com/-aMD0A0jzT5DY-d-XQn0iMsDg2taI69P8S-VlCGLTn-tNn5ueXembOdcZDD4mWrUQJYdH6ofGQ=s120-c-k-c0x00ffffff-no-rj";

const releases = [
  { title: "Muhammad the guide of islam", type: "Nasheed", duration: "4:20", videoId: "R0edXsnVlNM" },
  { title: "Solitaire city", type: "Music video", duration: "3:15", videoId: "Flr9LgjBW3E" },
  { title: "Tanha Dil", type: "Music video", duration: "2:52", videoId: "Tm7R4YI6X1I" },
  { title: "My heart is broken", type: "Music video", duration: "2:52", videoId: "gTgn41_YoLo" },
  { title: "Electric pulse", type: "Music video", duration: "2:33", videoId: "MAk_Nx-TLDE" },
  { title: "Nightingale 2.0", type: "Music video", duration: "2:35", videoId: "9wUODhQXqkc" },
  { title: "Chill out frenzy", type: "Music video", duration: "2:58", videoId: "SO_nP2VPVWk" },
  { title: "Trumpet comedy", type: "Music video", duration: "2:01", videoId: "vMDSIekby4I" },
];

function youtubeLink(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function App() {
  const [filter, setFilter] = useState("All tracks");
  const visibleReleases = filter === "All tracks"
    ? releases
    : releases.filter((release) => release.type === filter);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={`${artistName} home`}>
          <img className="wordmark-avatar" src={channelAvatar} alt="" />
          <span>{artistName}</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#releases">Music</a>
          <a href="#about">About</a>
          <a className="nav-channel" href={youtubeChannel} target="_blank" rel="noreferrer">
            YouTube <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> INDEPENDENT MUSIC · OFFICIAL VIDEOS</p>
          <h1>FX rudo<br />in your ears<span className="period">.</span></h1>
          <p className="hero-description">
            Official music and videos from FX rudo. Pick a track, press play,
            and stay for whatever comes next.
          </p>
          <a className="button button-lime" href="#releases">
            Explore the music <span className="button-arrow" aria-hidden="true">↘</span>
          </a>
          <div className="hero-meta"><span>WRITTEN &amp; MADE INDEPENDENTLY</span><span>FX RUDO · YOUTUBE</span></div>
        </div>
        <a className="hero-art" href={youtubeLink(releases[0].videoId)} target="_blank" rel="noreferrer" aria-label={`Watch ${releases[0].title} on YouTube`}>
          <img
            src={`https://i.ytimg.com/vi/${releases[0].videoId}/hqdefault.jpg`}
            alt={`${releases[0].title} video thumbnail`}
          />
          <span className="art-label">LATEST<br />RELEASE</span>
          <span className="hero-art-caption"><span>OFFICIAL VIDEO</span><strong>{releases[0].title}</strong><span className="play-mark" aria-hidden="true">▶</span></span>
        </a>
        <div className="hero-index" aria-hidden="true">01 / 08</div>
      </section>

      <section className="next-release" aria-labelledby="next-title">
        <div className="next-kicker"><span className="sparkle" aria-hidden="true">✳</span> FOLLOW ALONG</div>
        <div className="next-main">
          <h2 id="next-title">The next track starts here.</h2>
          <p>FOLLOW FX RUDO ON YOUTUBE FOR NEW MUSIC</p>
        </div>
        <a className="next-link" href={youtubeChannel} target="_blank" rel="noreferrer">
          Visit the channel <span aria-hidden="true">↗</span>
        </a>
        <div className="next-decoration" aria-hidden="true">NEXT<br />CHAPTER</div>
      </section>

      <section className="releases-section" id="releases">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow">THE LISTENING ROOM <span>✳</span></p>
            <h2>Out in the <span>wild.</span></h2>
          </div>
          <div className="release-filters" role="group" aria-label="Filter releases">
            {["All tracks", "Music video", "Nasheed"].map((option) => (
              <button
                className={filter === option ? "filter-button active" : "filter-button"}
                key={option}
                type="button"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option === "Music video" ? "Music videos" : option}
              </button>
            ))}
          </div>
        </div>

        <div className="release-grid">
          {visibleReleases.map((release, index) => (
            <article className="release-item" key={release.videoId}>
              <a className="release-cover" href={youtubeLink(release.videoId)} target="_blank" rel="noreferrer" aria-label={`Watch ${release.title} on YouTube`}>
                <img
                  src={`https://i.ytimg.com/vi/${release.videoId}/hqdefault.jpg`}
                  alt={`${release.title} video thumbnail`}
                  loading="lazy"
                />
                <span className="cover-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="cover-play" aria-hidden="true">▶</span>
              </a>
              <div className="release-info">
                <div><h3>{release.title}</h3><p>{release.type} · {release.duration}</p></div>
                <a className="listen-link" href={youtubeLink(release.videoId)} target="_blank" rel="noreferrer" aria-label={`Watch ${release.title} on YouTube`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-mark" aria-hidden="true">✳</div>
        <div className="about-copy">
          <p className="eyebrow">A NOTE FROM THE ARTIST</p>
          <h2>Made with feeling.<br /><span>Shared with you.</span></h2>
          <p>This is where the songs land. Follow FX rudo on YouTube for new releases, videos, and whatever comes next.</p>
          <a className="button button-outline" href={youtubeChannel} target="_blank" rel="noreferrer">Find me on YouTube <span aria-hidden="true">↗</span></a>
        </div>
        <div className="about-stamp">THANKS<br />FOR LISTENING</div>
      </section>

      <footer className="site-footer">
        <a className="footer-name" href="#home"><img className="footer-avatar" src={channelAvatar} alt="" />{artistName}</a>
        <p>ALL SONGS, ALL FEELINGS. © {new Date().getFullYear()}</p>
        <a className="footer-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;