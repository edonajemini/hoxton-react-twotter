import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AsideInput } from "./components/AsideInput";
import { LeftMenu } from "./components/LeftMenu"
import { MainSection } from "./components/MainSection";

function App() {

  const [ tweets, setTweets ] = useState([
      {
        "id": 1,
        "tweet": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "user": {
          "name": "Electronic ",
          "username": "Ipsum",
          "profileImage": "https://pbs.twimg.com/profile_images/1490744361784692737/Gt1H_KTI_400x400.jpg"
        },
        "image": "https://pbs.twimg.com/media/FZuF8niXEAALRxu?format=jpg&name=medium"
      },
      {
        "id": 2,
        "tweet": "Many desktop publishing packages and web page editors'",
        "user": {
          "name": "Edona",
          "username": "edona",
          "profileImage": "https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/241689644_6786504164708406_4669557858020427744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qaYuEeg0cXoAX89wkYG&_nc_ht=scontent.fprn13-1.fna&oh=00_AT_oRycJbmcAjVp9USzHyW0nzk42wY3QOCgafjwEzjxJOQ&oe=62F86BB3"
        },
        "image": "https://pbs.twimg.com/media/FZuF8niXEAALRxu?format=jpg&name=medium"
      }
    ])

  return (
    <div className="App">
      <LeftMenu />
      <MainSection tweets={tweets} setTweets = {setTweets}/>
      <AsideInput />
    </div>
  );
}

export default App;