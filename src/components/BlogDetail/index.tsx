import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

class BlogDetail extends React.Component {
  public render() {
    return (
      <ReactMarkdown source="## 热爱生命" />
    );
  }
}

export default BlogDetail;
