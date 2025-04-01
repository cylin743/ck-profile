"use client"
import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import "./i18n"
import Image from 'next/image'
import Button from '@mui/material/Button';
import { PortfolioCard, EducationCard } from './card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/ck-profile';

function ExperienceCard(params:any) {
  const {company, title, date, children} = params
  console.log(params)
  return (<div className="experience-row">
    <div className="company">{company}</div>
    <div className="title">{title}</div>
    <div className="date">{date}</div>
    <div className="description">{children}</div>
  </div>)
}

export default function Home() {
  // const { t } = useTranslation();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("zh");
  const handleChangeLang = () => {
    if(lang === "zh"){
      setLang("en")
      i18n.changeLanguage(lang)
    }else{
      setLang("zh")
      i18n.changeLanguage(lang)
    }
  }
    
  // const handleChangeLanguage = () => {
  //     i18n.changeLanguage('zh')
  // }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    
  };
  
  return (
    <main>
      <div className="menu-container">
        <div className="profile-name">CK Lin</div>
        <div className="menu-list">
          <div className="menu"><a href="#about_me">{t("About")}</a></div>
          <div className="menu"><a href="#portfolio">{t("Portfolio")}</a></div>
          <div className="menu"><a href="#experience">{t("Experience")}</a></div>
          <div className="menu"><a href="#education">{t("Education")}</a></div>
          <div className="menu" onClick={handleChangeLang}><a>{t("lang")}</a></div>
        </div>
      </div>
      <div className="about-me-container" id="about_me">
        <Image className="avatar" width={250} height={250} alt="CK Lin" src={`${basePath}/images/cklin.jpg`}/>
        <div className="about-me">
          <div className="title">CK Lin</div>
          <div className="subtitle">Senior Full-stack Engineer</div>
          <div className="description">{t("about-me")}</div>
          <div className="button-group">
            <a href={`${basePath}/cklin.pdf`} download><Button className="contained-button" variant="contained">{t("Download CV")}</Button></a>
            <a href="mailto:cylin743@gmail.com"><Button className="outlined-button" variant="outlined">{t("Contact Me")}</Button></a>
          </div>
        </div>
      </div>
      <div className="portfolio-container" id="portfolio">
      <h2>{t("Portfolio")}</h2>
      <div className="slider">
      <Slider className="sliders" {...settings}>
        <PortfolioCard 
          title="j:com" 
          techList={["Golang", "AWS ECS", "AWS Cloudformation", "GraphQL"]} 
          company="KKStream" 
          description={t("jcom description")}
          key={1}
          link="https://linkvod.myjcom.jp/"/>
          <PortfolioCard 
          title="TELASA" 
          techList={["PHP", "AWS EC2", "Laravel"]} 
          company="KKStream" 
          description={t("TELASA description")}
          key={2}
          link="https://www.telasa.jp/unlimited"/>
        <PortfolioCard 
          title="Ephod" 
          techList={["python", "microservice", "AWS Lambda", "AWS API-Gateway"]} 
          company="Ephod" 
          description={t("Ephod description")}
          key={3}
          link="https://app.ephodtech.com"/>
        <PortfolioCard 
          title="DrSays" 
          techList={["PHP", "AWS EC2", "Laravel"]} 
          company="DrSays" 
          description={t("DrSays description")}
          key={4}
          link="https://www.drsays.com/home/"/>
        <PortfolioCard 
          title={t("shamisen player")}
          techList={["nextjs"]} 
          company={t("personal hobby")}
          description={t("shamisen description")}
          key={5}
          link="https://cylin743.github.io/shamisen-player/?t=CoLkwsqDTmg6FgUAsiALAekTA0iAwgcSzARRAEYBWABhgB8BtACmJHIEo6AmJ1gZk4F0AvZPUYt2nOjxa9k%2FMV2bDxHUZOYChDJeNXTZHebU2jl3PoMXHtfGXNMtZPeW0MjWJiWY2uxK63pDyFm5WUuZGwb5SNvrMVNQe9h5OHojMbB4AbGlUKaZZYqnIciAAFsxFHIXFZUU8qZnBVfql5QWtzTU5dXmN7QEtFUh9PDVJpmytPByjqrZxXUMNbYMjfU39M4s8%2BZXDA8vV5Qv126YAnKbE8h7EEzcstSTk%2BzwXDcc9Bx1re5snIDshit9rtgZ14t0lqDDoN1qtHtcppMQNNkZYDAlgvJHs8APbI64mBEgfGPQEPTIk5FvIkeM5U5ALK6XCaPW4vJ7nS6%2BN48Yj2ea5KFAmFfDbI%2F6AuEgkXfRlC05i%2BFKjmIlHI1E4rGxBUA3pgn4Gx6S%2FWi6FywWQxWvS5q27c5H8jm8vUfYXS0bm8XGz5e5V%2BgZuxUBz2y71jDysyMc9GxeK7JJU3VZH2psZajO5BFonPyxymVJBHx2NRhbzuHTRAIKcLFzECBYsdKqLgrHMRq2uiGcZucVu2LW2OsxRtpTH9mKD%2FPJnWnXupXvJVTObtN8dtqfVmej3ssCfVwcxYfVnfrgeYjtbLsLLLzsf53fZMa9iaP9IxZxDkN9USMep%2F1hGAyEAAGcACdAL1TQsktcRGGxTR1gpSc626F8nwfSNtXPUF%2BCLCs%2BE%2FTCkTfWwVxyI9v0GX9FgA6DQIg48WBcLRIjUfCQlLC9iKGIj1TYegCImXhBKsYT%2BEfMZYP%2BBcljnBxXTpB1HnpP5TDVLIFN8DFO1k609TYBSYO7AB2T5OzVeQtPU2crz0qD5PeJT7mpDl%2Fg05hrKk0z7wM3JFwwrdumzQ8txQyoGPKLz8yDXi5IMoy4wWF1%2BVctTL007iT11ez8kc04FjM%2BL3Js6KT27GTfLyhKnJtFyVLcmyGjKnSQDM3tb3859pKa%2FSUvsDi2N4PiTRVUMPQlX0w39abAxnMbDVFackUeTULxHCqpom2Ffkm91dp2o1YuqlK7TuPkKQu50emO005QWn19qNB6eqes1Zs2NUoymGNtQoq8eHxGc02C9NMUzUH8whzg8yvLJBpLdQEfrKtAlrAjQnmCTkZ0MtWMR1Ga3LTjhqoIA%3D%3D%3D"/>
        <PortfolioCard 
          title={t("concertina player")}
          techList={["nextjs"]} 
          company={t("personal hobby")}
          description={t("concertina description")}
          key={6}
          link="https://cylin743.github.io/concertina-abc-player/?t=BoLgBAzAUAKijY5oUjNAVGVAsiALAek1AMiAIzYAcUAiiAOwAMUA0iAIIBGUAPgKIRcBiAJmYCOAISGiAxpg4BTCJLCTRYYWNIcA2s0kBdCLLCbZAPT66BS2VoC8XZvpWa%2Bo3TM49JkgeI7MIzFZgAGYAhhxgrBBKAOSSMZas4cECssFgoTKaNgAi5tl5Ftn2ugWuAs56IpoA4rJuYLIAJsocnJqS9dEd9UY1wRaNklp8VWCigXwyPErevswaQA%3D"/>
        </Slider>
      </div>
      </div>
      <div className="experience-container" id="experience">
        <h2>{t("Work Experience")}</h2>
        <ExperienceCard 
          company="Ephod Technology Ltd."
          title="Senior Software Engineer"
          date="2022/04 - Present">
           <li>{t("ephod 1")}</li> 
           <li>{t("ephod 2")}</li> 
           <li>{t("ephod 3")}</li> 
           <li>{t("ephod 4")}</li> 
        </ExperienceCard>
        <ExperienceCard 
          company="DrSays"
          title="System Architect"
          date="2021/04 - 2022/04">
           <li>{t("drsays 1")}</li> 
           <li>{t("drsays 2")}</li> 
           <li>{t("drsays 3")}</li> 
        </ExperienceCard>
        <ExperienceCard 
          company="NTTDATA"
          title="Senior Engineer"
          date="2020/10 - 2021/04">
           <li>{t("nttdata 1")}</li> 
           <li>{t("nttdata 2")}</li> 
        </ExperienceCard>
        <ExperienceCard 
          company="KKStream (KKBOX Group)"
          title="Senior Backend Engineer"
          date="2016/03 - 2020/10">
           <li>{t("kkstream 1")}</li> 
           <li>{t("kkstream 3")}</li> 
           <li>{t("kkstream 4")}</li> 
           <li>{t("kkstream 5")}</li> 
           <li>{t("kkstream 6")}</li> 
           <li>{t("kkstream 7")}</li> 
        </ExperienceCard>
        <ExperienceCard 
          company="Newegg"
          title="Backend Engineer"
          date="2015/01 - 2016/03">
           <li>{t("newegg 1")}</li> 
           <li>{t("newegg 2")}</li> 
           <li>{t("newegg 3")}</li> 
        </ExperienceCard>
      </div>
      <div className="education-container" id="education">
      <h2>{t("Education")}</h2>
      <div className="cards">
        <EducationCard
          title={t("master")}
          school={t("Feng Chia University")}
          date="2012/08 - 2014/08"
          key={1}
        />
        <EducationCard
          title={t("bachelor")}
          school={t("Feng Chia University")}
          date="2008/08 - 2012/06"
          key={2}
        />
      </div>
      
      

      </div>
    </main>
  );
}


