/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${zidingyi} 是必须的!',
  types: {
    email: '${label} 必须是邮箱!',
    number: '${label} 必须是一个数字!',
  },
  number: {
    range: '${label} 需要在 ${min} 和 ${max} 之间',
  },
};



const UserAdd = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="姓名" rules={[{ required: true, zidingyi: 'asd' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="邮件" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', '学号']} label="学号" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="年龄" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          添加
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserAdd;
