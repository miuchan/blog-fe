import { observable, action } from 'mobx';
import axios from 'axios';

class ArticleStore {
  @observable public articleList: [];
  @observable public article: string;
  @observable public pending: boolean;
  @observable public currentPage: number;

  constructor() {
    this.articleList = []
    this.article = ''
    this.pending = false
    this.currentPage = 0
  }

  @action
  public async fetchData() {
    this.pending = true
    const res = await axios.get(`http://localhost:3000/articles`)
    this.articleList = res.data
    this.pending = false
  }

  @action
  public async fetchMoreData(page: number) {
    this.pending = true
    const res = await axios.get(`http://localhost:3000/articles?page=${page}`)
    this.articleList.concat(res.data)
    this.pending = false
  }

  @action
  public async fetchOne(id: number) {
    this.pending = true
    const res = await axios.get(`http://localhost:3000/articles/${id}`)
    this.article = res.data
    this.pending = false
  }
}

const articleStore = new ArticleStore();

export default articleStore