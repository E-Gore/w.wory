import React from "react";
import group from "/Users/igorpiaskowy/Desktop/wory/wory_react/src/assets/Asset 1.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="text-wrapper">Founded by</div>

      <div className="div">Navigation</div>

      <div className="text-wrapper-2">Shop</div>

      <div className="text-wrapper-3">About me</div>

      <div className="text-wrapper-4">Contact</div>

      <div className="text-wrapper-5">Instagram</div>

      <div className="text-wrapper-6">Ola Paleta</div>

      <div className="text-wrapper-7">based in Cracow</div>

      <div className="logo-SVG-grouped">
        <img className="group" alt="Group" src={group} />
      </div>

      <p className="p">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante.
      </p>

      
      <div className="text-wrapper-8">Designed by Igor Piaskowy</div>
    </div>
  );
};
