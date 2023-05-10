export type Product = {
  _id?: string;
  name: string;
  image?: string;
  price: number;
  desc: string;
  slug: string;
  size?:string;
  catygoryId: string;
  buy?:number
};
export type DataPrice={
  _id:any,
  totalPrice:any
}
export type TotalPriceAdmin={
  status:any,
  data:DataPrice[]
}
