import React from "react";
import useAuth from "../hooks/useAuth";
import { Form, Input, Label, Section, H2, Container, Inner, Div, H3, P, ALink, Error, Switcher } from "../styledComponents";

const Signup = () => {
    const { email, password, name, onChange, onSubmit, error, onSignUp } = useAuth();

    return (
        <Section id="signup">
            <H2 className="blind">회원가입</H2>
            <Container>
                <Inner>
                    <Div className="signup">
                        <H3 className="signup_title">회원가입</H3>
                        <Div className="signup_form">
                            <Form onSubmit={onSubmit} role="form">
                                <Label htmlFor="name" className="blind">
                                    닉네임
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    className="signup_input"
                                    type="text"
                                    required
                                    placeholder="닉네임"
                                    value={name}
                                    onChange={onChange}
                                    aria-label="닉네임을 입력하세요."
                                />
                                <Label htmlFor="email" className="blind">
                                    이메일
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    className="signup_input"
                                    type="email"
                                    required
                                    placeholder="이메일"
                                    value={email}
                                    onChange={onChange}
                                    aria-label="이메일을 입력하세요."
                                />
                                <Label htmlFor="password" className="blind">
                                    비밀번호
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    className="signup_input"
                                    type="password"
                                    required
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={onChange}
                                    aria-label="비밀번호를 입력하세요."
                                />
                                <Input type="submit" value="회원가입" className="btn_input" onClick={onSignUp} aria-label="회원가입 하기" />
                            </Form>
                            {error !== "" ? <Error>{error}</Error> : ""}
                        </Div>
                        <Switcher>
                            <P>이미 계정이 있으신가요?</P>
                            <ALink to="/login" title="로그인 하기" className="move_btn" role="link" aria-label="로그인 페이지로 이동">
                                로그인 하기
                            </ALink>
                        </Switcher>
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Signup;
