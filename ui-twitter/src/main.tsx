import React from 'react'
import ReactDOM from 'react-dom/client'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from 'phosphor-react'

import twtterLogo from './assets/logo-twitter.svg'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twtterLogo} alt="logo" />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight='fill' />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header"></div>
          Home
          <Sparkle />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/stefanossandrade.png" alt="Stefano Andrade" />
              <textarea id="tweet" placeholder="What's happening?"></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>
)
