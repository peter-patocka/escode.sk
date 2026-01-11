import {FC} from "react";
import classNames from "classnames";
import css from './HeadlineSection.module.css'
import escodeLogo from "../assets/escode-logo.png"

export const HeadlineSection: FC = () => {
      return (
        <>
          <section className={classNames("u-clearfix u-image u-section-1", css.headlineSection)} id="sec-3fbc">
            <div className="u-clearfix u-sheet u-sheet-1">
              <img 
                src={escodeLogo} 
                alt="" 
                className="u-image u-image-contain u-image-default u-image-1"
                data-aos="fade-up"
                data-aos-delay="0"
              />
                <div 
                  className="u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-group-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-middle-xs">
                    <h1 
                      className="u-align-center u-custom-font u-font-oswald u-text u-text-body-alt-color u-title u-text-1"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Escode
                    </h1>
                    <p 
                      className="u-align-center u-text u-text-body-alt-color u-text-2"
                      data-aos="fade-up"
                      data-aos-delay="280"
                    >
                      Software Development,<br />Testing and Consulting<br />Services
                    </p>
                    <div 
                      className="u-border-10 u-border-palette-1-base u-line u-line-horizontal u-line-1"
                      data-aos="fade-up"
                      data-aos-delay="360"
                    ></div>
                  </div>
                </div>
            </div>
          </section>
        </>
    );
};