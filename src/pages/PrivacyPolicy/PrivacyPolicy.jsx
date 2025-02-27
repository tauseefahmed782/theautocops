import React from "react";
import style from "./PrivacyPolicy.module.css";
import bg from "../../Images//banner-all.jpg";
// import FaCheckCircle, FaShieldAlt, FaSyncAlt, FaTools
import {ReactComponent as CheckIcon} from "../../Images/privacyIcons/check-circle.svg"
import {ReactComponent as ShieldIcon} from "../../Images/privacyIcons/shield-off.svg"
import {ReactComponent as SyncIcon} from "../../Images/privacyIcons/refresh-cw.svg"
import {ReactComponent as ToolIcon} from "../../Images/privacyIcons/tool.svg"
import { Helmet } from "react-helmet";

const termsList = [
  {
    text: "When you visit our site­ or make a purchase from us, you are participating in our 'Service' and agreeing to adhere to the following terms and conditions ('Terms of Service,' 'Terms'). These Terms of Service apply to all users of the site, including those­ who browse, vendors, customers, merchants, and content contributors.",
      icon: <CheckIcon/>
  },
  {
    text: "Before accessing or using our website, we kindly ask that you carefully read and comprehend these Terms of Service. If you do not agree with all the terms and conditions defined in this agreement, please refrain from accessing the website or utilizing our services.",
      icon: <ShieldIcon />
  },
  {
    text: "By using our website, you are accepting and agreeing to be bound by these Terms of Service. Any new features or tools added on our website will also be subject to these Terms of Service. You can always review the most current version of the Terms of Service on this page.",
      icon: <SyncIcon />
  },
  {
    text: "We reserve the right to update, change, or replace any part of these Terms of Service by posting updates or changes on our website. It is your responsibility to check this page periodically for updates. Your continued access or use of the website after any changes have been posted means that you accept those changes.",
      icon: <ToolIcon />
  },
  {
    text: "We prioritize your privacy and security. Your personal information is kept safe and secure, as we are fully dedicated to protecting it. To have a comprehensive understanding of how we collect, use, and safeguard your data, please take the time to thoroughly review our Privacy Policy.",
      icon: <ShieldIcon />
  },
];
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>The Autocops	 - Privacy Policy	</title>
       
        </Helmet>
    <div
      className="container-fluid"
      style={{ position: "relative", padding: "0px" }}
    >
      <div className={` ${style.Container}`}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "contain",
            display: "flex",
            alignItems: "center",
          }}
          className={style.mainWrapper}
        >
          <div className="container d-flex  flex-column  justify-content-start align-items-start">
            <h2 className={style.subHeading}>{`Privacy Policy`}</h2>
            <h3 className={style.heading}>{"THE AUTOCOPS"}</h3>
            </div>
        </div>
      </div>
    </div>
    <div className={`container ${style.wrapperContainer}`}>
      <div>
      <p style={{fontSize:'16px' , color:'#333'}}
              className="mb-4"
            >{`This website, http://www.theautocops.com/ (referred to as "we," "us," or "our"), is operated by The Auto Cops. We offer this website, along with all the information, tools, and services available on this site, conditioned upon your acceptance of our terms, conditions, policies, and notices as described below.`}</p>
         
      </div>
    {termsList?.map((item, index) => (
      
          <div key={index} className={style.listItem}>
            
            <i className={style.icon} >{item.icon}</i>
            <p className={style.text1}>{item.text}</p>
          </div>
        ))}

    </div>
    </>
  );
};

export default PrivacyPolicy;
