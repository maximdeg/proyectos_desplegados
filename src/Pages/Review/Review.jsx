import React, { useEffect, useState } from "react";

function Review() {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const getPosts = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            { method: "GET" }
        );
        const posts = await response.json();
        setPosts(posts);
        setIsLoading(false);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
        {isLoading ? <h2>Cargando</h2> : posts &&
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))}
        </>
    );
}

export default Review;
