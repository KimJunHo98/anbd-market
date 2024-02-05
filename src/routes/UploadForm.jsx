import React from "react";
import useUpload from "../hooks/useUpload";
import { categoryList, subCategoryList } from "../constant";

import { Container, Div, H2, Inner, Section, Form, Label, Input, Span, TextArea, Select, Option, Img, Button } from "../styledComponents";
import { FaCamera } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const UploadForm = () => {
    const { fileUrls, title, price, brand, size, desc, subCategory, category, onFileChange, onChange, onSubmit, handleImageDeleteCLick } =
        useUpload();

        console.log(fileUrls);
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
                                <Input
                                    id="photo_input"
                                    name="photo_input"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={onFileChange}
                                    className="photo_input register_input"
                                />
                                {fileUrls &&
                                    fileUrls.map((urls, i) => (
                                        // console.log(urls)
                                        <Div className="thumb_img" key={urls}>
                                            <Img src={urls} alt="" />
                                            <Button className="delete_btn" onClick={handleImageDeleteCLick(i)}>
                                                <MdCancel />
                                            </Button>
                                        </Div>
                                    ))}
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
                            <Div className="register_category">
                                <Label htmlFor="category_select" className="category_label register_label">
                                    <Span className="required">*</Span>카테고리
                                </Label>
                                <Select
                                    id="category_select"
                                    name="category"
                                    className="category_select register_select"
                                    required
                                    value={category}
                                    onChange={(e) => onChange({ target: e.target })}
                                >
                                    <Option value="">선택하세요</Option>
                                    {categoryList.map((category) => (
                                        <Option key={category.text} value={category.value}>
                                            {category.text} {category.desc}
                                        </Option>
                                    ))}
                                </Select>
                            </Div>
                            <Div className="register_category">
                                <Label htmlFor="subcategory_select" className="subcategory_label register_label">
                                    <Span className="required">*</Span>서브 카테고리
                                </Label>
                                <Select
                                    id="subcategory_select"
                                    name="subCategory"
                                    className="category_select register_select"
                                    value={subCategory}
                                    onChange={(e) => onChange({ target: e.target })}
                                >
                                    <Option value="">선택하세요</Option>
                                    {subCategoryList.map((subCategory) => (
                                        <Option key={subCategory.text} value={subCategory.value}>
                                            {subCategory.text}
                                        </Option>
                                    ))}
                                </Select>
                            </Div>
                            <Div className="register_brand register_input_box">
                                <Label htmlFor="brand_input" className="brand_label register_label">
                                    브랜드
                                </Label>
                                <Input
                                    id="brand_input"
                                    name="brand"
                                    className="brand_input register_input"
                                    type="text"
                                    maxLength={100}
                                    placeholder="브랜드명을 입력하세요."
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
                            <Input type="submit" value="등록" className="btn_input" />
                        </Form>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default UploadForm;
