"use client";

import { useEffect, useState } from "react";
import { getHome, postPost } from "@/app/api/autentificacion";
import { Home, Post } from "@/types";
import './globals.css'
import { Comentaries } from "./components/commentSection/commentSection";
export default function HomePage() {
  const [data, setData] = useState<Home | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadPosts(page);
  }, [page]);

  const loadPosts = async (p: number) => {
    try {
      const res = await getHome(p);
      setData((prev) => ({
        ...res,
        posts: p === 1 ? res.posts : [...(prev?.posts || []), ...res.posts],
      }));
    } catch (error) {
      console.error("Error loading feed", error);
    }
  };

  const handlePost = async () => {
    if (!content.trim()) return;
    setLoading(true);
    try {
      await postPost(content);
      setContent(""); 
      setPage(1);    
      loadPosts(1);
    } catch (err) {
      alert("You couldt pusblish");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      
      <div className="create-post-card">
        <input
          className="texto"
          placeholder="Write something"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button 
          onClick={handlePost}
          disabled={loading}
        >
          {loading ? "Loading..." : "Post"}
        </button>
      </div>
      <hr />

      <div className="feed">
        {data?.posts.map((post: Post) => (
          <div key={post._id} style={{ padding: "20px 0", borderBottom: "1px solid #eee", display: "flex", gap: "15px" }}>
            <Comentaries key={post._id} post={post}/>
          </div>
        ))}
      </div>

      <div>
        <button className="load-more-container"
          onClick={() => setPage(page + 1)}
          style={{ cursor: "pointer" }}
        >
          Cargas más
        </button>
      </div>
    </div>
  );
}