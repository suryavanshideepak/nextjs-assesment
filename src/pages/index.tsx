import Link from "next/link";
import { GetStaticProps } from "next";
import PostData from '../utils/DemoJson.json';
import { Post } from "@/types";
import { useTheme } from "../context/ThemeContext";

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
                        <div
                            key={post.id}
                            className={`p-5 border rounded-lg shadow-lg ${
                                theme === 'light'
                                    ? 'bg-white text-black'
                                    : 'bg-gray-800 text-white'
                            } hover:scale-105 transform transition-all duration-300`}
                        >
                            <h3 className="text-xl font-semibold mb-4">
                                {post.title}
                            </h3>
                            <Link href={`/posts/${post.id}`}>
                                <div className="text-blue-500 hover:underline">
                                    Read More
                                </div>
                            </Link>
                        </div>
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
