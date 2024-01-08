import React from "react";
import { styled } from "styled-components";

const Form = styled.form``;
const Input = styled.input``;
const BtnInput = styled.input``;

const CreateAccount = () => {
    return (
        <section id="singup">
            <div className="inner">
                <div className="container">
                    <div className="signup">
                        <Form>
                            <Input name="name" placeholder="Name" type="text" required />
                            <Input name="email" placeholder="Email" type="email" required />
                            <Input name="password" placeholder="Password" type="password" required />
                            <BtnInput type="submit" value="Create Account" />
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateAccount;
