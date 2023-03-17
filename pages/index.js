import React from 'react';

import MainSection from '../components/main-section';

const Page = () => {
  return (
    <div className='grid gap-4 lg:grid-cols-3 items-end'>
      <MainSection type='primary' region='eu-central-1' api={process.env.NEXT_PUBLIC_AWS_API_URL_EU_CENTRAL_1} />
      <MainSection region='us-east-1' api={process.env.NEXT_PUBLIC_AWS_API_URL_US_EAST_1} />
      <MainSection region='us-west-1' api={process.env.NEXT_PUBLIC_AWS_API_URL_US_WEST_2} />
    </div>
  );
};

export default Page;
