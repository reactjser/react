import { Pagination, Table } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Planets } from '../types/Planets';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
  },
  {
    title: 'Terrain',
    dataIndex: 'terrain',
    key: 'terrain',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
    render: (val: string) => dayjs(val).format('YYYY-MM-DD'),
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited',
    render: (val: string) => dayjs(val).format('YYYY-MM-DD'),
  },
];

const fetchPlanets = async (page: number) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

function About() {
  const [page, setPage] = useState(1);
  const { isLoading, isFetching, error, data } = useQuery<Planets, Error>(
    ['planets', page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      {data && (
        <>
          <Table
            style={{
              width: 800,
              margin: '0 auto',
            }}
            rowKey="name"
            size="middle"
            bordered={true}
            pagination={false}
            loading={isFetching}
            dataSource={data.results}
            columns={columns}
          />
          <Pagination
            style={{ marginTop: 20 }}
            showSizeChanger={false}
            current={page}
            total={data.count}
            onChange={setPage}
          />
        </>
      )}
    </div>
  );
}

export default About;
