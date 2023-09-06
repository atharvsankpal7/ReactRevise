import React from "react";
import PropTypes from "prop-types";

const AccordionItem = (props) => {
    return (
        <div className="accordion-item" >
            <h2 className="accordion-header">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    {props.heading}
                </button>
            </h2>
            <div
                id={"collapse"}
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <strong>{props.title}</strong>, {props.innerText}
                </div>
            </div>
        </div>
    );
};

const About = (props) => {
    let AccordionProps = {
        heading: "Heading",
        title: "Title",
        innerText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    };

    return (
        <div className="container">
            <div className="accordion" id="accordionExample">
                <AccordionItem {...AccordionProps} />
                <AccordionItem {...AccordionProps} />
                <AccordionItem {...AccordionProps} />
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};

About.propTypes = {};

export default About;
