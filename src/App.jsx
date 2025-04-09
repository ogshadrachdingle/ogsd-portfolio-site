import React from 'react';
import './App.css';
import { FaSpotify, FaTiktok, FaYoutube, FaDiscord } from 'react-icons/fa';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TEAM OGSD</h1>
        <p>Your ultimate destination for Fortnite Maps, Music, and More!</p>
      </header>

      <section className="content">
        <h2>Fortnite Maps</h2>
        <ul>
          <li>Shadrach’s Shack - 4691-3453-9615</li>
          <li>Port-A-Royale - 2418-7341-2692</li>
          <li>Rozz's Prop Hunt - 8359-2850-9966</li>
        </ul>

        <h2>Socials</h2>
        <ul>
          <li><a href="https://www.tiktok.com/@ogshadrachdingle" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
          <li><a href="https://www.youtube.com/@ogshadrachdingle" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a></li>
          <li><a href="https://discord.gg/3yB7uVqR" target="_blank" rel="noopener noreferrer"><FaDiscord /> Discord</a></li>
          <li><a href="https://open.spotify.com/artist/0IQQ52cGu5lpqEjVpbkskn?si=aUOe8rzKQK2KDAl8op1iAw" target="_blank" rel="noopener noreferrer"><FaSpotify /> Spotify</a></li>
        </ul>

        <h2>Music</h2>
        <div>
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5NKQdRnJ2NbwNV09SyXwb2?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </section>

      <footer>
        <p>Contact me: <a href="mailto:ogshadrachdingle@gmail.com">ogshadrachdingle@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
