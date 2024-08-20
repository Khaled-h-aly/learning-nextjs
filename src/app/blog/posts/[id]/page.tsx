import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/Post";

export default function Page({ params }: { params: { id: string } }) {
    const post = posts.find((post) => post.id === params.id);
    if (!post) {
        return <div>Post not found</div>;
    }
    return (
        <>
            <h2>Post</h2>
            <Post {...post} />
        </>
    );
}

export function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id,
    }));
}