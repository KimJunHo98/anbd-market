import React from "react";
import useAuth from "../hooks/useAuth";
import { Form, Input, Label, Section, H2, Inner, Container, Div, H3, P, ALink, Error, Switcher } from "../styledComponents";

const Login = () => {
    const { email, password, onChange, onSubmit, error, onLogin } = useAuth();

    return (
        <Section id="login">
            <H2 className="blind">로그인</H2>
            <Container>
                <Inner>
                    <Div className="login">
                        <H3 className="login_title">로그인</H3>
                        <Div className="login_form">
                            <Form onSubmit={onSubmit} role="form">
                                <Label htmlFor="email" className="blind">이메일</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    className="login_input"
                                    type="email"
                                    required
                                    placeholder="이메일"
                                    value={email}
                                    onChange={onChange}
                                    aria-label="이메일을 입력하세요."
                                />
                                <Label htmlFor="password" className="blind">비밀번호</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    className="login_input"
                                    type="password"
                                    required
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={onChange}
                                    aria-label="비밀번호를 입력하세요."
                                />
                                <Input type="submit" value="로그인" className="btn_input" onClick={onLogin} aria-label="로그인 하기" />
                            </Form>
                            {error !== "" ? <Error>{error}</Error> : ""}
                        </Div>
                        <Switcher>
                            <P>계정이 없으신가요?</P>
                            <ALink to="/signup" title="회원가입 하기" className="move_btn" role="link" aria-label="회원가입 페이지로 이동">
                                회원가입 하기
                            </ALink>
                        </Switcher>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Login;
