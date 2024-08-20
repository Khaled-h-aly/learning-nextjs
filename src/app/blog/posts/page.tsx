import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/Post";
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/blog/posts/${post.id}`}>
                        <Post {...post} />
                    </Link>
                </div>
            ))}
        </>
    );
}