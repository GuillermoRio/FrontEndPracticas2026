

import api from "@/app/api/api";
import { Post } from "@/types";
import { useRouter } from "next/navigation";
import './commentSection.css'

export const Comentaries = ({post}:{post:Post}) => {

  const router=useRouter()

  const handlePerfil = async () =>{
    router.push(`/perfiles/${post.autor._id}`)
  }

  const handleLike = async () => {
    await api.post(`/posts/${post._id}/like`);
  };
  
  const handleRetweet = async () => {
    await api.post(`/posts/${post._id}/retweet`);
  };

return (
  <div className="post-card">
    <div>
      <div onClick={handlePerfil}>
        {post.autor.username[0].toUpperCase()}
      </div>
    </div>

    <div>
      <div>
        <span className="post-username" onClick={handlePerfil}>
          {post.autor.username}
        </span>
        <span>· {new Date(post.updatedAt).getHours()}:{new Date(post.updatedAt).getMinutes().toString().padStart(2, '0')}</span>
      </div>
      
      <p>{post.contenido}</p>

      <div >
        <button onClick={handleLike} >
          <span>♡</span> {post.likes.length}
        </button>
        <button onClick={handleRetweet}>
          <span>⇄</span> {post.retweets.length}
        </button>
        <button>
          <span>💬</span> 0
        </button>
      </div>
    </div>
  </div>
)}