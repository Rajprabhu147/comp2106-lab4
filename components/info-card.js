import { useMemo } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";

const InfoCard = ({ homeSaleRentId, homeSaleRentText, propWidth }) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-large-400"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[32px] font-semibold">
            {homeSaleRentText}
          </div>
          <div className="relative text-base leading-[24px] text-gray-400 text-left flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <Button
            className="relative"
            type="primary"
            size="middle"
            shape="default"
          >
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
