import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = ({ itemCount, itemHeight }) => {
  return (
    <>
      {[...Array(itemCount)].map((_, index) => (
        <div className="col-md-4 mt-4" key={index}>
          <a href="#">
            <div className="card shadow-lg mt-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <Skeleton variant="rectangular" width="100%" height={itemHeight} />
              </div>
              <div className="card-body">
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="50%" />
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Loading;
