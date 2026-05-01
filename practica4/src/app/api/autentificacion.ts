import {  Post, Usuario, Home } from "@/types";
import api from "@/app/api/api";

export const getHome = async (page:number) => {
    const res= await api.get<Home>("/home", {
  params: {
    page: page,
    limit: 10,
  },
});
return res.data; 
}


export const postPost = async (contenido:string) => {
    const res= await api.post("/posts",{
        contenido
    })
}

export const getUser = async () =>{
  const res = await api.get<Usuario>("/users/me")
  return res.data ;
}

export const postComentarios = async (id:string, contenido:string) =>{
  const res= await api.post(`/posts/${id}/comment`, {
    contenido
  });
}

export const getUnPost = async (id:string) => {
  const res = await api.get<Post>(`/posts/${id}`)
  return res.data;
}

export const getPerfil = async (id:string) => {
  const res= await api.get<Usuario>(`/users/${id}/profile`)
  return res.data ;
}