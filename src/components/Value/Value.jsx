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
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="Value" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Deliver</span>

          <span className="secondaryText">
            We are dedicated to providing the best services to our clients. Our mission is to make living spaces comfortable and stylish.
          </span>

          {/* Accordion */}
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
                    <AccordionItemState>
                      {({ expanded }) => {
                        if (expanded) {
                          setExpandedItemIndex(i);
                        } else if (expandedItemIndex === i) {
                          setExpandedItemIndex(null);
                        }
                      }}
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
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

// import React, { useState } from "react";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import data from "../../utils/accordion.jsx";
// import "./Value.css";

// const Value = () => {
//   const [expandedItemIndex, setExpandedItemIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     if (expandedItemIndex === index) {
//       setExpandedItemIndex(null);
//     } else {
//       setExpandedItemIndex(index);
//     }
//   };

//   return (
//     <section id="value" className="v-wrapper">
//       <div className="paddings innerWidth flexCenter v-container">
//         {/* ... */}
//         {/* Rest of your content */}
//         {/* ... */}
//         <div className="v-left">
//            <div className="image-container">
//              <img src="./value.png" alt="Value" />
//           </div>
//         </div>
//         {/* Accordion */}
//         <div className="flexColStart v-right">
//            <span className="orangeText">Our Value</span>

//            <span className="primaryText">Value We Deliver</span>

//            <span className="secondaryText">
//             We are dedicated to providing the best services to our clients. Our mission is to make living spaces comfortable and stylish.
//           </span>
//         <div className="accordion">
//           {data.map((item, index) => (
//             <div
//               className={`accordionItem ${
//                 expandedItemIndex === index ? "expanded" : "collapsed"
//               }`}
//               key={index}
//             >
//               <div
//                 className="flexCenter accordionButton"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="flexCenter icon">{item.icon}</div>
//                 <span className="primaryText">{item.heading}</span>
//                 <div className="flexCenter icon">
//                   <MdOutlineArrowDropDown
//                     size={20}
//                     className={
//                       expandedItemIndex === index ? "expanded-icon" : ""
//                     }
//                   />
//                 </div>
//               </div>
//               {expandedItemIndex === index && (
//                 <div className="accordionItemPanel">
//                   <p className="secondaryText">{item.detail}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Value;
