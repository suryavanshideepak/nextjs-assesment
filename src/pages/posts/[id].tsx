import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import type { Post } from '../../types/index'
import Head from 'next/head';
import { useTheme } from '@/context/ThemeContext';

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const { theme } = useTheme()
  return (
    <>
    <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.shortDescription} />        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.shortDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/posts/${post.id}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.shortDescription} />
      </Head>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        height:'90vh',
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}>
      <h1><strong>Title:</strong>{post.title}</h1>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>{post.shortDescription}</p>
    </div>
    </>
    
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsFilePath = path.join(process.cwd(), 'src/utils', 'DemoJson.json');
  const postsData = fs.readFileSync(postsFilePath, 'utf8');
  const posts: Post[] = JSON.parse(postsData);

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }, 
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsFilePath = path.join(process.cwd(), 'src/utils', 'DemoJson.json');
  const postsData = fs.readFileSync(postsFilePath, 'utf8');
  const posts: Post[] = JSON.parse(postsData);

  const post = posts.find((p) => p.id.toString() === params?.id);

  return {
    props: {
      post: post || null,
    },
  };
};
