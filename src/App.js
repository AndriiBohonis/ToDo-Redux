import FetchPosts from "./components/FetchPosts";
import FormPost from "./components/FormPost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <FormPost />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронні Пости</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асенхронні Пости</h2>
          <FetchPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
