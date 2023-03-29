import { Product } from "./product";
export interface TPrdCate {
      _id?: string;
      name: string;
      image: string;
      slug?:string
      products: Product[];
    };
    
    export type PrdCate = {
      cateproduct: {
        _id: string;
        name: string;
        status: number;
        products?: Product[];
      };
      products: Product[];
    };