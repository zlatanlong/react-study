import React from 'react';
import styles from './index.less';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>addRoutine</h1>
      <Button type="primary">添加事务</Button>
    </div>
  );
}
