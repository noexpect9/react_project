import React, { memo } from 'react';
import cover from '@/assets/img/cover_01.jpeg';

const HomeBanner = memo(() => {
  return (
    <div className='h-[600px]' style={{ background: `url(${cover}) center/cover`  }}>
      HomeBanner
    </div>
  );
});

export default HomeBanner;