import { createApi } from "@reduxjs/toolkit/query/react";
import restBaseQueryWithReauth from "@apps/config/baseQueryWithReauth";
import { ProductCategoryProps, ResponseProps } from "@globalTypes/globalTypes";

interface QueryProps {
  per_page?: string | number;
  page?: string | number;
  keyword: string | null;
}

interface DataProps {
  per_page: number;
  total: number;
  data: ProductCategoryProps[];
}

export const productCategoryServiceApi = createApi({
  reducerPath: "productCategoryServiceApi",
  baseQuery: restBaseQueryWithReauth,
  keepUnusedDataFor: 30,
  tagTypes: ["productCategoryTag"],
  endpoints: (builder) => ({
    getProductCategory: builder.query({
      query: (query: QueryProps) => ({
        url: `/product-categories?per_page=${query.per_page}&page=${query.page}&keyword=${query.keyword}`,
        method: "GET",
      }),
      providesTags: ["productCategoryTag"],
      transformResponse: (res: ResponseProps<DataProps>) => {
        const { per_page, total, data }: DataProps = res.data;
        return { per_page, total, data };
      },
    }),
    storeProductCategory: builder.mutation({
      query: (payload) => ({
        url: "/product-categories",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["productCategoryTag"],
    }),
    getProductCategoryDetail: builder.query({
      query: (productCategoryId) => ({
        url: `/product-categories/${productCategoryId}`,
        method: "GET",
      }),
      transformResponse: (res: ResponseProps<ProductCategoryProps>) => {
        return res.data;
      },
      keepUnusedDataFor: 0,
    }),
    updateProductCategory: builder.mutation({
      query: ({ payload, productCategoryId }) => ({
        url: `/product-categories/${productCategoryId}?_method=PUT`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["productCategoryTag"],
    }),

    deleteProductCategor: builder.mutation({
      query: (id) => ({
        url: `/product-categories/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["productCategoryTag"],
    }),
  }),
});

export const {
  useGetProductCategoryQuery,
  useGetProductCategoryDetailQuery,
  useStoreProductCategoryMutation,
  useUpdateProductCategoryMutation,
  useDeleteProductCategorMutation,
} = productCategoryServiceApi;
