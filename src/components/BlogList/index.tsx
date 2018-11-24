import * as React from 'react';
import { style } from 'typestyle';
import { Link } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';
import { observer, inject } from 'mobx-react';

const blogList = style({
  width: '70%',
  padding: '20px'
});

const listItem = style({
  padding: 20,
  marginBottom: 20,
  backgroundColor: '#FFF',
  border: '1px solid #E5E5E5',
  borderRadius: 4,
});

const blogTitle = style({
  fontSize: 28,
  textDecoration: 'none',
});

const blogContent = style({
  wordBreak: 'break-word',
  fontSize: 16,
});

const createTime = style({
  fontSize: 14,
})

interface IProps {
  articleStore: any
}
@inject('articleStore')
@observer
class BlogList extends React.Component<IProps> {

  componentDidMount() {
    this.props.articleStore.fetchData()
  }

  renderBlogList() {
    return this.props.articleStore.articleList.map((article: any) => (
      <div className={listItem} key={article.id}>
      <Link to={`/blog/${article.id}`}>
        <h2 className={blogTitle}>{article.title}</h2>
        <div className={createTime}>{article.createAt}</div>
        <ReactMarkdown className={blogContent} source={article.content} />
      </Link>
    </div>
    ))
  }
  public render() {
    return (
      <div className={blogList}>
        {this.renderBlogList()}
      </div>
    );
  }
}

export default BlogList;
