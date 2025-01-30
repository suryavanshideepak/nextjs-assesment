import Link from "next/link";
import { GetStaticProps } from "next";
import PostData from '../utils/DemoJson.json';
import { Post } from "@/types";
import { useTheme } from "../context/ThemeContext";
import BlogCard from "@/components/BlogCard";

interface HomePageProps {
    posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
    const { theme } = useTheme();

    return (
        <div
            className={`min-h-screen p-5 ${
                theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
            }`}
        >
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
                    {posts.map((post) => (
                        <BlogCard blog={post}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts: Post[] = PostData;
    return {
        props: {
            posts,
        },
    };
};

export default HomePage;
