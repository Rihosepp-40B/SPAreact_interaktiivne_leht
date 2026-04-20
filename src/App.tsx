import { useState } from 'react'
import './App.css'
import { FadeContent, styles } from './fade/fadecontent';
import Gallery from './gallery/gallery';
import Comment from './blog/comment';
import CommentList from './blog/comment_list';


type ContentStatus = "home" | "gallery" | "comments";

type CarBlog = {
  id: number;
  text: string;
  src: string;
  pictureId: number;
  favorite: boolean;
}

const App: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentStatus>("home");

  const [current, setCurrent] = useState<number>(0);
  
  const [carBlogPost, setCarBlogPost] = useState<CarBlog[]>([]);

  return (
    <div className="container">
      <header>
        <h1>Unique car collection</h1>
        <nav className="navbar">
            <li><button
              onClick={() => setActiveContent("home")}
              style={{
              ...(activeContent === "home" ? styles.active : {}),
              }}
            >Home</button></li>
            <li><button
              onClick={() => setActiveContent("gallery")}
              style={{
              ...(activeContent === "gallery" ? styles.active: {}),
              }}
            >Gallery</button></li>
            <li><button
              onClick={() => setActiveContent("comments")}
              style={{
              ...(activeContent === "comments" ? styles.active : {}),
              }}
            >Comments</button></li>
        </nav>
      </header>
      <main>
        <div className="contentWrapper">

          <FadeContent active={activeContent === "home"}>
            <h2>Homepage</h2>
            <p>Wellcome to my unique car blogsite!</p>
          </FadeContent>

          <FadeContent active={activeContent === "gallery"}>
            <Gallery current={current} setCurrent={setCurrent} />
            <Comment
              current={current}
              carBlogPost={carBlogPost}
              setCarBlogPost={setCarBlogPost}/>
          </FadeContent>

          <FadeContent active={activeContent === "comments"}>
            <CommentList
              current={current}
              carBlogPost={carBlogPost}
              setCarBlogPost={setCarBlogPost}/>
          </FadeContent>
          
        </div>
      </main>
    </div>
  );
};


export default App
