import Link from "next/link";
import { GetStaticProps } from "next";
import PostData from '../utils/DemoJson.json';
import { Post } from "@/types";
import { useTheme } from "../context/ThemeContext";
import { CSSProperties } from "react";

interface HomePageProps {
    posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
    const { theme } = useTheme()

    const styles: { [key: string]: CSSProperties } = {
        cardContainer: {
            width:'80%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '20px', 
            padding: '20px',
        },
        card: {
            backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
            color: theme === 'light' ? '#000000' : '#ffffff',
            padding: '20px',
            border:'1px solid gray',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease-in-out',
        },
        cardHover: {
            transform: 'scale(1.05)',
        },
        link: {
            color: '#0070f3',
            textDecoration: 'none',
            marginTop: '10px',
            display: 'inline-block',
        },
    };
    return (
        <div style={{
            padding:5,
            backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
            color: theme === 'light' ? '#000000' : '#ffffff',
        }}>
            <div style={{ textAlign: 'center' }}>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: theme === 'light' ? '#000000' : '#ffffff',
            }}>
                <h1 className="text-4xl">Blog Posts</h1>
                <div style={styles.cardContainer}>
                {posts.map(post => (
                    <div key={post.id} style={styles.card}>
                        <h3>{post.title}</h3>
                        <Link href={`/posts/${post.id}`}>
                            <div style={styles.link}>Read More</div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>

        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts: Post[] = PostData;
    return {
        props: {
            posts,
        }
    }
}

export default HomePage;