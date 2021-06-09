import axios from 'axios';

const API_KEY = '21886555-3fceaf8550bdc90a73320eabf';
axios.defaults.baseURL = 'https://pixabay.com/api';

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchImages() {
    const response = await axios.get(
      `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );
    const promises = response.data.hits;
    if (promises.length === 0) {
      throw new Error();
    }
    this.incrementPage();
    return promises;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
