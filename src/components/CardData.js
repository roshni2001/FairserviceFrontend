import React, { useEffect } from "react";
import Card from "./Card";
import "./styles/card.css";
import background from "../images/Marketing Services.jpg";
import GraphicDes from "../images/Graphic Design ServiceX.jpg"

import shopify from "../images/Shopify Store Developer.jpg";
import web from '../images/Web Development ServiceX.jpg'
import ContentWriting from '../images/Writing Services.jpg'
import videoEditing from '../images/Video Editing.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
const CardData = () => {
  const card_Data = [
    {
      title: "Graphic Design Services",
      text: "At FAIR ServiceX, harness the impact of visual storytelling through our Graphic Design Services. Elevate your brand on social media with captivating designs. From unique logos to compelling company profiles, we craft visuals that resonate. Our services include eye-catching banners, posters, and informative brochures tailored to make your brand stand out in the digital landscape.",
      image: `${GraphicDes}`,
      link: "/category/graphicdesigning",
    },
    {
      title: "Marketing Services",
      text: "Fuel brand growth with FAIR ServiceX Marketing Services. Our expert strategies encompass Digital Marketing, Social Media Marketing, SEO, and App Store Optimization. Seamlessly manage social media with our Social Media Management and engage precision through targeted Email Marketing. We are your partners in navigating the dynamic digital landscape, turning visions into reality.",
      image: `${background}`,
      link: "/category/marketing",
    },
    {
      title: "Shopify Development",
      text: "Confidently embark on your e-commerce journey with our expert Shopify Services. We specialize in seamless Store Development, ensuring your online storefront exceeds user expectations. Elevate your brand with captivating Store Design, integrate Google Merchant Center for enhanced visibility, and drive targeted traffic with strategic Google Ads campaigns. We're your committed Shopify experts transforming digital storefronts into thriving e-commerce destinations.",
      image: `${shopify}`,
      link: "/category/shopifydev",
    },
    
    {
      title: "Video Editing",
      text: "Immerse your brand in compelling visual storytelling through our Video Editing services. Elevate your narrative with meticulously crafted videos that captivate and resonate deeply. Our skilled editors infuse creativity and precision into every frame, ensuring your message resonates with impactful storytelling. Whether it's promotional videos or engaging social media content, we excel in bringing your vision to life and enhancing your brand's digital presence with our expert touch.",
      image: `${videoEditing}`,
      link: "/category/videoediting",
    },
    {
      title: "Writing Services",
      text: "Dive into impactful communication with our Writing Services. Crafted by our team, our content tells your brand's story authentically. From engaging website content to persuasive copy, we elevate your online presence. Unlock the power of effective communication with our strategic Copywriting expertise, dedicated to exceeding your expectations in building a strong digital identity.",
      image: `${ContentWriting}`,
      link: "/category/writingservices",
    },
    {
      title: "Web Development",
      text: "Unlock your online potential with cutting-edge Web Development. Dive into dynamic WordPress sites tailored to your needs. Harness MERN stack for robust web apps. Our Full-stack Stack Development ensures seamless user experiences. Committed to innovation, we transform ideas into digital reality, reflecting your brand essence. Explore limitless possibilities with us as your trusted web development partner",
      image: `${web}`,
      link: "/category/webdevelopment",
    },
    // {
    //   title: "Card 4",
    //   text: "This is the fourth card",
    //   image: `${background}`,
    // },
  ];
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div style={{textAlign:'center', overflowY:'hidden'}}>
      {/* <h3 className="cardMainHeading">OUR SERVICES</h3> */}
      {/* <h1 className='allText' style={{color:'var(--color-primary)', textAlign:'center'}}><span className='horizontalLine'></span>OUR SERVICES</h1> */}
      <h1 className='allText animated-buttonH'> <span></span>
  <span></span>
  <span></span>
  <span></span>OUR SERVICES</h1>
  
      <div className="card-container" data-aos="fade-up">
        {card_Data.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardData;
