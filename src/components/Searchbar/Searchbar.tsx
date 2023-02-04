import React from 'react';

export default function Searchbar() {
  return (
    <div className="hidden min-h-[48px] w-full max-w-[50vw] text-xs sm:flex">
      <input
        placeholder="AI, Big Data, Python, TypeScript..."
        type={'text'}
        name="searchTerm"
        className="mx-4 flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-transparent py-2 px-4 text-white transition-all sm:min-w-[320px]"
      />
    </div>
  );
}
