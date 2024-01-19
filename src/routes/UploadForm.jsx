import React from "react";
import { useNavigate } from "react-router-dom";
import useUpload from "../context/useUpload";
import { Container, Div, H2, Inner, Section, Form, Label, Input, Span, TextArea, Em } from "../styledComponents";

import { FaCamera } from "react-icons/fa";

const UploadForm = () => {
    const { file, title, price, brand, size, desc, onFileChange, onChange, onSubmit } = useUpload();
    const navigate = useNavigate();

    const handleUploadClick = () => {
        navigate("/");
    };

    return (
        <Section id="register">
            <H2 className="blind">물건 등록 폼</H2>
            <Container>
                <Inner className="inner">
                    <Div className="register">
                        <Form className="register_form" onSubmit={onSubmit}>
                            <Div className="add_photo">
                                <Label htmlFor="photo_input" className="photo_label">
                                    <FaCamera />
                                </Label>
                                <Span className="maximun">
                                    (최대 <Em>{file.length}</Em> /10장)
                                </Span>
                                <Input
                                    id="photo_input"
                                    name="photo_input"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={onFileChange}
                                    className="photo_input register_input"
                                />
                            </Div>
                            <Div className="register_title register_input_box">
                                <Label htmlFor="title_input" className="title_label register_label">
                                    <Span className="required">*</Span>제목
                                </Label>
                                <Input
                                    id="title_input"
                                    name="title"
                                    className="title_input register_input"
                                    type="text"
                                    maxLength={100}
                                    placeholder="제목을 입력하세요."
                                    required
                                    value={title}
                                    onChange={onChange}
                                />
                            </Div>
                            <Div className="register_price register_input_box">
                                <Label htmlFor="price_input" className="price_label register_label">
                                    <Span className="required">*</Span>가격
                                </Label>
                                <Input
                                    id="price_input"
                                    name="price"
                                    className="price_input register_input"
                                    type="text"
                                    placeholder="₩ 가격을 입력하세요."
                                    required
                                    value={price}
                                    onChange={onChange}
                                />
                            </Div>
                            <Div className="register_category register_input_box">
                                <Input
                                    name="category_input"
                                    className="category_input"
                                    type="submit"
                                    required
                                    value="베스트"
                                    // onChange={handleInputChange}
                                />
                                <Input
                                    name="category_input"
                                    className="category_input"
                                    type="submit"
                                    required
                                    value="나눔"
                                    // onChange={handleInputChange}
                                />
                                <Input
                                    name="category_input"
                                    className="category_input"
                                    type="submit"
                                    required
                                    value="교환"
                                    // onChange={handleInputChange}
                                />
                                <Input
                                    name="category_input"
                                    className="category_input"
                                    type="submit"
                                    required
                                    value="재사용"
                                    // onChange={handleInputChange}
                                />
                            </Div>
                            <Div className="register_brand register_input_box">
                                <Label htmlFor="brand_input" className="brand_label register_label">
                                    <Span className="required">*</Span>브랜드
                                </Label>
                                <Input
                                    id="brand_input"
                                    name="brand"
                                    className="brand_input register_input"
                                    type="text"
                                    maxLength={100}
                                    placeholder="브랜드명을 입력하세요."
                                    required
                                    value={brand}
                                    onChange={onChange}
                                />
                            </Div>
                            <Div className="register_size register_input_box">
                                <Label htmlFor="size_input" className="size_label register_label">
                                    <Span className="required">*</Span>사이즈
                                </Label>
                                <Input
                                    id="size_input"
                                    name="size"
                                    className="size_input register_input"
                                    type="text"
                                    maxLength={100}
                                    placeholder="사이즈를 입력하세요."
                                    required
                                    value={size}
                                    onChange={onChange}
                                />
                            </Div>
                            <Div className="register_text register_textarea">
                                <Label htmlFor="product_desc" className="text_label register_label">
                                    <Span className="required">*</Span>상품설명
                                </Label>
                                <TextArea
                                    id="product_desc"
                                    name="desc"
                                    className="product_desc"
                                    maxLength={300}
                                    rows={10}
                                    required
                                    value={desc}
                                    onChange={onChange}
                                    placeholder="상품설명을 작성해주세요. 판매할 물건에 대한 설명을 자세히 작성하면 신뢰도가 오를 수 있습니다."
                                />
                            </Div>
                            <Input type="submit" value="등록" className="btn_input" onClick={handleUploadClick} />
                        </Form>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default UploadForm;
