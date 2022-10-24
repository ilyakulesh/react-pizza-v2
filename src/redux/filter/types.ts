export type Sort = {
    name: string,
    sortProperty: string,
}
  
export interface FilterSliceState {
    searchValue: string,
    categoryId: number,
    currentPage:  number,
    sort: Sort,
}