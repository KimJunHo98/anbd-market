import React from "react";
import { BtnInput, Form, Input, Label, MoveBtn, MoveSection } from "../styledComponents";


const Login = () => {
    return (
        <section id="login">
            <h2 className="blind">로그인</h2>
            <div className="container">
                <div className="inner">
                    <div className="login">
                        <h3 className="login_title">로그인</h3>
                        <div className="login_form">
                            <Form>
                                <Label htmlFor="email">이메일</Label>
                                <Input id="email" name="email" type="email" required placeholder="이메일" />
                                <Label htmlFor="password">비밀번호</Label>
                                <Input id="password" name="password" type="password" required placeholder="비밀번호" />
                                <BtnInput type="submit" value="로그인" />
                            </Form>
                        </div>
                        <MoveSection>
                            <p>계정이 없으신가요?</p>
                            <MoveBtn to="/signup" title="회원가입 하기">회원가입 하기</MoveBtn>
                        </MoveSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
