import "./App.css";
import { trpc } from "./trpc/trpc";

function App() {
  const posts = trpc.getPosts.useQuery().data;

  return (
    <>
      <ul>
        {posts?.map(({ title, content, createAt }) => (
          <li key={createAt}>
            <h1>title: {title}</h1>
            {content}
            <p>{createAt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
