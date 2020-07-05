declare interface PageProps {
  query: Record<string, string>;
  cookies: Record<string, string>;
  renderErrorPage: (
    error: import("apollo-boost").ApolloError,
    simplePage?: boolean
  ) => any;
  renderLoadingSkeleton: () => any;
}

declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
