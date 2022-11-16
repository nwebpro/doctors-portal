import React from 'react';
import { Triangle } from  'react-loader-spinner'

const SmallLoading = () => {
    return (
        <div className='flex justify-center'>
            <Triangle
                height="80"
                width="80"
                color="#19D3AE"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default SmallLoading;