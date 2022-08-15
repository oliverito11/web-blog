import BlogItem from './BlogItem';

const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </>
  );
};

export default BlogList;