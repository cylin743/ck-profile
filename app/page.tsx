"use client"
import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import "./i18n"
import Avatar from '@mui/material/Avatar';


export default function Home() {
  // const { t } = useTranslation();
  const { t, i18n } = useTranslation();
  i18n.changeLanguage("zh")
    
  // const handleChangeLanguage = () => {
  //     i18n.changeLanguage('zh')
  // }
  
  return (
    <main>
      <div className="menu-container">
        <div className="profile-name">CK Lin</div>
        <div className="menu-list">
          <div className="menu"><a href="#about_me">{t("About")}</a></div>
          <div className="menu">{t("Portfolio")}</div>
          <div className="menu">{t("Experience")}</div>
          <div className="menu">{t("Education")}</div>
          <div className="menu">{t("Contact")}</div>
        </div>
      </div>
      <div className="about-me-container" id="about_me">
        <Avatar sx={{
          height: "250px",
          width: "250px"
        }} alt="CK Lin" src="/images/test.jpg"/>
        <div className="about-me">
          <div className="title">CK Lin</div>
          <div className="subtitle">Senior Full-stack Engineer</div>
          <div className="description">{t("about-me")}</div>
        </div>
      </div>
    </main>
  );
}


