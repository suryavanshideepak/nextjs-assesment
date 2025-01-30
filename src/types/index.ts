export interface Post {
    id?:any;
    image?: string;
    title?: string;
    type?: string;
    shortDescription?: string;
    author?: string;
    avatar?: string;
    readTime?: string;
    likes?: number;
    dislikes?: number;
    comments?: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface ProductsType  {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}