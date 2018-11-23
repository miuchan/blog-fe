import * as React from 'react';
import { style } from 'typestyle';
import { HashRouter as Router, Link } from 'react-router-dom'

const blogList = style({
  width: '70%',
  padding: '20px'
})

const listItem = style({
  padding: '20px 0',
})

const blogTitle = style({
  fontSize: 28,
})

const blogContent = style({
  fontSize: 16,
})
class BlogList extends React.Component {
  public render() {
    return (
      <div className={blogList}>
        <Router>
          <Link to="/blog/1" className={listItem}>
            <h2 className={blogTitle}>这是一篇博客</h2>
            <p className={blogContent}>p</p>
          </Link>
        </Router>
      </div>
    );
  }
}

export default BlogList;
