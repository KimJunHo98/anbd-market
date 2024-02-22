import React from "react";
import { Container, Div, H2, Img, Inner, Li, P, Section, Ul } from "../styledComponents";
import useFetchPickedItems from "../hooks/useFetchPickedItems";

const Mypick = () => {
    const { loading, pickedItems } = useFetchPickedItems();

    console.log(pickedItems);

    return (
        <Section id="myPick">
            <H2 className="blind">찜</H2>
            <Container>
                <Inner>
                    <Div className="my_pick">
                        {" "}
                        {loading ? (
                            <P>Loading...</P>
                        ) : (
                            <Ul>
                                {pickedItems.map((pick) => (
                                    <>
                                        <Li key={pick.id}>{pick.title}</Li>
                                        <Li>{pick.imgUrl && <Img src={pick.imgUrl[0]} alt={pick.title} />}</Li>
                                    </>
                                ))}
                            </Ul>
                        )}
                    </Div>
                </Inner>
            </Container>
        </Section>
    );
};

export default Mypick;
