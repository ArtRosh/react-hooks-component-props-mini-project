import React from "react"
import Article from "./Article"


function ArticleList({post}) {
    console.log(post)
    return(
     <main>
       {post.map((post) => (
        <Article
            id={post.id}
            title={post.title}
            data={post.data}
            preview={post.preview}
        />
       ))}
     </main>
    )
}


export default ArticleList
