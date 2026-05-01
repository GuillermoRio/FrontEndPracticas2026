export type Home = {
    posts:        Post[];
    pagina:       number;
    totalPaginas: number;
    totalPosts:   number;
}

export type Post = {
    _id:         string;
    contenido:   string;
    autor:       Autor;
    likes:       string[];
    retweets:    Retweet[];
    comentarios: Comentario[];
    createdAt:   Date;
    updatedAt:   Date;
}

export type Autor = {
    _id:      string;
    username: string;
}

export type Comentario = {
    _id:       string;
    contenido: string;
    autor:     Autor;
    fecha:     Date;
}

export type Retweet = {
    usuario: string;
    fecha:   Date;
}

export type User = {
    _id:      string;
    username: string;
    email:    string;
}

export type Usuario = {
    user:User;
    posts:Post[]
}