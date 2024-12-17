import { memo } from "react";

const ChildComp = ({ onClick }) => {
  console.log("child render");
  return (
    <>
      <button onClick={onClick}>Increase Count</button>
    </>
  );
};

export default memo(ChildComp);
