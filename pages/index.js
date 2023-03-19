import React from 'react';
import { useRouter } from 'next/router';

import MainSection from '../components/main-section';

const Page = ({ data: { central, east, west }, status }) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath, undefined, { scroll: false });
  };

  if (status === 'error') return <div>Error</div>;

  return (
    <div className='grid gap-4 lg:grid-cols-3 items-end'>
      <MainSection
        type='primary'
        region='eu-central-1'
        data={central}
        api={process.env.NEXT_PUBLIC_AWS_API_URL_EU_CENTRAL_1}
        callback={refreshData}
      />
      <MainSection
        region='us-east-1'
        data={east}
        api={process.env.NEXT_PUBLIC_AWS_API_URL_US_EAST_1}
        callback={refreshData}
      />
      <MainSection
        region='us-west-1'
        data={west}
        api={process.env.NEXT_PUBLIC_AWS_API_URL_US_WEST_2}
        callback={refreshData}
      />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const [central, east, west] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL_EU_CENTRAL_1}/read`),
      fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL_US_EAST_1}/read`),
      fetch(`${process.env.NEXT_PUBLIC_AWS_API_URL_US_WEST_2}/read`),
    ]);

    return {
      props: {
        message: 'A Ok!',
        status: 'success',
        data: {
          central: await central.json(),
          east: await east.json(),
          west: await west.json(),
        },
      },
    };
  } catch (error) {
    return {
      props: {
        message: 'Error!',
        status: 'error',
        error: error.message,
      },
    };
  }
}

export default Page;
