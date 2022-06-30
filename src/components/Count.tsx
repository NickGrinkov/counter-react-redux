import React, { FC } from 'react';

type CountType = {
	count: number
}

const Count: FC<CountType> = ({ count }): JSX.Element => {
  return <span className="count">{count}</span>;
};

export default Count;