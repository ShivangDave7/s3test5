import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Button } from "components/Button";

const AbstractSignUpPage = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/contact");

  return (
    <Stack
      className="2xl:h-[811px] 3xl:h-[973px] bg-white_A700 h-[768px] lg:h-[630px] ml-[auto] mr-[auto] w-[100%] xl:h-[721px]"
      id="71"
      width={1366}
      left={0}
      right={0}
      compType="Stack"
    >
      <div
        className="2xl:h-[811px] 3xl:h-[973px] absolute bg-white_A700_cc h-[768px] inset-y-[0] left-[1px] lg:h-[630px] right-[0] w-[100%] xl:h-[721px]"
        id="168:770"
        width={1365}
        left={1}
        right={0}
        compType="View"
      ></div>
      <Row
        className="absolute h-[max-content] inset-[0] justify-center m-[auto] px-[0] w-[93%]"
        id="70"
        width={1266}
        left={50}
        right={50}
        compType="Row"
      >
        <Stack
          className="2xl:h-[705px] 3xl:h-[846px] h-[668px] lg:h-[548px] w-[29%] xl:h-[627px]"
          id="81"
          width={366}
          left={0}
          right={0}
          compType="Stack"
        >
          <Image
            src="img_maskgroup.svg"
            className="2xl:h-[705px] 3xl:h-[846px] absolute h-[668px] inset-[0] lg:h-[548px] object-cover self-stretch w-[100%] xl:h-[627px]"
            id="168:772"
            width={366}
            left={0}
            right={0}
            compType="Image"
            alt="MaskGroup"
          />
          <Column
            className="2xl:bottom-[271px] 2xl:left-[37px] 3xl:bottom-[325px] 3xl:left-[45px] absolute bottom-[257px] font-poppins justify-start left-[36px] lg:bottom-[210px] lg:left-[29px] w-[67%] xl:bottom-[241px] xl:left-[33px]"
            id="78"
            width={247}
            left={36}
            right={0}
            compType="Column"
          >
            <Text
              className="2xl:text-fs61 3xl:mr-[12px] 3xl:text-fs73 font-bold lg:mr-[8px] lg:text-fs47 mr-[10px] text-fs58 text-left text-white_A700 xl:mr-[9px] xl:text-fs54"
              id="168:778"
              width={188}
              left={0}
              right={10}
              compType="Text"
            >{`Lorem`}</Text>
            <Text
              className="3xl:text-fs22 font-medium lg:text-fs14 self-stretch text-fs18 text-left text-white_A700 xl:text-fs16"
              id="168:779"
              width={247}
              left={0}
              right={0}
              compType="Text"
            >{`Lorem ipsum dolor sit amet`}</Text>
          </Column>
        </Stack>
        <Column
          className="2xl:mb-[54px] 3xl:mb-[65px] font-poppins justify-start lg:mb-[42px] mb-[52px] w-[55%] xl:mb-[48px]"
          id="77"
          width={700}
          left={0}
          right={0}
          compType="Column"
        >
          <Text
            className="2xl:ml-[415px] 3xl:ml-[498px] 3xl:text-fs22 font-medium lg:ml-[323px] lg:text-fs14 ml-[394px] text-fs18 text-gray_400 text-right xl:ml-[369px] xl:text-fs16"
            id="168:771"
            width={306}
            left={394}
            right={0}
            compType="Text"
          >
            <span className="text-gray_400 text-fs18 font-poppins text-right font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs22">
              <>{`Already have an account?  `}</>
            </span>
            <span className="text-teal_A400 text-fs18 font-poppins text-right font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs22">
              <>{`Sign In`}</>
            </span>
          </Text>
          <Column
            className="2xl:mt-[27px] 3xl:mt-[32px] items-center lg:mt-[21px] mt-[26px] mx-[auto] self-stretch w-[100%] xl:mt-[24px]"
            id="82"
            width={700}
            left={0}
            right={0}
            compType="Column"
          >
            <Column
              className="font-poppins justify-start self-stretch w-[100%]"
              id="76"
              width={700}
              left={0}
              right={0}
              compType="Column"
            >
              <Text
                className="2xl:text-fs25 3xl:mr-[12px] 3xl:text-fs30 font-medium lg:mr-[8px] lg:text-fs19 mr-[10px] text-bluegray_900 text-fs24 text-left xl:mr-[9px] xl:text-fs22"
                id="168:781"
                width={210}
                left={0}
                right={10}
                compType="Text"
              >{`Create Account`}</Text>
              <Text
                className="2xl:mt-[31px] 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs17 font-medium lg:mr-[8px] lg:mt-[24px] lg:text-fs11 mr-[10px] mt-[30px] text-fs14 text-gray_400 text-left xl:mr-[9px] xl:mt-[28px] xl:text-fs13"
                id="168:782"
                width={45}
                left={0}
                right={10}
                compType="Text"
              >{`Name`}</Text>
              <Input
                className="3xl:mr-[12px] 3xl:mt-[12px] bg-gray_50 border border-gray_400 border-solid lg:mr-[8px] lg:mt-[8px] mr-[10px] mt-[10px] placeholder:text-gray_400 rounded-radius10 w-[79%] xl:mr-[9px] xl:mt-[9px]"
                id="2"
                width={550}
                left={0}
                right={10}
                compType="EditText"
                name="Group2"
                placeholder="Name"
              ></Input>
              <Text
                className="2xl:mt-[31px] 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs17 font-medium lg:mr-[8px] lg:mt-[24px] lg:text-fs11 mr-[10px] mt-[30px] text-fs14 text-gray_400 text-left xl:mr-[9px] xl:mt-[28px] xl:text-fs13"
                id="168:783"
                width={41}
                left={0}
                right={10}
                compType="Text"
              >{`Email`}</Text>
              <Input
                className="3xl:mr-[12px] 3xl:mt-[12px] bg-gray_50 border border-gray_400 border-solid lg:mr-[8px] lg:mt-[8px] mr-[10px] mt-[10px] placeholder:text-gray_400 rounded-radius10 w-[79%] xl:mr-[9px] xl:mt-[9px]"
                id="4"
                width={550}
                left={0}
                right={10}
                compType="EditText"
                name="Group4"
                placeholder="Email"
              ></Input>
              <Text
                className="2xl:mt-[31px] 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs17 font-medium lg:mr-[8px] lg:mt-[24px] lg:text-fs11 mr-[10px] mt-[30px] text-fs14 text-gray_400 text-left xl:mr-[9px] xl:mt-[28px] xl:text-fs13"
                id="168:784"
                width={71}
                left={0}
                right={10}
                compType="Text"
              >{`Password`}</Text>
              <Input
                className="3xl:mr-[12px] 3xl:mt-[12px] bg-gray_50 border border-gray_400 border-solid lg:mr-[8px] lg:mt-[8px] mr-[10px] mt-[10px] placeholder:text-gray_400 rounded-radius10 w-[79%] xl:mr-[9px] xl:mt-[9px]"
                id="6"
                width={550}
                left={0}
                right={10}
                compType="EditText"
                name="Group6"
                placeholder="Password"
              ></Input>
              <Column
                className="2xl:mt-[28px] 3xl:mt-[34px] items-center lg:mt-[22px] mt-[27px] mx-[auto] self-stretch w-[100%] xl:mt-[25px]"
                id="83"
                width={700}
                left={0}
                right={0}
                compType="Column"
              >
                <Row
                  className="font-poppins items-center justify-start mx-[auto] self-stretch w-[100%]"
                  id="72"
                  width={700}
                  left={0}
                  right={0}
                  compType="Row"
                >
                  <Image
                    src="img_bichecksquare.svg"
                    className="2xl:h-[22px] 3xl:h-[26px] 3xl:mb-[5px] h-[20px] lg:h-[17px] lg:mb-[3px] lg:mt-[2px] mb-[4px] mt-[3px] object-contain w-[3%] xl:h-[19px] xl:mb-[3px] xl:mt-[2px]"
                    id="168:792"
                    width={20}
                    left={0}
                    right={0}
                    compType="Image"
                    alt="bichecksquare"
                  />
                  <Text
                    className="2xl:mr-[335px] 3xl:ml-[12px] 3xl:mr-[402px] 3xl:text-fs22 font-medium lg:ml-[8px] lg:mr-[260px] lg:text-fs14 ml-[10px] mr-[318px] text-fs18 text-gray_400 text-left xl:ml-[9px] xl:mr-[298px] xl:text-fs16"
                    id="168:785"
                    width={352}
                    left={10}
                    right={318}
                    compType="Text"
                  >
                    <span className="text-gray_400 text-fs18 font-poppins text-left font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs22">
                      <>{`I agree to the `}</>
                    </span>
                    <span className="text-teal_A400 text-fs18 font-poppins text-left font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs22">
                      <>{`Terms`}</>
                    </span>
                    <span className="text-gray_400 text-fs18 font-poppins text-left font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs22">
                      <>{` and `}</>
                    </span>
                    <span className="text-teal_A400 text-fs18 font-poppins text-left font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs22">
                      <>{`Privacy Policy.`}</>
                    </span>
                  </Text>
                </Row>
              </Column>
              <Button
                className="common-pointer 2xl:mt-[80px] 2xl:px-[31px] 2xl:py-[14px] 2xl:text-fs25 3xl:mr-[12px] 3xl:mt-[96px] 3xl:px-[37px] 3xl:py-[17px] 3xl:text-fs30 bg-teal_A400 border-bw font-bold lg:mr-[8px] lg:mt-[62px] lg:px-[24px] lg:py-[11px] lg:text-fs19 mr-[10px] mt-[76px] px-[30px] py-[14.06px] rounded-radius10 text-center text-fs24 text-white_A700 w-[79%] xl:mr-[9px] xl:mt-[71px] xl:px-[28px] xl:py-[13px] xl:text-fs22"
                id="168:786"
                width={550}
                left={0}
                right={10}
                compType="Button"
                onClick={handleNavigate1}
              >{`Sign Up`}</Button>
            </Column>
          </Column>
        </Column>
      </Row>
    </Stack>
  );
};

export default AbstractSignUpPage;
