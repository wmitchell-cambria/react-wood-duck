import React from "react";

const Template = ({ children }) => {
  const style = "/css/site.css";

  return (
    <div className="col-md-12">
      <link rel="stylesheet" type="text/css" href={style} />
      <title>Preview Layouts</title>
      <div class="row">
        <div className="col-md-12">{children}</div>
      </div>
    </div>
  );
};

module.exports = Template;
