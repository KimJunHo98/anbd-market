import React from "react";
import { BtnInput, Form, Input, Label, MoveBtn, MoveSection, Section, H2, Inner, Container, Div, H3, P } from "../styledComponents";

const Login = () => {
    return (
        <Section id="login">
            <H2 className="blind">로그인</H2>
            <Container>
                <Inner>
                    <Div className="login">
                        <H3 className="login_title">로그인</H3>
                        <Div className="login_form">
                            <Form>
                                <Label htmlFor="email">이메일</Label>
                                <Input id="email" name="email" type="email" required placeholder="이메일" />
                                <Label htmlFor="password">비밀번호</Label>
                                <Input id="password" name="password" type="password" required placeholder="비밀번호" />
                                <BtnInput type="submit" value="로그인" />
                            </Form>
                        </Div>
                        <MoveSection>
                            <P>계정이 없으신가요?</P>
                            <MoveBtn to="/signup" title="회원가입 하기">
                                회원가입 하기
                            </MoveBtn>
                        </MoveSection>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Login;
