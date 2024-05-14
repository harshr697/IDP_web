import React from 'react'
import Header from '../../header/Header'
import BlogPost from '../../posts/Posts'
import SideBar from '../../sideBar/SideBar'
const blogPosts = [
  {
    id: 1,
    title: "Example Blog Post 1",
    summary: "This is the summary of Example Blog Post 1.",
    date: "May 13, 2024",
    imageUrl: "https://example.com/image1.jpg"
  },
  {
    id: 2,
    title: "Example Blog Post 2",
    summary: "This is the summary of Example Blog Post 2.",
    date: "May 14, 2024",
    imageUrl: "https://example.com/image2.jpg"
  },
  {
    id: 2,
    title: "Example Blog Post 2",
    summary: "This is the summary of Example Blog Post 2.",
    date: "May 14, 2024",
    imageUrl: "https://example.com/image2.jpg"
  },
  {
    id: 2,
    title: "Example Blog Post 2",
    summary: "This is the summary of Example Blog Post 2.",
    date: "May 14, 2024",
    imageUrl: "https://example.com/image2.jpg"
  }
];
export default function Home() {
  return (
    <div className='home'>
      <>
        <Header/>
        <div className='home'>
        {blogPosts.map(post => (
          <BlogPost id={post.id} title={post.title} summary={post.summary} date={post.date} imageUrl="https://cdn.britannica.com/91/82291-050-EB7A276A/Mohandas-K-Gandhi-leader-Mahatma-Indian.jpg?w=400&h=300" />
        ))}
          <SideBar/>
        </div>
        </>
    </div>
  )
}
