export interface Post {
    id:number;
    title:string;
    author:string;
    content:string;
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