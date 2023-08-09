import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* ... your existing code ... */}

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          {/* ... your existing code ... */}

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${
                  expandedItemIndex === i ? "expanded" : "collapsed"
                }`}
                uuid={i}
                key={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    {/* ... your existing code ... */}
                    <AccordionItemState>
                      {({ expanded }) => {
                        if (expanded) {
                          setExpandedItemIndex(i);
                        } else if (expandedItemIndex === i) {
                          setExpandedItemIndex(null);
                        }
                      }}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
