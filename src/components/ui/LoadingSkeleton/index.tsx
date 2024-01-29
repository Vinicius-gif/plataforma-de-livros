import React from 'react';

import { Skeleton } from '../skeleton';

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 content-center justify-items-center h-[450px] max-w-72 w-80 mx-auto my-4 rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <Skeleton className="w-32 h-40" />

      <div className="px-4 py-3">
        <Skeleton className="mb-2 h-8 w-44" />
        <Skeleton className="mb-2 h-5 w-44" />
        <Skeleton className="mb-2 h-5 w-44" />
        <Skeleton className="mb-2 h-5 w-44" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
