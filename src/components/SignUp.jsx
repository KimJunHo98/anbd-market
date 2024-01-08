import React from "react";
import { BtnInput, Form, Input, Label, MoveBtn, MoveSection } from "../styledComponents";

const SignUp = () => {
    return (
        <section id="signup">
            <h2 className="blind">회원가입</h2>
            <div className="container">
                <div className="inner">
                    <div className="signup">
                        <h3 className="signup_title">회원가입</h3>
                        <div className="signup_form">
                            <Form>
                                <Label htmlFor="name">닉네임</Label>
                                <Input id="name" name="name" type="text" required placeholder="계정 이름" />
                                <Label htmlFor="email">이메일</Label>
                                <Input id="email" name="email" type="email" required placeholder="이메일" />
                                <Label htmlFor="password">비밀번호</Label>
                                <Input id="password" name="password" type="password" required placeholder="비밀번호" />
                                <BtnInput type="submit" value="회원가입" />
                            </Form>
                        </div>
                        <MoveSection>
                            <p>이미 계정이 있으신가요?</p>
                            <MoveBtn to="/login" title="로그인 하기">로그인 하기</MoveBtn>
                        </MoveSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
