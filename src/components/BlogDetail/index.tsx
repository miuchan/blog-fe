import * as React from 'react';
import { style } from 'typestyle';
import * as ReactMarkdown from 'react-markdown';
import { observer, inject } from 'mobx-react';

interface IProps {
  articleStore: any,
  match: any,
}

const contentClass = style({
  width: '70%',
  margin: 20,
  padding: 20,
  backgroundColor: '#FFF',
  border: '1px solid #E5E5E5',
  borderRadius: 4,
  $nest: {
    '& h1': {
      textAlign: 'center',
    },
  },
})
@inject('articleStore')
@observer
class BlogDetail extends React.Component<IProps> {
  
  componentDidMount() {
    const { articleStore, match } = this.props
    articleStore.fetchOne(match.params.id)
  }
  public render() {
    const { title, content } = this.props.articleStore.article

    return (
      <div className={contentClass}>
        <h1>{title}</h1>
        <ReactMarkdown source={content} />
      </div>
    );
  }
}

export default BlogDetail;
