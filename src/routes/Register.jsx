import React from "react";
import { Container, Div, H2, Inner, Section, Form, Label, Input, Span } from "../styledComponents";

import { FaCamera } from "react-icons/fa";

const Register = () => {
    const onFileChange = () => {};

    return (
        <Section id="register">
            <H2 className="blind">물건 등록 폼</H2>
            <Container>
                <Inner className="inner">
                    <Div className="register">
                        <Form className="register_form">
                            <Div className="add_photo">
                                <Label htmlFor="photo_input" className="photo_label">
                                    <FaCamera />
                                </Label>
                                <Span className="register_input_desc">(최대 10장)</Span>
                                <Input
                                    id="photo_input"
                                    name="photo_input"
                                    type="file"
                                    accept="image/*"
                                    onChange={onFileChange}
                                    className="photo_input register_input"
                                />
                            </Div>
                            <Div className="register_title register_input_box">
                                <Label htmlFor="title_input" className="title_label register_label">
                                    제목
                                </Label>
                                <Input
                                    id="title_input"
                                    name="title_input"
                                    className="title_input register_input"
                                    type="text"
                                    maxLength={100}
                                    placeholder="제목을 입력하세요."
                                    required
                                    // value={upload}
                                    // onChange={onChange}
                                />
                            </Div>
                            <Div className="register_price register_input_box">
                                <Label htmlFor="price_input" className="price_label register_label">
                                    가격
                                </Label>
                                <Input
                                    id="price_input"
                                    name="price_input"
                                    className="price_input register_input"
                                    type="text"
                                    placeholder="₩ 가격을 입력하세요."
                                    required
                                    // value={upload}
                                    // onChange={handleInputChange}
                                />
                            </Div>
                        </Form>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Register;
