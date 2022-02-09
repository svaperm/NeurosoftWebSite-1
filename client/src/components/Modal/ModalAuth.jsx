import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './style.css';

import DetectLanguage from '../../functions/detectLang';
import texts from './texts.json';
import { Button, Input, Form } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';

const lang = DetectLanguage();

export const ModalAuth = () => {
  const { changeAuthState, modalAuth, changeModalAuthState } =
    useContext(StoreContext) || {};
  return (
    <div className={`modal-auth-wrapper ${!modalAuth ? 'hidden' : ''}`}>
      <div className="modal-auth">
        <div
          className="close-modal"
          onClick={() => {
            changeModalAuthState();
          }}
        ></div>

        <h2 className="modal-title">{texts['log-in-sys'][lang]}</h2>
        <Form name="basic" autoComplete="off">
          <Form.Item
            label={texts['login'][lang]}
            name={texts['login'][lang]}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={texts['password'][lang]}
            name={texts['password'][lang]}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {texts['sign-in'][lang]}
            </Button>
          </Form.Item> */}
        </Form>

        <NavLink
          className="modal-btn"
          to="/innerMain"
          onClick={() => {
            changeAuthState();
            changeModalAuthState();
          }}
        >
          {texts['sign-in'][lang]}
        </NavLink>
      </div>
    </div>
  );
};
