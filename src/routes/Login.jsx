import React from "react";
import useAuth from "../context/useAuth";
import { Form, Input, Label, Section, H2, Inner, Container, Div, H3, P, ALink, Error } from "../styledComponents";

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
                            <Form onSubmit={onSubmit}>
                                <Label htmlFor="email">이메일</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    className="login_input"
                                    type="email"
                                    required
                                    placeholder="이메일"
                                    value={email}
                                    onChange={onChange}
                                />
                                <Label htmlFor="password">비밀번호</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    className="login_input"
                                    type="password"
                                    required
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={onChange}
                                />
                                <Input type="submit" value="로그인" className="btn_input" onClick={onLogin} />
                            </Form>
                            {error !== "" ? <Error>{error}</Error> : ""}
                        </Div>
                        <Div className="move">
                            <P>계정이 없으신가요?</P>
                            <ALink to="/signup" title="회원가입 하기" className="move_btn">
                                회원가입 하기
                            </ALink>
                        </Div>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Login;
