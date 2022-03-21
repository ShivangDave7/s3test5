import React from "react";

import { Row } from "components/Row";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";

const BuymeaCoffeePage = () => {
  return (
    <Row
      className="bg-white_A700 font-gilroy items-center ml-[auto] mr-[auto] w-[100%]"
      id="3:3"
      width={1366}
      left={0}
      right={0}
      compType="Row"
    >
      <Column
        className="2xl:mb-[95px] 2xl:ml-[52px] 2xl:mt-[94px] 3xl:mb-[115px] 3xl:ml-[63px] 3xl:mt-[113px] justify-start lg:mb-[74px] lg:ml-[40px] lg:mt-[73px] mb-[91px] ml-[50px] mt-[90px] w-[39%] xl:mb-[85px] xl:ml-[46px] xl:mt-[84px]"
        id="3:4"
        width={530}
        left={50}
        right={0}
        compType="Column"
      >
        <Text
          className="2xl:text-fs50 3xl:mr-[12px] 3xl:text-fs60 font-bold font-gilroy lg:mr-[8px] lg:text-fs39 mr-[10px] text-black_900 text-fs4774881362915039 text-left xl:mr-[9px] xl:text-fs44"
          id="3:6"
          width={182}
          left={0}
          right={10}
          compType="Text"
        >{`Hello 👋`}</Text>
        <Text
          className="2xl:mt-[36px] 3xl:mt-[44px] 3xl:text-fs20 font-bold font-poppins lg:mt-[28px] lg:text-fs13 mt-[35px] self-stretch text-black_900 text-fs16 text-left w-[100%] xl:mt-[32px] xl:text-fs15"
          id="3:5"
          width={530}
          left={0}
          right={0}
          compType="Text"
        >
          {
            <>
              {`I hope everyone is safe and sound.`}
              <br />
              {`I designed different type of lending pages, application. it can help others to develop more ideas from this. I keep it simple and minimal. It can also help you find different options in exploring and improving your skills.`}
              <br />
              {`I am available for new projects. I hope you show me your support 😄`}
              <br />
              {`I wish you luck,`}
              <br />
              {`Drax❤️`}
            </>
          }
        </Text>
        <Column
          className="2xl:mt-[37px] 3xl:mt-[45px] items-center lg:mt-[29px] mt-[35.619995px] mx-[auto] self-stretch w-[100%] xl:mt-[33px]"
          id="376"
          width={530}
          left={0}
          right={0}
          compType="Column"
        >
          <Image
            src="img_vector_186.svg"
            className="2xl:h-[27px] 3xl:h-[32px] h-[24.75px] lg:h-[21px] mx-[auto] object-contain w-[3%] xl:h-[24px]"
            id="3:11"
            width={18}
            left={256}
            right={256}
            compType="Image"
            alt="Vector"
          />
          <Stack
            className="2xl:h-[95px] 2xl:mt-[46px] 3xl:h-[114px] 3xl:mt-[55px] font-poppins h-[90px] lg:h-[74px] lg:mt-[35px] mt-[43.630005px] mx-[auto] self-stretch w-[100%] xl:h-[85px] xl:mt-[40px]"
            id="375"
            width={530}
            left={0}
            right={0}
            compType="Stack"
          >
            <Image
              src="img_frame.png"
              className="2xl:h-[95px] 3xl:h-[114px] absolute h-[90px] inset-[0] lg:h-[74px] object-cover self-stretch w-[100%] xl:h-[85px]"
              id="3:8"
              width={530}
              left={0}
              right={0}
              compType="Image"
              alt="Frame"
            />
            <Text
              className="2xl:text-fs26 3xl:text-fs31 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs20 m-[auto] text-fs25 text-left text-white_A700 underline w-[max-content] xl:text-fs23"
              id="3:10"
              width={208}
              left={161}
              right={161}
              compType="Text"
            >{`Buy me a Coffee`}</Text>
          </Stack>
        </Column>
      </Column>
      <Image
        src="img_frame_1.svg"
        className="2xl:h-[576px] 2xl:ml-[53px] 2xl:my-[117px] 3xl:h-[692px] 3xl:ml-[64px] 3xl:my-[140px] h-[546px] lg:h-[448px] lg:ml-[41px] lg:my-[91px] ml-[51px] my-[111px] object-contain w-[54%] xl:h-[513px] xl:ml-[47px] xl:my-[104px]"
        id="3:12"
        width={735}
        left={51}
        right={0}
        compType="Image"
        alt="Frame"
      />
    </Row>
  );
};

export default BuymeaCoffeePage;
