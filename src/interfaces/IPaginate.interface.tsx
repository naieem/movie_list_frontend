export interface IPaginate {
    pageNumber: number;
    sort?: {
      [key: string]: string;
    };
    search?: string;
  }
  