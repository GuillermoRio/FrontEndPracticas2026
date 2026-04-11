import { api } from '@/lib/api/api'
import { Product } from '@/types';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await api.get('/');
  return response.data.products; 
};

export const getProdudctById = async (num: number): Promise<Product> => {
   const response = await api.get(`/${num}`)
   return response.data
}