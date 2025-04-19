import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./homepage.css";
import workiTheme1 from "/Users/igorpiaskowy/Desktop/wory/wory_react/src/assets/worki_theme.jpg";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div>
        <Header/>
        <div>
          <img className="worki-theme" alt="Worki theme" src={workiTheme1} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante. ( tu piszesz o projekcie jakim są worki
            i wgl)
          </p>

          <div>w.wory</div>
        </div>
        <div>
          <div>w.wory</div>

          <div>avaliable</div>

          <div/>

          <div/>

          <div/>

          <div/>

          <div/>

          <div>Color:</div>

          <div>one size</div>

          <div>diameter: 17</div>

          <div>height: 36</div>

          <div>DARK PURPLE</div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. ( tu piszesz
            o materiale i składzie
          </p>
        </div>
        <Footer
          className="footer-instance"
          group="image.png"
          line="image.svg"
        />
      </div>
    </div>
  );
};
