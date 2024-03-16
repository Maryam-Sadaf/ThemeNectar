import { makeAutoObservable } from 'mobx';

class PaginationStore {
  currentPage = 1;
  itemsPerPage = 6; // Number of items per page
  totalItems = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage(page) {
    this.currentPage = page;
  }

  setTotalItems(total) {
    this.totalItems = total;
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get offset() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get limit() {
    return this.itemsPerPage;
  }
}

const paginationStore = new PaginationStore();
export default paginationStore; 