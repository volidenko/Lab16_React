
import Posts from "./Posts.js"
import data from "../db.json";
export default function PostList() {
    // const [posts, setPosts]=useState([]);
    // useEffect(()=>{
    //     setPosts(data["posts"]);
    //     console.log("Запрос к API/файлу");
    // },
    // []);
    const [posts, setPosts]=useState(poststore.getPosts());
    return <>
    <Post posts={posts}></Post>
    </>
}