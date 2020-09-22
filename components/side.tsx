import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  // React.useEffect(() => {
  //   // @ts-ignore
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // }, []);

  return (
    <>
      <div>
        <div className="uc-card _orig-height">
          <div className="uc-card-header">
            <div
              className="uc-card-icon"
              style={{
                backgroundImage: "url(/images/mayo.jpg)"
              }}
            />
            <div className="uc-card-title">pomi</div>
          </div>
          <div className="uc-card-body">
            <p>ブロガー</p>
          </div>
        </div>
      </div>
    </>
  );
};
