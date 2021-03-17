import React, {useState} from "react";
import styled from "styled-components";
import {Box, Para, Row} from "./index";

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

interface TabControllerButtonProps {
    active?: boolean;
}

const TabControllerButton = styled.button<TabControllerButtonProps>`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(242,244,242,0.1);
      padding: 0.4rem 1rem;
      font-weight: 500;
      border: 0;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      cursor:pointer;
      border-bottom :${props => props.active ? '2px solid #111111' : '2px solid transparent'};
      
      &:hover {
        background-color: #cccccc;
      }
`;

export const Tabs = () => {

    const [activeTab, setActiveTab] = useState<string>();

    const onChange = (e: any) => {
        setActiveTab(e.currentTarget.name);
    }

    return (
        <TabsWrapper>
            <Row full={true}>
                <TabControllerButton
                    name="about"
                    onClick={onChange}
                    active={activeTab === "about"}
                >About</TabControllerButton>
                <Box width={0.4}/>
                <TabControllerButton
                    name="terms_and_conditions"
                    onClick={onChange}
                    active={activeTab === "terms_and_conditions"}
                >Terms & Conditions</TabControllerButton>
                <Box width={0.4}/>
                <TabControllerButton
                    name="disclaimer"
                    onClick={onChange}
                    active={activeTab === "disclaimer"}
                >Disclaimer</TabControllerButton>
            </Row>
            <Row padding={1} full={true}>
                <Para>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae distinctio eum itaque,
                    perspiciatis quisquam rem sunt unde? Corporis, cum dolorem doloremque doloribus facilis illo
                    incidunt inventore iusto, magnam necessitatibus nemo quae ratione sed soluta vero? Consectetur
                    dolore doloribus dolorum illum inventore odio perspiciatis provident quibusdam quidem! Aliquam
                    dignissimos distinctio iusto, nesciunt placeat qui quibusdam voluptatum. Cum earum fuga natus
                    quaerat ratione repellat vel voluptas! Accusamus adipisci alias animi aspernatur atque aut autem
                    doloribus ducimus, et hic illum labore minus nam nesciunt pariatur provident quia quibusdam ratione
                    saepe sed tenetur totam veniam? Asperiores autem culpa debitis distinctio, ea est eum eveniet
                    excepturi, exercitationem facilis, fugit inventore labore laboriosam magni molestias nam nesciunt
                    nobis nulla provident quos repudiandae sint veniam? Accusantium architecto dolor dolorem dolores eos
                    eum incidunt laborum magni, nam nihil quam rem saepe temporibus. Alias cupiditate delectus deleniti
                    dignissimos dolorem ducimus ex impedit, ipsam laboriosam minima nam numquam officiis perspiciatis
                    porro qui suscipit tempora temporibus tenetur velit voluptates. Accusamus assumenda blanditiis
                    maiores, nemo possimus recusandae sapiente similique sint velit. Aliquid dicta eaque laborum
                    necessitatibus non reiciendis repellat repudiandae. Aliquid amet, beatae debitis delectus
                    dignissimos doloribus dolorum exercitationem explicabo illo illum impedit mollitia, quae quibusdam
                    rerum, totam veniam vero vitae?
                </Para>
            </Row>
        </TabsWrapper>
    );
}