import React from "react";
import classNames from "classnames";
import { Placeholder } from "react-bootstrap";

const Skeleton = ({ config, className, ...rest }) => {
  return (
    <div className={classNames(className)} {...rest}>
      {config.map((attributes, idx) => {
        if (attributes.button)
          return <Placeholder.Button key={idx} {...attributes} />;
        return <Placeholder key={idx} {...attributes} />;
      })}
    </div>
  );
};

export default Skeleton;
