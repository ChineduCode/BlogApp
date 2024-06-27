// const fetchBlogs = async ()=> {
//     const response = await fetch('http://localhost:3000/api/blogs', {
//         method: "GET"
//     })
//     return await response.json()
// }

const Home = async ()=> {
    // const blogs = await fetchBlogs()
    // const popularPost = blogs.find(blog => blog.popular === true)
    // const newPosts = blogs.filter(blog => blog.new === true)
    // const trendingPosts = blogs.filter(blog => blog.trending === true)
    
    return(
        <main className="homepage">
            Hello World
            {/* <div className="container">
                <div className="hero-section">
                    <div className="img-container">
                        <img src="/images/image-web-3-mobile.jpg" alt="" className="mobile-hero-img" />
                        <img src="/images/image-web-3-desktop.jpg" alt="" className="desktop-hero-img" />
                    </div>
                    <div className="text-container">
                        <h1 className="title">{popularPost.title}</h1>
                        <div className="description">{popularPost.description}</div>
                        <button>READ MORE</button>
                    </div>
                </div>

                <div className="new-posts">
                    <h2 className="heading">New</h2>
                    {newPosts.map((post, index)=> (
                        <div className="post" key={index}>
                            <h3 className="title">{post.title}</h3>
                            <div className="description">{post.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="trending-posts">
                {trendingPosts.map((post, index) => (
                    <div className="trending-post" key={index}>
                        <div className="img-container">
                            <img src={post.image} alt={`0${index + 1} image`} />
                        </div>
                        <div className="text-container">
                            <h1 className="num">{`0${index + 1}`}</h1>
                            <h3 className="title">{post.title}</h3>
                            <div className="description">{post.description}</div>
                        </div>
                    </div>
                ))}
            </div> */}
        </main>
    )
}

export default Home;
