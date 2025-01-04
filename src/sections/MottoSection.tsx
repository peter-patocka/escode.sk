import css from "./MottoSection.module.css";
import {FC, useCallback, useEffect, useState} from "react";
import classNames from "classnames";
import {animated, useSpringRef, useTransition} from "@react-spring/web";

const data: MottoListItemProps[] = [
  {
    text: "A plan is the example of what could happen, not a prediction of what will happen.",
    author: "Kent Beck",
    theme: "Software Testing"
  },
  {
    text: "The only way to go fast, is to go well.",
    author: "Robert C. Martin",
    theme: "Clean Architecture"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    theme: "Software Development"
  },
  {
    text: "Quality is a product of a conflict between programmers and testers.",
    author: "Yegor Bugayenk",
    theme: "Quality Assurance"
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    theme: "Programming"
  }
];

export const MottoSection: FC = () => {
  const MOTTO_CHANGE_SECONDS = 7;
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef()

    const slideToNextItem = useCallback(()  => {
      setIndex(state => (state + 1) % data.length)
    }, [setIndex]);

    useEffect(() => {
        const timer = setInterval(() => {
            slideToNextItem();
        }, MOTTO_CHANGE_SECONDS * 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, [slideToNextItem]);

  useEffect(() => {
    transRef.start()
  }, [transRef, index])

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });

    return (
        <section className="u-black u-clearfix u-section-2" id="sec-52fe">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className={classNames("u-align-center u-container-style u-group u-group-1", css.mottoList)} onClick={() => slideToNextItem()}>
                  {transitions((style, i) => (
                    <animated.div style={style} className={css.mottoListItem}>
                      <MottoListItem
                        text={data[i].text}
                        author={data[i].author}
                        theme={data[i].theme}
                      />
                    </animated.div>
                  ))}
                </div>
            </div>
        </section>
    );
};

interface MottoListItemProps {
    text: string;
    author: string;
    theme: string;
}

const MottoListItem = (props: MottoListItemProps) => (
  <div className="u-container-layout u-container-layout-1">
      <p className="u-text u-text-1">
          {props.text}
      </p>
      <p className="u-text u-text-1 u-align-left u-60-percent">
          -{props.author}
      </p>
      <h2 className="u-custom-font u-font-oswald u-text u-text-2">{props.theme}</h2>
  </div>
);