import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section className="left-menu">
        <img
          className="twotter-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          alt="logo"
        />
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://icon-library.com/images/icon-for-twitter/icon-for-twitter-17.jpg"
                  alt="home-logo"
                />
                <h2 className="lm-item-title">Home</h2>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png"
                  alt="profile-logo"
                />
                <h2 className="lm-item-title">Profile</h2>
              </a>
            </li>
            <li>
              <a href="#" className="nav-list-item">
                <img
                  className="nav-icon"
                  src="data:image/png;base64,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"
                  alt="more"
                />
                <h2  className="lm-item-title">More</h2>
              </a>
            </li>
            <button className="tweet-btn">Tweet</button>
          </ul>
        </nav>
      </section>
    ;
      <section className="main">
        <h1>Home</h1>

        <form className="tweet-form">
          <img
            className="user-profile-image"
            src="https://avatars.githubusercontent.com/u/74864689?v=4"
            alt=""
          />
          <input type="text" placeholder="What's happening?" />
          <button className="home__tweet-btn">Tweet</button>
        </form>
        <div className="tweet-wrap">
  <div className="tweet-header">
    <img src="https://avatars.githubusercontent.com/u/74864689?v=4" alt="" className="avator"/>
    <div className="tweet-header-info">
      Edona Jemini <span>@Edona Jemini</span><span>. August 11
</span>
      <p>Lorem ipsum dolor sit amet ct ct, nam voluptas, sequi doloremque?</p>
      
    </div>
    
  </div>
  <div className="tweet-img-wrap">
    <img src="https://helios-i.mashable.com/imagery/articles/02lBbarWbqUkrz1FyTeUBP7/hero-image.fill.size_1248x702.v1659538562.png" alt="" className="tweet-img"/>
  </div>
  <div className="tweet-info-counts">
    
    <div className="comments">
      
      <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      <div className="comment-count">33</div>
    </div>
    
    <div className="retweets">
      <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
      <div className="retweet-count">397</div>
    </div>
    
    <div className="likes">
      <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <div className="likes-count">
        2.6k
      </div>
    </div>
    
    <div className="message">
      <svg className="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    </div>
  </div>
</div>
      </section>
      <section className="aside_input">
            <span className="material-icons aside_search-icon">search</span>
            <input type="text" placeholder="Search Twitter"></input>
            <div>
            <h2>What's happening?</h2>
            </div>
      </section>
    </div>
  );
}

export default App;