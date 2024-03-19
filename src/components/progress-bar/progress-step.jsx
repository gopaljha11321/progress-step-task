import React from "react";
import "./styles.css";
import CheckIcon from "../Assets/svgs/check";
import PropTypes from "prop-types";

const ProgressStep = ({
  label,
  onClick,
  index,
  description,
  isLeave,
  currentIndex,
  direction,
}) => {
  return (
    <>
      {direction !== "vertical" ? (
        <div className="custom-div">
          <div
            style={{
              ...(!index && { justifyContent: "flex-end" }),
            }}
            className="inner-div"
          >
            {index !== 0 && (
              <div
                className="left-border"
                {...(index <= currentIndex && {
                  style: { borderColor: "#47B647" },
                })}
              />
            )}

            <div
              className="circle"
              onClick={onClick}
              {...(index < currentIndex
                ? { style: { background: "#47B647" } }
                : index === currentIndex && {
                    style: {
                      background: "white",
                      border: "1px #47B647 solid",
                      color: "#47B647",
                      height: "22px",
                    },
                  })}
            >
              {index < currentIndex ? (
                <CheckIcon width={14} height={14} color="white" />
              ) : (
                index
              )}
            </div>
            {!isLeave && (
              <div
                className="right-border"
                {...(index <= currentIndex && {
                  style: { borderColor: "#47B647" },
                })}
              />
            )}
          </div>
          <div
            className="label test"
            {...(index < currentIndex
              ? { style: { color: "#47B647", fontWeight: "600" } }
              : index === currentIndex && {
                  style: {
                    fontWeight: "600",
                  },
                })}
          >
            {label}
          </div>
          <div className="description">{description}</div>
        </div>
      ) : (
        <div className="custom-div-vertical-progress">
          <div className="inner-div-vertical-progress">
            <div
              className="circle"
              onClick={onClick}
              {...(index < currentIndex
                ? { style: { background: "#47B647" } }
                : index === currentIndex && {
                    style: {
                      background: "white",
                      border: "1px #47B647 solid",
                      color: "#47B647",
                      height: "22px",
                    },
                  })}
            >
              {index < currentIndex ? (
                <CheckIcon width={14} height={14} color="white" />
              ) : (
                index
              )}
            </div>
            {!isLeave && (
              <div
                className="bottom-border"
                {...(index <= currentIndex && {
                  style: { borderColor: "#47B647" },
                })}
              />
            )}
          </div>
          <div>
            <div
              className="label test"
              {...(index < currentIndex
                ? { style: { color: "#47B647", fontWeight: "600" } }
                : index === currentIndex && {
                    style: {
                      fontWeight: "600",
                    },
                  })}
            >
              {label}
            </div>
            <div className="description">{description}</div>
          </div>
        </div>
      )}
    </>
  );
};
ProgressStep.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  index: PropTypes.number.isRequired,
  description: PropTypes.string,
  isLeave: PropTypes.bool,
  currentIndex: PropTypes.number.isRequired,
};

export default ProgressStep;
