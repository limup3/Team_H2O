import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import Img from 'gatsby-image';
// C:\Users\lim_1\Desktop\Team_H2O\frontend\src\intro\Images\profile2.png
const AboutImg = ({ filename, alt }) => (
  <>
          <img 
          alt="profile"
          src='/Intro_images/profile3.jpg'
          />
  </>
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       images: allFile {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             childImageSharp {
  //               fixed(width: 350) {
  //                 ...GatsbyImageSharpFixed
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={(data) => {
  //     const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  //     if (!image) return null;

  //     const imageFixed = image.node.childImageSharp.fixed;
  //     return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />;
  //   }}
  // />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
