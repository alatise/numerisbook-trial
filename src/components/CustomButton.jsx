import { Button } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";

const CustomButton = ({
  text,
  onClick,
  className,
  "data-testid": dataTestId,
  variant = "primary",
}) => {
  const buttonClasses = classNames(
    "w-full h-12 mt-1 font-bold py-5 lg:py-2 px-12 rounded-full ant-button uppercase",
    {
      "bg-[#003EFF] text-white  hover:bg-blue-700": variant === "primary",
      "bg-white text-[#697598] border border-[#E3E6EF] hover:bg-blue-50":
        variant === "secondary",
    },
    className
  );

  return (
    <Button
      data-testid={dataTestId}
      htmlType="submit"
      onClick={onClick}
      className={buttonClasses}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default CustomButton;
