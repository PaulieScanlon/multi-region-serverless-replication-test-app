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
        region='us-east-1'
        data={east}
        api={process.env.NEXT_PUBLIC_AWS_API_URL_US_EAST_1}
        callback={refreshData}
        options={['skyscraper', 'condo', 'office']}
        depth={0}
      />
      <MainSection
        type='primary'
        region='eu-central-1'
        data={central}
        api={process.env.NEXT_PUBLIC_AWS_API_URL_EU_CENTRAL_1}
        callback={refreshData}
        options={['castle', 'cottage', 'barn']}
        depth={1}
      />
      <MainSection
        region='us-west-1'
        data={west}
        api={process.env.NEXT_PUBLIC_AWS_API_URL_US_WEST_2}
        callback={refreshData}
        depth={2}
        options={['palm', 'camper', 'umbrella']}
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

    const groupBy = (data) => {
      const { message, region, provider } = data;

      const buildings = data.buildings.reduce((items, item) => {
        (items[item['depth']] = items[item['depth']] || []).push(item);

        return items;
      }, {});

      return {
        message,
        region,
        provider,
        buildings,
      };
    };

    return {
      props: {
        message: 'A Ok!',
        status: 'success',
        data: {
          central: groupBy(await central.json()),
          east: groupBy(await east.json()),
          west: groupBy(await west.json()),
        },
      },
    };
  } catch (error) {
    return {
      props: {
        message: 'Error!',
        status: 'error',
        error: error.message,
        data: {
          central: {},
          east: {},
          west: {},
        },
      },
    };
  }
}

export default Page;
