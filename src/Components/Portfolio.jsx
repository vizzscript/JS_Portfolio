/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Tech.png";

const imageAltText = "Technologies";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WireShark",
    description:
      "Wireshark is a free and open-source packet analyzer used for network troubleshooting, analysis, this package is used to detect the specific interface such as Ethernet, WiFi, LAN etc packet data obtained from the wireshark tool.",
    url: "https://www.npmjs.com/package/wireshark",
  },
  {
    title: "Books Record Management",
    description:
      "This is a book record management API Backened for the management of records and books",
    url: "https://github.com/vizzscript/Book-record-management-10567",
  },
  {
    title: "NextHeirs",
    description:
      "Blockchain based inheritance management system using quantum resistant involves the creation of a blockchain system that handles the management of wills and inheritance. It aims to provide a secure and transparent platform for the distribution of assets according to a person's will.",
    url: "https://github.com/vizzscript/NextHeirs",
  },
  {
    title: "V-Folio",
    description:
      "This is my personal portfolio site made by using React.js and TailwindCSS included all the projects made and my first resume since 2022. ",
    url: "https://vratik-zade.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
