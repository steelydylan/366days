import * as React from "react";
import LazyBackground from "@/components/utils/lazy-background";

type Props = {
  title?: string;
};

export default (props: Props) => {
  return (
    <div className="uc-hero">
      <LazyBackground
        className="uc-hero-bg"
        url="https://source.unsplash.com/1600x900/?food"
      />
      <h1 className="uc-hero-title">{props.title ? props.title : "366days"}</h1>
    </div>
  );
};
