import React, { useState } from 'react';
import { Breadcrumb, DatePicker, Input, Layout, Form, Card, Row, Col, Button, Divider } from 'antd';
import { ProFormRadio } from '@ant-design/pro-form';
import styled from 'styled-components';
import { postTrisomies } from './service';
const { Header, Content, Footer } = Layout;

const TrisomyForm: React.FC = () => {
  const [isHasNoseBone, setIsHasNoseBone] = useState(false);
  const [result, setResult] = useState(null);

  const onFinish = async (values: any) => {
    const {
      bhcg,
      nt,
      pappa,

      afp,
      hcg,
      ue3,

      cervical_lymph_node_first_ultrasound,
      crown_rump_length,
      heart_defect_first_ultrasound,
      heartbeat,
      nose_bone_first_ultrasound,
      nuchal_translucency,

      cervical_lymph_node_second_ultrasound,
      heart_defect_second_ultrasound,
      nose_bone_second_ultrasound,
      nose_bone_length,

      dateOfBirth,
      test_date_first_ultrasound,
    } = values;
    const doubleTest = { bhcg: Number(bhcg), nt: Number(nt), pappa: Number(pappa) };
    const tripleTest = {
      afp: Number(afp),
      hcg: Number(hcg),
      ue3: Number(ue3),
    };
    const firstUltrasound = {
      test_date: test_date_first_ultrasound,
      cervical_lymph_node: cervical_lymph_node_first_ultrasound,
      crown_rump_length: Number(crown_rump_length),
      heart_defect: heart_defect_first_ultrasound,
      heartbeat: Number(heartbeat),
      nose_bone: nose_bone_first_ultrasound,
      nuchal_translucency: Number(nuchal_translucency),
    };

    const secondUltrasound = {
      cervical_lymph_node: cervical_lymph_node_second_ultrasound,
      heart_defect: heart_defect_second_ultrasound,
      nose_bone: nose_bone_second_ultrasound,
      nose_bone_length: Number(nose_bone_length),
    };
    try {
      const response = await postTrisomies({
        doubleTest,
        tripleTest,
        firstUltrasound,
        secondUltrasound,
        dateOfBirth,
      });
      setResult(response);
    } catch (error) {
      console.log(error);
      // message.error(JSON.stringify(error));
      return false;
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Trang ch???</Breadcrumb.Item>
          <Breadcrumb.Item>AI Trisomy</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Card>
            <Form
              name="basic"
              // labelCol={{ span: 3 }}
              wrapperCol={{ span: 4 }}
              initialValues={{ remember: true }}
              labelAlign={'left'}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              // autoComplete="off"
            >
              <h3>Th??ng tin thai ph???</h3>

              <div>
                <Form.Item
                  labelCol={{ span: 3 }}
                  label="Ng??y sinh"
                  name="dateOfBirth"
                  // rules={[{ required: true, message: 'Please input your date of birth!' }]}
                >
                  <DatePicker style={{ width: '50%' }} placeholder="Nh???p ng??y sinh" />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 3 }}
                  wrapperCol={{ span: 2 }}
                  label="C??n n???ng"
                  name="weight"
                  // rules={[{ required: true, message: 'Please input your date of birth!' }]}
                >
                  <Input suffix="kg" />
                </Form.Item>
              </div>

              <Divider />
              <div>
                <Row>
                  <Col style={{ display: 'flex' }} span={24}>
                    <Row style={{ width: '100%' }}>
                      <Col span={12}>
                        <h4>Double test</h4>
                        <Form.Item
                          labelCol={{
                            span: 12,
                            md: { span: 6 },
                          }}
                          name={'bhcg'}
                          label="??-hCG t??? do"
                          // rules={[{ required: true }]}
                        >
                          <Input type="text" suffix="MoM" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{
                            span: 12,
                            md: { span: 6 },
                          }}
                          name={'pappa'}
                          label="PAPP-A"
                          // rules={[{ required: true }]}
                        >
                          <Input type="text" suffix="MoM" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'nt'}
                          label="NT"
                          // rules={[{ required: true }]}
                        >
                          <Input type="text" suffix="MoM" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'week_old'} label="S??? tu???n thai">
                          <Input type="text" suffix="tu???n" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'day_old'} label="S??? ng??y thai">
                          <Input type="text" suffix="ng??y" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <h4>Triple test</h4>
                        <Form.Item
                          name={'ue3'}
                          label="uE3"
                          // rules={[{ required: true }]}
                          labelCol={{ span: 6 }}
                        >
                          <Input type="text" suffix="MoM" />
                        </Form.Item>
                        <Form.Item
                          name={'afp'}
                          label="AFP"
                          // rules={[{ required: true }]}
                          labelCol={{ span: 6 }}
                        >
                          <Input suffix="MoM" />
                        </Form.Item>
                        <Form.Item
                          name={'hcg'}
                          label="hCG"
                          // rules={[{ required: true }]}
                          labelCol={{ span: 6 }}
                        >
                          <Input type="text" suffix="MoM" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'week_old_triple_test'}
                          label="S??? tu???n thai"
                        >
                          <Input type="text" suffix="tu???n" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'day_old_triple_test'}
                          label="S??? ng??y thai"
                        >
                          <Input type="text" suffix="ng??y" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col style={{ display: 'flex' }} span={24}>
                    <Row style={{ width: '100%' }}>
                      <Col span={12}>
                        <h4>Si??u ??m k??? 1</h4>
                        <Form.Item
                          name={'test_date_first_ultrasound'}
                          label="Ng??y XN"
                          // rules={[{ required: true, message: 'Vui l??ng nh???p ng??y x??t nghi???m' }]}
                          labelCol={{ span: 6 }}
                        >
                          <DatePicker placeholder="Nh???p ng??y x??t nghi???m" format="DD-MM-YYYY" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'nuchal_translucency'}
                          label="????? m??? da g??y NT"
                          // rules={[
                          //   { required: true, message: 'Vui l??ng nh???p th??ng tin ????? m??? da g??y' },
                          // ]}
                        >
                          <Input suffix="mm" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'crown_rump_length'}
                          // Crown Rump Length
                          label="Chi???u d??i ?????u m??ng"
                          // rules={[
                          //   {
                          //     required: false,
                          //     message: 'Vui l??ng nh???p th??ng tin chi???u d??i ?????u m??ng',
                          //   },
                          // ]}
                        >
                          <Input suffix="mm" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'heartbeat'} label="Nh???p tim thai">
                          <Input suffix="l???n/ph??t" />
                        </Form.Item>

                        <ProFormRadio.Group
                          radioType="button"
                          labelCol={{ span: 6 }}
                          label="X????ng m??i"
                          name="nose_bone_first_ultrasound"
                          options={[
                            { label: 'C??', value: true },
                            { label: 'Kh??ng', value: false },
                          ]}
                          // rules={[{ required: true, message: 'Vui l??ng ch???n ?????y ????? th??ng tin' }]}
                        />
                        <ProFormRadio.Group
                          radioType="button"
                          label="D??? t???t tim"
                          labelCol={{ span: 6 }}
                          name="heart_defect_first_ultrasound"
                          options={[
                            { label: 'C??', value: true },
                            { label: 'Kh??ng', value: false },
                          ]}
                          // rules={[{ required: true, message: 'Vui l??ng ch???n ?????y ????? th??ng tin' }]}
                        />

                        <ProFormRadio.Group
                          radioType="button"
                          label="Nang b???ch huy???t v??ng c???"
                          name="cervical_lymph_node_first_ultrasound"
                          labelCol={{ span: 6 }}
                          options={[
                            { label: 'C??', value: true },
                            { label: 'Kh??ng', value: false },
                          ]}
                          // rules={[{ required: true, message: 'Vui l??ng ch???n ?????y ????? th??ng tin' }]}
                        />
                      </Col>
                      <Col span={12}>
                        <h4>Si??u ??m k??? 2</h4>
                        <ProFormRadio.Group
                          labelCol={{ span: 6 }}
                          radioType="button"
                          label="X????ng m??i"
                          name="nose_bone_second_ultrasound"
                          options={[
                            { label: 'C??', value: true, onChange: () => setIsHasNoseBone(true) },
                            {
                              label: 'Kh??ng',
                              value: false,
                              onChange: () => setIsHasNoseBone(false),
                            },
                          ]}
                          // rules={[{ required: true, message: 'Vui l??ng ch???n ?????y ????? th??ng tin' }]}
                        />
                        {isHasNoseBone && (
                          <Form.Item
                            name={'nose_bone_length'}
                            label="Chi???u d??i x????ng m??i"
                            labelCol={{ span: 6 }}
                            rules={[
                              {
                                required: true,
                                message: 'Vui l??ng nh???p th??ng tin chi???u d??i x????ng m??i',
                              },
                            ]}
                          >
                            <Input suffix="mm" />
                          </Form.Item>
                        )}

                        <ProFormRadio.Group
                          radioType="button"
                          label="D??? t???t tim"
                          name="heart_defect_second_ultrasound"
                          labelCol={{ span: 6 }}
                          options={[
                            { label: 'C??', value: true },
                            { label: 'Kh??ng', value: false },
                          ]}
                          // rules={[{ required: true, message: 'Vui l??ng ch???n ?????y ????? th??ng tin' }]}
                        />

                        <ProFormRadio.Group
                          labelCol={{ span: 6 }}
                          radioType="button"
                          label="Nang b???ch huy???t ??? v??ng c???"
                          name="cervical_lymph_node_second_ultrasound"
                          options={[
                            { label: 'C??', value: true },
                            { label: 'Kh??ng', value: false },
                          ]}
                          // rules={[{ required: true, message: 'Vui l??ng ch???n ?????y ????? th??ng tin' }]}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Button type="primary" htmlType="submit">
                Ch???n ??o??n
              </Button>
            </Form>

            {result && (
              <Result>
                <p>K???t qu???</p>
                <p>Trisomy13: {result.Trisomy13.toFixed(2)}</p>
                <p>Trisomy18: {result.Trisomy18.toFixed(2)}</p>
                <p>Trisomy21: {result.Trisomy21.toFixed(2)}</p>
              </Result>
            )}
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ?? 2022 Produced by ?????i h???c B??ch Khoa H?? N???i v?? ?????i h???c Y H?? N???i
      </Footer>
    </Layout>
  );
};

const Result = styled.div`
  text-align: center;
`;

export default TrisomyForm;
