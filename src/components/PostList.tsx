import AuthContext from "context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseApp";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export interface PostProps {
  id?: string;
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
}

const PostList = ({ hasNavigation = true }: PostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));

    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            onClick={() => setActiveTab("all")}
            role="presentation"
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            onClick={() => setActiveTab("my")}
            role="presentation"
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}
      <div className="post__list">
        {posts?.length > 0
          ? posts?.map((post, index) => (
              <div key={post?.id} className="post__box">
                <Link to={`posts/${post?.id}`}>
                  <div className="post__profile-box">
                    <div className="post__profile" />
                    <div className="post__author-name">{post?.email}</div>
                    <div className="post__date">{post?.createdAt}</div>
                  </div>
                  <div className="post__title">{post?.title}</div>
                  <div className="post__text">{post?.summary}</div>
                </Link>
                {post?.email === user?.email && (
                  <div className="post_utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">
                      <Link to={`/posts/edit/${post?.id}`}>수정</Link>
                    </div>
                  </div>
                )}
              </div>
            ))
          : (
            <div className="post__no-post">게시글이 없습니다.</div>
          )}
      </div>
    </>
  );
};

export default PostList;
