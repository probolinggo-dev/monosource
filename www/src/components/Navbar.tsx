import { FunctionComponent } from 'react';

export const Navbar: FunctionComponent<{}> = () => {
  return (
    <nav className="flex items-center max-w-screen-lg justify-between flex-wrap bg-white-500 p-6">
      <div className="flex items-center flex-shrink-0 text-coffee mr-6">
        <span className="font-semibold text-xl tracking-tight">
          probolinggo dev
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-coffee-100 border-coffee-100 hover:text-coffee-400 hover:border-coffee-400">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
