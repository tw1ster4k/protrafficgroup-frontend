import React from 'react'
import "./Home.css";
import { useMask } from '@react-input/mask';
import { useState, useRef } from 'react';
import Company from "../../inStyles/images/company.svg";
import Rocket from "../../inStyles/images/rocket.png";
import DiagrammGuy from "../../inStyles/images/diagrammguy.png"
import PTGWhite from "../../inStyles/images/ptgwhite.svg"
import Phone from "../../inStyles/images/phone.png"
import searchImg from '../../inStyles/images/searchImg.png'
import spaceRocket from "../../inStyles/images/space rocket.png"
import caseInBank from "../../inStyles/images/caseInBank.png"
import suitCase from "../../inStyles/images/suitcase.png"
import Diagramm from "../../inStyles/images/diagramm.png"
import Leha from "../../inStyles/images/Leha.png"
import Evgen from "../../inStyles/images/Evgen.png"
import Kamila from "../../inStyles/images/Kamila.png"
import Lera from "../../inStyles/images/Lera.png"
import Brikoly from '../../inStyles/images/Brikoly.png'
import Stefani from "../../inStyles/images/Stefanifest.png" 
import Zarina from "../../inStyles/images/zarina.png" 
import Smart from "../../inStyles/images/smart.png"
import Masterpeace from "../../inStyles/images/masterpeace.png"
import CompanyMobil from "../../inStyles/images/CompanyMobil.svg"
import MarketingCalculatorImg from "../../inStyles/images/marketingCalculatorImg.png"
import Tornadelle from "../../inStyles/images/Tornadelle.png"
import Epilate from "../../inStyles/images/epilate-me.png";
import Okbeauty from "../../inStyles/images/Okbeauty.png"
import BB from "../../inStyles/images/BB.png"
import TelegramGuy from "../../inStyles/images/guy.png"
import FastAnalysis from "../../inStyles/images/fastAnalysis.png"
import PTGmobil from "../../inStyles/images/ptgmobile.svg";
import DiagrammGuyMobil from "../../inStyles/images/diagrammguymobil.png"
import DiagrammBrokoly from "../../inStyles/images/DiagrammBrokoly.png"
import DiagrammBB from "../../inStyles/images/DiagrammBB.png"
import DiagrammOK from "../../inStyles/images/DiagrammOK.png"
import DiagrammHydro from "../../inStyles/images/DiagrammHydro.png"
import { Link } from 'react-router-dom';

const Home = () => {
  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [curretSlide,setCurrertSlide] = useState(0);
  const [curretSlideAnalysis, setCurrertSlideAnalysis] = useState(0);
  const [progressSEO, setProgressSEO] = useState(0);
  const [progressMax1, setProgressMax1] = useState(10000);
  const [progressMax2, setProgressMax2] = useState(10000);
  const [progressMax3, setProgressMax3] = useState(10000);
  const [inputProgress1, setInputProgress1] = useState(false);
  const [inputProgress2, setInputProgress2] = useState(false);
  const [inputProgress3, setInputProgress3] = useState(false);
  const [progressСontext, setProgressСontext] = useState(0);
  const [progressTarget, setProgressTarget] = useState(0);
  const [progressSMM, setProgressSMM] = useState(0);
  const [progressPR, setProgressPR] = useState(0);
  const [checkboxSEO,setCheckboxSEO] = useState(false);
  const [checkboxContext,setCheckboxContext] = useState(false);
  const [checkboxTagret,setCheckboxTarget] = useState(false);
  const [checkboxSMM,setCheckboxSMM] = useState(false);
  const [checkboxPR,setCheckboxPR] = useState(false);
  const [openP1, setOpenP1] = useState(false);
  const [openP2, setOpenP2] = useState(false);
  const [openP3, setOpenP3] = useState(false);
  const [openP4, setOpenP4] = useState(false);
  const [openP5, setOpenP5] = useState(false);
  const [openP6, setOpenP6] = useState(false);
  const [openP7, setOpenP7] = useState(false);

  const [radio, setRadio] = useState("Производство");
  const [organization, setOrganization] = useState('');
  const [number,setNumber] = useState('');
  const [name,setName] = useState('');
  const [sites,setSites] = useState([]);
  const [mainAreas, setMainAreas] = useState([]);
  const [secondaryAreas, setSecondaryAreas] = useState([])
  const [name1, setName1] = useState('');
  const [number1, setNumber1] = useState('');
  const [site,setSite] = useState('');
  const [description, setDescription] = useState(''); 

  const submitCompany = async (e) => {
    const grades = ['Очень плохо', 'Плохо', 'Средне', 'Хорошо', 'Отлично']
    e.preventDefault();
    const company = {
      organization:organization, 
      telephone: number, 
      name: name, 
      typeBusiness: radio, 
      currentSalesNumber: Math.trunc(progress) * (progressMax1 / 100), 
      sitesAtTheMoment: sites, 
      desiredSalesNumber: Math.trunc(progress2) * (progressMax2 / 100),
      distributionChannels: {SEO: checkboxSEO ? grades[Math.round(progressSEO / 20)]  : "Нет", 
        Context: checkboxContext ? grades[Math.round(progressСontext / 20)] : "Нет", 
        Target: checkboxTagret ? grades[Math.round(progressTarget / 20)] : "Нет", 
        SMM: checkboxSMM ? grades[Math.round(progressSMM / 20)] : "Нет",
        PR: checkboxPR ? grades[Math.round(progressPR / 20)] : "Нет" 
      },
       budgetNow: Math.trunc(progress3) * (progressMax3 / 100),
    }
    const res = await fetch("https://api.pro-traffic.group/api/v1/form/calculator", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(company)
    })
    if(res.ok){
        alert("Спасибо за оставленную заявку")
    }else{
      alert("Произошла ошибка")
    }
  }


   const fastAnalysisFunction = async (e) => {
    e.preventDefault();
      const company = {
        name: name1,
        telephone: number1,
        website: site,
        description: description,
        desired: mainAreas,
        secondary: secondaryAreas
      }
      const res = await fetch("https://api.pro-traffic.group/api/v1/form/analyze", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(company)
      })
      if(res.ok){
        alert("Спасибо за оставленную заявку")
      }else{
        alert("Произошла ошибка")
      }
   }
  


  const updateMainAreas = (e) => {
    setMainAreas((prev) => {
      if(prev.includes(e.target.value)){
        return prev.filter(item => item !== e.target.value)
      }else{
        return [...prev, e.target.value]
      }
    })
  }

  const updateSecondaryAreas = (e) => {
    setSecondaryAreas((prev) => {
      if(prev.includes(e.target.value)){
        return prev.filter(item => item !== e.target.value)
      }else{
        return [...prev, e.target.value]
      }
    })
  }

  const handleKeyDown1 = (event) => {
    if (event.key === 'Enter') {
      setInputProgress1(false)
  }
  }

  const handleKeyDown2 = (event) => {
    if (event.key === 'Enter') {
      setInputProgress2(false)
  }
  }

  const handleKeyDown3 = (event) => {
    if (event.key === 'Enter') {
      setInputProgress3(false)
  }
  }


  const updateSites = (e) => {
    setSites((prevSites) => {
      if(prevSites.includes(e.target.value)){
        return prevSites.filter(item => item !== e.target.value)
      }else{
        return [...prevSites, e.target.value]
      }
    })
  }
  


  const updateProgress = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgress(percentage * 100);
  };

  const updateProgress2 = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgress2(percentage * 100);
  };

  const updateProgress3 = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgress3(percentage * 100);
  };

  const updateProgressSEO = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgressSEO(percentage * 100);
  };

  const updateProgressContext = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgressСontext(percentage * 100);
  };

  const updateProgressTarget = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgressTarget(percentage * 100);
  };

  const updateProgressSMM = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgressSMM(percentage * 100);
  };

  const updateProgressPR = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(0, offsetX / containerRect.width), 1);
    setProgressPR(percentage * 100);
  };
  
  const handleMouseMove = (e) => {
    if (isDragging) {
      updateProgress(e);
    }
  };

  const handleMouseMove2 = (e) => {
    if (isDragging) {
      updateProgress2(e);
    }
  };

  const handleMouseMove3 = (e) => {
    if (isDragging) {
      updateProgress2(e);
    }
  };

  const handleMouseMoveSEO = (e) => {
    if (isDragging) {
      updateProgressSEO(e);
    }
  };

  const handleMouseMoveContext = (e) => {
    if (isDragging) {
      updateProgressContext(e);
    }
  };

  const handleMouseMoveTarget = (e) => {
    if (isDragging) {
      updateProgressTarget(e);
    }
  };

  const handleMouseMoveSMM = (e) => {
    if (isDragging) {
      updateProgressSMM(e);
    }
  };

  const handleMouseMovePR = (e) => {
    if (isDragging) {
      updateProgressPR(e);
    }
  };

  const slidesAnalysis = [
    <div className='fast-analysis-form content'>
    <h3 className='fast-analysis-form content title'>
    1. Желаемые сферы для ускорения роста Вашей компании:
    </h3>
    <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular", display:'flex',alignItems:"center",marginTop:24}}><input type="checkbox" checked={mainAreas.includes("Комплекс маркетинга в компании")} value="Комплекс маркетинга в компании" onChange={(e) => updateMainAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Комплекс маркетинга в компании</label>
    <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular",alignItems:"center",display:'flex',marginTop:24}}><input type="checkbox" checked={mainAreas.includes("Разработка сайта под рекламу или SEO")} value="Разработка сайта под рекламу или SEO" onChange={(e) => updateMainAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Разработка сайта под рекламу или SEO</label>
    <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular",alignItems:"center",display:'flex',marginTop:24}}><input type="checkbox" checked={mainAreas.includes("Запуск и настройка рекламных кампаний")} value="Запуск и настройка рекламных кампаний" onChange={(e) => updateMainAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Запуск и настройка рекламных кампаний</label>
    <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular",alignItems:"center",display:'flex',marginTop:24}}><input type="checkbox" checked={mainAreas.includes("Продвижение социальных сетей в ТОП")} value="Продвижение социальных сетей в ТОП" onChange={(e) => updateMainAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Продвижение социальных сетей в ТОП</label>
    <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular",alignItems:"center",display:'flex',marginTop:24}}><input type="checkbox" checked={mainAreas.includes("Маркетплейсы - создание, наполнение, продвижение")} value="Маркетплейсы - создание, наполнение, продвижение" onChange={(e) => updateMainAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Маркетплейсы - создание, наполнение, продвижение</label>
    <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular",alignItems:"center",display:'flex',marginTop:24}}><input type="checkbox" checked={mainAreas.includes("Фирменный стиль/брендбук/нейминг")} value="Фирменный стиль/брендбук/нейминг" onChange={(e) => updateMainAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Фирменный стиль/брендбук/нейминг</label>
    <div style={{width:100 + "%", display:"flex", flexDirection:"row",justifyContent:"flex-end"}}>
  <button className='form-slides-btn' onClick={() => setCurrertSlideAnalysis(curretSlideAnalysis+1)}>Далее <svg style={{marginLeft:8 + "px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.542893 16.9571C0.152369 16.5666 0.152369 15.9334 0.542893 15.5429L7.33579 8.75L0.542893 1.95711C0.152369 1.56658 0.152369 0.933416 0.542893 0.542892C0.933417 0.152367 1.56658 0.152367 1.95711 0.542892L9.45711 8.04289C9.84763 8.43342 9.84763 9.06658 9.45711 9.45711L1.95711 16.9571C1.56658 17.3476 0.933417 17.3476 0.542893 16.9571Z" fill="white"/>
</svg></button>
</div>
  </div>,
     <div className='fast-analysis-form content'>
      <h3 className='fast-analysis-form content title'>
      2. Второстепенные сферы для ускорения роста Вашей компании:
      </h3>
      <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular", display:'flex',alignItems:"center",marginTop:24}}><input type="checkbox" checked={secondaryAreas.includes("Повышение репутации и узнаваемости бренда/компании")} value="Повышение репутации и узнаваемости бренда/компании" onChange={(e) => updateSecondaryAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Повышение репутации и узнаваемости бренда/компании</label>
      <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular", display:'flex',alignItems:"center",marginTop:24}}><input type="checkbox" checked={secondaryAreas.includes("Вывод сайта в ТОП10 по SEO - Яндекса & Google")} value="Вывод сайта в ТОП10 по SEO - Яндекса & Google" onChange={(e) => updateSecondaryAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Вывод сайта в ТОП10 по SEO - Яндекса & Google</label>
      <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular", display:'flex',alignItems:"center",marginTop:24}}><input type="checkbox" checked={secondaryAreas.includes("Агрегаторы - подключение Авито/Admitad/Я.Услуги")} value="Агрегаторы - подключение Авито/Admitad/Я.Услуги" onChange={(e) => updateSecondaryAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Агрегаторы - подключение Авито/Admitad/Я.Услуги</label>
      <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular", display:'flex',alignItems:"center",marginTop:24}}><input type="checkbox" checked={secondaryAreas.includes("Презентации и коммерческие предложения")} value="Презентации и коммерческие предложения" onChange={(e) => updateSecondaryAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Презентации и коммерческие предложения</label>
      <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular", display:'flex',alignItems:"center",marginTop:24}}><input type="checkbox" checked={secondaryAreas.includes("E-mail / SMS-маркетинг - рассылки")} value="E-mail / SMS-маркетинг - рассылки" onChange={(e) => updateSecondaryAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>E-mail / SMS-маркетинг - рассылки</label>
      <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular", display:'flex',alignItems:"center",marginTop:24}}><input type="checkbox" checked={secondaryAreas.includes("Контент - съемка видеороликов и фотосеты")} value="Контент - съемка видеороликов и фотосеты" onChange={(e) => updateSecondaryAreas(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Контент - съемка видеороликов и фотосеты</label>
      <div style={{width:100 + "%", display:"flex", flexDirection:"row",justifyContent:"flex-end"}}>
      <button className='form-slides-btn white' onClick={() => setCurrertSlideAnalysis(curretSlideAnalysis-1)}><svg style={{marginRight:8+"px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45711 0.542893C9.84763 0.933417 9.84763 1.56658 9.45711 1.95711L2.66421 8.75L9.45711 15.5429C9.84763 15.9334 9.84763 16.5666 9.45711 16.9571C9.06658 17.3476 8.43342 17.3476 8.04289 16.9571L0.542894 9.45711C0.152369 9.06658 0.152369 8.43342 0.542894 8.04289L8.04289 0.542893C8.43342 0.152369 9.06658 0.152369 9.45711 0.542893Z" fill="#6B71F9"/>
</svg> Назад</button>
    <button className='form-slides-btn' onClick={() => setCurrertSlideAnalysis(curretSlideAnalysis+1)}>Далее <svg style={{marginLeft:8 + "px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.542893 16.9571C0.152369 16.5666 0.152369 15.9334 0.542893 15.5429L7.33579 8.75L0.542893 1.95711C0.152369 1.56658 0.152369 0.933416 0.542893 0.542892C0.933417 0.152367 1.56658 0.152367 1.95711 0.542892L9.45711 8.04289C9.84763 8.43342 9.84763 9.06658 9.45711 9.45711L1.95711 16.9571C1.56658 17.3476 0.933417 17.3476 0.542893 16.9571Z" fill="white"/>
</svg></button>
    </div>
      </div>  
      ,<div className='fast-analysis-form content' style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>
              <h3 className='fast-analysis-form content title' style={{height:"auto"}}>
      3. Оставьте Ваши контакты для получения бесплатной маркетинговой консультации
      </h3>
                  <div style={{width:335+"px"}}>
                    <h4 className='name-input' >
                    Ваше имя
                    </h4>
                    <input onChange={(e) => setName1(e.target.value)} className='input-form' placeholder='Введите ваше имя' />
                  </div>
                  <div style={{width:335+"px"}}>
                    <h4 className='name-input'>
                    Телефон
                    </h4>
                    <input ref={inputRef} placeholder='+7 (999) 888-77-66' type="tel" onChange={(e) => setNumber1(e.target.value)} className='input-form' />
                  </div>
                  <div style={{width:100 + "%"}}>
                    <h4 className='name-input'>
                    Ваш сайт
                    </h4>
                    <input onChange={(e) => setSite(e.target.value)} required className='input-form' placeholder='https://example' />
                  </div>
                                    <div style={{width:100 + "%"}}>
                    <h4 className='name-input'>
                    Дополнительные данные
                    </h4>
                    <input onChange={(e) => setDescription(e.target.value)} required className='input-form' placeholder='Пример: Ваш сайт, соц-сети, сфера или компания' />
                  </div>
                  <label><input style={{height:18+"px", width:18+"px", marginRight:11+"px"}} type='checkbox' required />Я даю свое согласие на обработку персональных данных и соглашаюсь с <b><Link to="/policy" style={{textDecoration:"none", color:"#14181E"}}>политикой конфиденциальности</Link></b></label>
                  <div style={{width:100 + "%", display:"flex", flexDirection:"row",justifyContent:"flex-end"}}>
                  <button className='form-slides-btn white' onClick={() => setCurrertSlideAnalysis(curretSlideAnalysis-1)}><svg style={{marginRight:8+"px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45711 0.542893C9.84763 0.933417 9.84763 1.56658 9.45711 1.95711L2.66421 8.75L9.45711 15.5429C9.84763 15.9334 9.84763 16.5666 9.45711 16.9571C9.06658 17.3476 8.43342 17.3476 8.04289 16.9571L0.542894 9.45711C0.152369 9.06658 0.152369 8.43342 0.542894 8.04289L8.04289 0.542893C8.43342 0.152369 9.06658 0.152369 9.45711 0.542893Z" fill="#6B71F9"/>
</svg> Назад</button>
                      <button onClick={(e) => fastAnalysisFunction(e)} className='form-slides-btn'>
                        Расcчитать
                      </button>
                  </div>
              </div>
  
  ]

  const slides= [ <div className='marketing__calculator-form content'>               
  <div className='marketing__calculator-form content block'>
    <h3 className='marketing__calculator-form content block title'>
      Какой тип бизнеса у вас?
    </h3>
    <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular"}}><input value="Производство" onChange={(e) => setRadio(e.target.value)} name='drone' type="radio" style={{marginRight:8}}/>Производство</label>
    <label style={{marginBottom:11.5,fontFamily:"Montserrat-Regular"}}><input value="Торговля" onChange={(e) => setRadio(e.target.value)}  name='drone' type="radio" style={{marginRight:8}} />Торговля</label>
    <label style={{fontFamily:"Montserrat-Regular"}}><input value="Услуги" onChange={(e) => setRadio(e.target.value)} name='drone' type="radio" style={{marginRight:8}}/>Услуги</label>
  </div>

  <div className='marketing__calculator-form content block'>
    <h3 className='marketing__calculator-form content block title'>Текущее количество продаж в месяц</h3>
    <h4 className='marketing__calculator-form content block title-description progress'>В среднем</h4>
    <div className="progress-container"
onMouseMove={handleMouseMove}
onMouseUp={() => setIsDragging(false)}
onMouseLeave={() => setIsDragging(false)}
onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
onClick={updateProgress} >
    <div  className='progress-bar' style={{ width: `${progress}%` }} >
      <div className='slider' style={{ left: `${progress}%` }} onMouseDown={(e) => {
  e.preventDefault(); // Предотвращаем стандартное поведение
  setIsDragging(true);
}} ></div>
    </div>
    <div className='progress-count'>
        <p className='progress'>0</p>
        {
          inputProgress1 ?
          <input  onKeyDown={(event) => handleKeyDown1(event)} className='input-progress' type='number' onChange={(e) => setProgressMax1(e.target.value)} />
          :
          ""
        }
        <p onClick={() => setInputProgress1(!inputProgress1)}>{progressMax1}</p>
    </div>
    </div>
  </div>
  <div style={{width:100 + "%", display:"flex", flexDirection:"row",justifyContent:"flex-end"}}>
  <button className='form-slides-btn' onClick={() => setCurrertSlide(curretSlide+1)}>Далее <svg style={{marginLeft:8 + "px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.542893 16.9571C0.152369 16.5666 0.152369 15.9334 0.542893 15.5429L7.33579 8.75L0.542893 1.95711C0.152369 1.56658 0.152369 0.933416 0.542893 0.542892C0.933417 0.152367 1.56658 0.152367 1.95711 0.542892L9.45711 8.04289C9.84763 8.43342 9.84763 9.06658 9.45711 9.45711L1.95711 16.9571C1.56658 17.3476 0.933417 17.3476 0.542893 16.9571Z" fill="white"/>
</svg></button>
  </div>
  </div>,
    <div className='marketing__calculator-form content'>
      <div className='marketing__calculator-form content block'>
      <h3 className='marketing__calculator-form content block title'>
        Какие площадки в Интернете ваш бизнес имеет на текущий момент?
      </h3>
      <h4 className='marketing__calculator-form content block title-description'>Можно выбрать несколько вариантов</h4>
      <label style={{ paddingTop: 8 + "px",fontFamily:"Montserrat-Regular"}}><input type="checkbox" onChange={(e) => updateSites(e)} value="Личный сайт" style={{marginRight:8, height:18 + "px", width:18 + "px"}}/>Личный сайт</label>
      <label style={{ paddingTop:8 + "px",fontFamily:"Montserrat-Regular", display:"flex", alignItems:"center"}}><input type="checkbox" onChange={(e) => updateSites(e)} value="Социальные сети" style={{marginRight:8, height:18 + "px", width:18 + "px"}} />Социальные сети</label>
      <label style={{ paddingTop:8 + "px",fontFamily:"Montserrat-Regular", display:"flex", alignItems:"center"}}><input type="checkbox" value="Маркетплейсы" onChange={(e) => updateSites(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}} />Маркетплейсы</label>
      <label style={{ paddingTop:8 + "px",fontFamily:"Montserrat-Regular", display:"flex", alignItems:"center"}}><input type="checkbox" value="Мессенджеры" onChange={(e) => updateSites(e)} style={{marginRight:8, height:18 + "px", width:18 + "px"}} />Мессенджеры</label>
      <label style={{ paddingTop:8 + "px", fontFamily:"Montserrat-Regular", display:"flex", alignItems:"center"}}><input type="checkbox" value="Карточные системы (Яндекс, Google, 2GIS и т.п.)" onChange={(e) => updateSites(e)} style={{marginRight:8,height:18 + "px", width:18 + "px"}} />Карточные системы (Яндекс, Google, 2GIS и т.п.)</label>
    </div>
    <div style={window.innerWidth > 767 ?{marginTop:108 + "px"} : ""} className='marketing__calculator-form content block'>
      <h3 className='marketing__calculator-form content block title'>Какое количество продаж вы бы хотели иметь в месяц?</h3>
      <h4 className='marketing__calculator-form content block title-description progress'>В среднем</h4>
      <div className="progress-container"
 onMouseMove={handleMouseMove2}
 onMouseUp={() => setIsDragging(false)}
 onMouseLeave={() => setIsDragging(false)}
 onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
 onClick={updateProgress2} >
      <div  className='progress-bar' style={{ width: `${progress2}%` }} >
        <div className='slider' style={{ left: `${progress2}%` }} onMouseDown={(e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение
    setIsDragging(true);
}} ></div>
      </div>
      <div className='progress-count'>
          <p className='progress'>0</p>
          {
          inputProgress2 ?
          <input  onKeyDown={(event) => handleKeyDown2(event)} className='input-progress' type='number' onChange={(e) => setProgressMax2(e.target.value)} />
          :
          ""
        }
          <p onClick={() => setInputProgress2(!inputProgress2)} >{progressMax2}</p>
      </div>
      </div>
    </div>
    <div style={{width:100 + "%", display:"flex", flexDirection:"row",justifyContent:"flex-end"}}>
      <button className='form-slides-btn white' onClick={() => setCurrertSlide(curretSlide-1)}><svg style={{marginRight:8+"px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45711 0.542893C9.84763 0.933417 9.84763 1.56658 9.45711 1.95711L2.66421 8.75L9.45711 15.5429C9.84763 15.9334 9.84763 16.5666 9.45711 16.9571C9.06658 17.3476 8.43342 17.3476 8.04289 16.9571L0.542894 9.45711C0.152369 9.06658 0.152369 8.43342 0.542894 8.04289L8.04289 0.542893C8.43342 0.152369 9.06658 0.152369 9.45711 0.542893Z" fill="#6B71F9"/>
</svg> Назад</button>
    <button className='form-slides-btn' onClick={() => setCurrertSlide(curretSlide+1)}>Далее <svg style={{marginLeft:8 + "px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.542893 16.9571C0.152369 16.5666 0.152369 15.9334 0.542893 15.5429L7.33579 8.75L0.542893 1.95711C0.152369 1.56658 0.152369 0.933416 0.542893 0.542892C0.933417 0.152367 1.56658 0.152367 1.95711 0.542892L9.45711 8.04289C9.84763 8.43342 9.84763 9.06658 9.45711 9.45711L1.95711 16.9571C1.56658 17.3476 0.933417 17.3476 0.542893 16.9571Z" fill="white"/>
</svg></button>
    </div>
  </div>
  ,
  <div className='marketing__calculator-form content'>
  <div className='marketing__calculator-form content block'>
  <h3 className='marketing__calculator-form content block title'>
  Какие каналы дистрибуции вы подключения для продвижения своей организации в интернете?
  </h3>
  <h4 className='marketing__calculator-form content block title-description'>Можно выбрать несколько вариантов</h4>
  <div style={{flexDirection:"row"}} className='marketing__calculator-form content block form'>
    <div className='marketing__calculator-form content block form checkbox'>
      <h4 className='marketing__calculator-form content block form title'>Каналы дистрибуции</h4>
      <label style={{marginBottom:11.5, fontFamily:"Montserrat-Regular"}}><input type="checkbox" onChange={() => setCheckboxSEO(!checkboxSEO)} style={{marginRight:8,marginTop:24}}/>SEO</label>
      <label style={{marginBottom:11.5,fontFamily:"Montserrat-Regular"}}><input type="checkbox" onChange={() => setCheckboxContext(!checkboxContext)} style={{marginRight:8}} />Контекстная реклама (Директ\Google Adwords)</label>
      <label style={{marginBottom:11.5,fontFamily:"Montserrat-Regular"}}><input type="checkbox" onChange={() => setCheckboxTarget(!checkboxTagret)} style={{marginRight:8}} />Таргетированная реклама</label>
      <label style={{marginBottom:11.5,fontFamily:"Montserrat-Regular"}}><input type="checkbox" onChange={() => setCheckboxSMM(!checkboxSMM)} style={{marginRight:8}} />SMM</label>
      <label style={{fontFamily:"Montserrat-Regular"}}><input type="checkbox" style={{marginRight:8}} onChange={() => setCheckboxPR(!checkboxPR)} />PR-стратегии и подключение блоггеров</label>
    </div>
    <div className='marketing__calculator-form content block form progress'>
        <h4 className='marketing__calculator-form content block form title'>Степень удовлетворенности</h4>
        <div className="progress-container-small"
onMouseMove={handleMouseMoveSEO}
onMouseUp={() => setIsDragging(false)}
onMouseLeave={() => setIsDragging(false)}
onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
onClick={updateProgressSEO} >
  <div  className='progress-bar-small' style={{ width: `${progressSEO}%` }} >
    <div className='slider-small' style={{ left: `${progressSEO}%` }} onMouseDown={(e) => {
e.preventDefault(); // Предотвращаем стандартное поведение
setIsDragging(true);
}} ></div>
  </div>
  </div>
  <div className="progress-container-small"
onMouseMove={handleMouseMoveContext}
onMouseUp={() => setIsDragging(false)}
onMouseLeave={() => setIsDragging(false)}
onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
onClick={updateProgressContext} >
  <div  className='progress-bar-small' style={{ width: `${progressСontext}%` }} >
    <div className='slider-small' style={{ left: `${progressСontext}%` }} onMouseDown={(e) => {
e.preventDefault(); // Предотвращаем стандартное поведение
setIsDragging(true);
}} ></div>
  </div>
  </div>
  <div className="progress-container-small"
onMouseMove={handleMouseMoveTarget}
onMouseUp={() => setIsDragging(false)}
onMouseLeave={() => setIsDragging(false)}
onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
onClick={updateProgressTarget} >
  <div  className='progress-bar-small' style={{ width: `${progressTarget}%` }} >
    <div className='slider-small' style={{ left: `${progressTarget}%` }} onMouseDown={(e) => {
e.preventDefault(); // Предотвращаем стандартное поведение
setIsDragging(true);
}} ></div>
  </div>
  </div>
  <div className="progress-container-small"
onMouseMove={handleMouseMoveSMM}
onMouseUp={() => setIsDragging(false)}
onMouseLeave={() => setIsDragging(false)}
onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
onClick={updateProgressSMM} >
  <div  className='progress-bar-small' style={{ width: `${progressSMM}%` }} >
    <div className='slider-small' style={{ left: `${progressSMM}%` }} onMouseDown={(e) => {
e.preventDefault(); // Предотвращаем стандартное поведение
setIsDragging(true);
}} ></div>
  </div>
  </div>
  <div className="progress-container-small"
onMouseMove={handleMouseMovePR}
onMouseUp={() => setIsDragging(false)}
onMouseLeave={() => setIsDragging(false)}
onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
onClick={updateProgressPR} >
  <div  className='progress-bar-small' style={{ width: `${progressPR}%` }} >
    <div className='slider-small' style={{ left: `${progressPR}%` }} onMouseDown={(e) => {
e.preventDefault(); // Предотвращаем стандартное поведение
setIsDragging(true);
}} ></div>
  </div>
  </div>
    </div>
  </div>
</div>

<div className='marketing__calculator-form content block' style={{marginTop:160 + "px"}}>
  <h3 className='marketing__calculator-form content block title'>Какое маркетинговый бюджет вы выделяете сейчас?</h3>
  <h4 className='marketing__calculator-form content block title-description progress'>В среднем</h4>
  <div className="progress-container"
onMouseMove={handleMouseMove3}
onMouseUp={() => setIsDragging(false)}
onMouseLeave={() => setIsDragging(false)}
onMouseDown={() => setIsDragging(true)} // Начинаем перетаскивание при нажатии на контейнер
onClick={updateProgress3} >
  <div  className='progress-bar' style={{ width: `${progress3}%` }} >
    <div className='slider' style={{ left: `${progress3}%` }} onMouseDown={(e) => {
e.preventDefault(); // Предотвращаем стандартное поведение
setIsDragging(true);
}} ></div>
  </div>
  <div className='progress-count'>
      <p className='progress'>0</p>
      {
          inputProgress3 ?
          <input onKeyDown={(event) => handleKeyDown3(event)} className='input-progress' type='number' onChange={(e) => setProgressMax3(e.target.value)} />
          :
          ""
        }
      <p onClick={() => setInputProgress3(!inputProgress3)} >{progressMax3}</p>
  </div>
  </div>
</div>
<div style={{width:100 + "%", display:"flex", flexDirection:"row",justifyContent:"flex-end"}}>
<button className='form-slides-btn white' onClick={() => setCurrertSlide(curretSlide-1)}><svg style={{marginRight:8+"px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45711 0.542893C9.84763 0.933417 9.84763 1.56658 9.45711 1.95711L2.66421 8.75L9.45711 15.5429C9.84763 15.9334 9.84763 16.5666 9.45711 16.9571C9.06658 17.3476 8.43342 17.3476 8.04289 16.9571L0.542894 9.45711C0.152369 9.06658 0.152369 8.43342 0.542894 8.04289L8.04289 0.542893C8.43342 0.152369 9.06658 0.152369 9.45711 0.542893Z" fill="#6B71F9"/>
</svg> Назад</button>
<button className='form-slides-btn' onClick={() => setCurrertSlide(curretSlide+1)}>Далее <svg style={{marginLeft:8 + "px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.542893 16.9571C0.152369 16.5666 0.152369 15.9334 0.542893 15.5429L7.33579 8.75L0.542893 1.95711C0.152369 1.56658 0.152369 0.933416 0.542893 0.542892C0.933417 0.152367 1.56658 0.152367 1.95711 0.542892L9.45711 8.04289C9.84763 8.43342 9.84763 9.06658 9.45711 9.45711L1.95711 16.9571C1.56658 17.3476 0.933417 17.3476 0.542893 16.9571Z" fill="white"/>
</svg>
</button>
</div>
</div>,
                  <div className='marketing__calculator-form content'>
                  <div>
                    <h4 className='name-input' >
                    Название вашей организации
                    </h4>
                    <input onChange={(e) => setOrganization(e.target.value)} className='input-form' placeholder='ООО "Зеленоглазое такси"' />
                  </div>
                  <div>
                    <h4 className='name-input'>
                    Ваш телефон
                    </h4>
                      <input ref={inputRef} placeholder='+7 (999) 888-77-66' type="tel" onChange={(e) => setNumber(e.target.value)} className='input-form' />
                  </div>
                  <div>
                    <h4 className='name-input'>
                    Как к вам можно обращаться?
                    </h4>
                    <input onChange={(e) => setName(e.target.value)} required className='input-form' placeholder='Ваше имя' />
                  </div>
                  <label><input style={{height:18+"px", width:18+"px", marginRight:11+"px"}} type='checkbox' required />Я даю свое согласие на обработку персональных данных и соглашаюсь с <b><Link to="/policy" style={{textDecoration:"none", color:"#14181E"}}>политикой конфиденциальности</Link></b></label>
                  <div style={{width:100 + "%", display:"flex", flexDirection:"row",justifyContent:"flex-end"}}>
                  <button className='form-slides-btn white' onClick={() => setCurrertSlide(curretSlide-1)}><svg style={{marginRight:8+"px"}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45711 0.542893C9.84763 0.933417 9.84763 1.56658 9.45711 1.95711L2.66421 8.75L9.45711 15.5429C9.84763 15.9334 9.84763 16.5666 9.45711 16.9571C9.06658 17.3476 8.43342 17.3476 8.04289 16.9571L0.542894 9.45711C0.152369 9.06658 0.152369 8.43342 0.542894 8.04289L8.04289 0.542893C8.43342 0.152369 9.06658 0.152369 9.45711 0.542893Z" fill="#6B71F9"/>
</svg> Назад</button>
                      <button onClick={(e) => submitCompany(e)} className='form-slides-btn'>
                        Расcчитать
                      </button>
                  </div>
              </div>

    ]

  return (
<div className="main">
    <div className="welcome">
      <div className="companyName">
          <img src={window.innerWidth < 767 ? CompanyMobil : Company} height={window.innerWidth < 767 ? "auto" : "325px"}  style={window.innerWidth > 767 ? {} : {margin:"0 auto"}}/>
          <div className="description">
              <p>Наше digital-агентство оказывает полный спектр услуг по развитию клиентского бизнеса.<br />

                <br />Мы выстраиваем понятные и эффективные маркетинговые стратегии, основываясь на data-driven подходе.<br />

                <br />Занимаемся не только продвижением уже готовых продуктов, но и разработкой сайтов и дизайн-макетов с нуля.</p>
              <button className="sum__btn">Расcчитать стоимость ➚</button>
          </div>
        </div>
        {window.innerWidth > 767 ?
          
        <img className="rocket" src={Rocket} />
        :
        ""
        }
        <div className="nav">
          <div className="price__nav">
              <h3 className="price__nav-title" >КАК МЫ ПОМОГАЕМ КЛИЕНТАМ</h3>
              <p className="price__nav-text">Наша цель — улучшение вашего бизнеса, а не решение краткосрочных и не перспективных задач.</p>
              <img className="price__img" src={window.innerWidth > 767 ? DiagrammGuy : DiagrammGuyMobil} style={{margintTop:16}} />
          </div>
          <div className="nav__other">
            <div className='nav__team' style={{display:'flex'}}>
                <div className="weCommands">
                  <img className="ptgcommands" src={window.innerWidth > 767 ? PTGWhite : PTGmobil} />
                  <h1 className="weCommands-h1">МЫ - КОМАНДА</h1>
                </div>
                <div className="reviews-faq">
                  <div className="reviews-url">

                  </div>
                  <div className="faq">
                    <p>
                      FAQ
                    </p>
                  </div>
                </div>
            </div>
            <div className="porfolio"> 
                <button className="brief-button">
                  <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.6625 0.626336C33.0823 0.626336 34.4998 0.826586 35.8475 1.27884C44.1523 3.97884 47.1448 13.0913 44.645 21.0563C43.2275 25.1266 40.91 28.8413 37.8748 31.8766C33.53 36.0841 28.7623 39.8191 23.63 43.0366L23.0675 43.3763L22.4825 43.0141C17.3323 39.8191 12.5375 36.0841 8.15229 31.8541C5.13729 28.8188 2.81754 25.1266 1.37754 21.0563C-1.16496 13.0913 1.82754 3.97884 10.2223 1.23159C10.8748 1.00659 11.5475 0.849086 12.2225 0.761336H12.4925C13.1248 0.669086 13.7525 0.626336 14.3825 0.626336H14.63C16.0475 0.669086 17.42 0.916586 18.7498 1.36884H18.8825C18.9725 1.41159 19.04 1.45884 19.085 1.50159C19.5823 1.66134 20.0525 1.84134 20.5025 2.08884L21.3575 2.47134C21.5641 2.58152 21.796 2.74989 21.9964 2.89539C22.1234 2.98759 22.2378 3.0706 22.325 3.12384C22.3618 3.1455 22.3991 3.16729 22.4367 3.18926C22.6296 3.30187 22.8306 3.41918 23 3.54909C25.4998 1.63884 28.535 0.603836 31.6625 0.626336ZM37.6473 16.8263C38.5698 16.8016 39.3573 16.0613 39.4248 15.1141V14.8463C39.4923 11.6941 37.582 8.83883 34.6773 7.73633C33.7548 7.41908 32.7423 7.91633 32.4048 8.86133C32.0898 9.80633 32.5848 10.8413 33.5298 11.1766C34.972 11.7166 35.9373 13.1363 35.9373 14.7091V14.7788C35.8945 15.2941 36.0498 15.7913 36.3647 16.1738C36.6798 16.5563 37.1523 16.7791 37.6473 16.8263Z" fill="#FD6153"/>
                  </svg>
                  <p className="brief-button-text">
                    Заполнить бриф
                  </p>
                </button>
            </div>
          </div>
        </div>
    </div>
    <div className="services" id='services'>
        <h2 className="block-title"  >Услуги</h2>
        <div className="services-content">
            <div className="services-card first">
                <div>
                    <h3 className="services-card-title">
                      <svg className="services-card-title-svg" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
<rect width="44" height="44" rx="22" fill="#E9E9FF"/>
<path d="M32 17L23.5 25.5L18.5 20.5L12 27M32 17H26M32 17V23" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      SEO-продвижение</h3>
                    <p className="services-card-description">Комплекс мер, направленных на улучшение видимости сайта в поисковых системах.</p>
                </div>
                <div>
                    <p className="services-card-key">Цена от:</p>
                    <h3 className="services-card-price">55 000
                      <h3 className="services-card-currency">₽</h3>
                    </h3>
                </div>
            </div>
            <img className="phone-img" src={Phone} height="559px" />
            <div className="services-card second">
                <div>
                    <h3 className="services-card-title">
                      <svg className="services-card-title-svg" width="100" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#E9E9FF"/>
<path d="M14.9001 29.1004C11.0001 25.2004 11.0001 18.8004 14.9001 14.9004M17.8 26.2004C15.5 23.9004 15.5 20.1004 17.8 17.7004M26.2 17.8005C28.5 20.1005 28.5 23.9005 26.2 26.3005M29.1001 14.9004C33.0001 18.8004 33.0001 25.1004 29.1001 29.0004M24 22.0005C24 23.1051 23.1046 24.0005 22 24.0005C20.8954 24.0005 20 23.1051 20 22.0005C20 20.8959 20.8954 20.0005 22 20.0005C23.1046 20.0005 24 20.8959 24 22.0005Z" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                       Настройка контекстной рекламы Яндекс.Директ и Google Adwords </h3>
                    <p className="services-card-description">Помогает компаниям привлекать целевую аудиторию, увеличивать конверсии и доходы, а также повышать узнаваемость бренда.</p>
                </div>
                <div>
                    <p className="services-card-key">Цена от:</p>
                    <h3 className="services-card-price">55 000
                      <h3 className="services-card-currency">₽</h3>
                    </h3>
                </div>
            </div>
            <div className="services-card third">
                <div>
                    <h3 className="services-card-title">
                      <svg className="services-card-title-svg" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
<rect width="44" height="44" rx="22" fill="#E9E9FF"/>
<path d="M23.5 17C23.7761 17 24 16.7761 24 16.5C24 16.2239 23.7761 16 23.5 16C23.2239 16 23 16.2239 23 16.5C23 16.7761 23.2239 17 23.5 17Z" fill="black"/>
<path d="M27.5 21C27.7761 21 28 20.7761 28 20.5C28 20.2239 27.7761 20 27.5 20C27.2239 20 27 20.2239 27 20.5C27 20.7761 27.2239 21 27.5 21Z" fill="black"/>
<path d="M18.5 18C18.7761 18 19 17.7761 19 17.5C19 17.2239 18.7761 17 18.5 17C18.2239 17 18 17.2239 18 17.5C18 17.7761 18.2239 18 18.5 18Z" fill="black"/>
<path d="M16.5 23C16.7761 23 17 22.7761 17 22.5C17 22.2239 16.7761 22 16.5 22C16.2239 22 16 22.2239 16 22.5C16 22.7761 16.2239 23 16.5 23Z" fill="black"/>
<path d="M23.5 17C23.7761 17 24 16.7761 24 16.5C24 16.2239 23.7761 16 23.5 16C23.2239 16 23 16.2239 23 16.5C23 16.7761 23.2239 17 23.5 17Z" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 21C27.7761 21 28 20.7761 28 20.5C28 20.2239 27.7761 20 27.5 20C27.2239 20 27 20.2239 27 20.5C27 20.7761 27.2239 21 27.5 21Z" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 18C18.7761 18 19 17.7761 19 17.5C19 17.2239 18.7761 17 18.5 17C18.2239 17 18 17.2239 18 17.5C18 17.7761 18.2239 18 18.5 18Z" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 23C16.7761 23 17 22.7761 17 22.5C17 22.2239 16.7761 22 16.5 22C16.2239 22 16 22.2239 16 22.5C16 22.7761 16.2239 23 16.5 23Z" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C16.5 12 12 16.5 12 22C12 27.5 16.5 32 22 32C22.926 32 23.648 31.254 23.648 30.312C23.648 29.875 23.468 29.477 23.211 29.187C22.921 28.898 22.773 28.535 22.773 28.062C22.7692 27.8419 22.8098 27.6233 22.8922 27.4192C22.9747 27.2151 23.0975 27.0298 23.2531 26.8741C23.4088 26.7185 23.5941 26.5957 23.7982 26.5132C24.0023 26.4308 24.2209 26.3902 24.441 26.394H26.437C29.488 26.394 31.992 23.891 31.992 20.84C31.965 16.012 27.461 12 22 12Z" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    Web и UI/UX-дизайн </h3>
                    <p className="services-card-description">Web-дизайн обеспечивает привлекательный и функциональный внешний вид сайта, а UI/UX-дизайн сосредоточен на создании удобного, интуитивно понятного и приятного для пользователя интерфейса.</p>
                </div>
                <div>
                    <p className="services-card-key">Цена от:</p>
                    <h3 className="services-card-price">40 000
                      <h3 className="services-card-currency">₽</h3>
                    </h3>
                </div>
            </div>
            <img className="search-img" src={searchImg} height="595px" />
            <div className="services-card fourth">
                <div>
                    <h3 className="services-card-title">
                      <svg className="services-card-title-svg" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
<rect width="44" height="44" rx="22" fill="#E9E9FF"/>
<path d="M24.6999 16.2997C24.5166 16.4867 24.414 16.738 24.414 16.9997C24.414 17.2615 24.5166 17.5128 24.6999 17.6997L26.2999 19.2997C26.4868 19.483 26.7381 19.5856 26.9999 19.5856C27.2616 19.5856 27.5129 19.483 27.6999 19.2997L31.4699 15.5297C31.9727 16.6409 32.1249 17.879 31.9063 19.0789C31.6877 20.2788 31.1086 21.3836 30.2461 22.246C29.3837 23.1084 28.2789 23.6876 27.079 23.9062C25.8791 24.1248 24.641 23.9726 23.5299 23.4697L16.6199 30.3797C16.222 30.7776 15.6825 31.0011 15.1199 31.0011C14.5572 31.0011 14.0177 30.7776 13.6199 30.3797C13.222 29.9819 12.9985 29.4423 12.9985 28.8797C12.9985 28.3171 13.222 27.7776 13.6199 27.3797L20.5299 20.4697C20.027 19.3585 19.8748 18.1205 20.0934 16.9206C20.312 15.7207 20.8911 14.6159 21.7536 13.7535C22.616 12.891 23.7208 12.3119 24.9207 12.0933C26.1206 11.8747 27.3587 12.0269 28.4699 12.5297L24.7099 16.2897L24.6999 16.2997Z" stroke="#6B71F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Комплексная разработка сайтов </h3>
                    <p className="services-card-description" style={{lineHeight:2.2}}>·Обсуждение и планирование
                      <br  />·Разработка дизайн-макета
                      <br /> ·Верстка
                      <br />·Тестирование и оптимизация
                      <br />·Запуск
                      <br />·Техническое сопровождение</p>
                </div>
                <div>
                    <p className="services-card-key">Цена от:</p>
                    <h3 className="services-card-price">100 000
                      <h3 className="services-card-currency">₽</h3>
                    </h3>
                  </div>
                </div>
              </div>
              
             <div className='telegram-block'>
                <div className='telegram-block-content'>
                  <div>
                    <h3 className='telegram-block-title'>Хотите получить коммерческое предложение?</h3>
                    <p className='telegram-block-p'>В нашем Telegram боте вы сможете получить быструю оценку стоимости проекта!</p>
                  </div>
                    <button className='telegram-block-btn'>Открыть Telegram <svg style={{marginLeft:8 + "px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M22.6961 3.64051C22.8652 2.54736 21.8259 1.68453 20.8539 2.11128L1.49511 10.6108C0.798094 10.9168 0.849082 11.9727 1.57199 12.2029L5.56421 13.4742C6.32624 13.7169 7.15125 13.5914 7.81666 13.1317L16.8175 6.91327C17.0889 6.72571 17.3848 7.11168 17.1529 7.35067L10.6739 14.0305C10.0454 14.6786 10.1701 15.7766 10.9261 16.2507L18.1801 20.7996C18.9937 21.3097 20.0403 20.7973 20.1924 19.814L22.6961 3.64051Z" fill="white"/>
</svg></button>
                </div>
                <img src={TelegramGuy} className='telegram-block-img' />
             </div>
            </div>
            <div className="benefit">
                <h2 className="block-title" style={{textAlign:"center"}} >Кому мы можем быть полезны?</h2>
                <div className="benefit-content">
                    <div className="benefit-card">
                        <img className='benefit-card-img' src={suitCase}  height="300px" />
                        <h3 className="benefit-card-title">Малый и средний бизнес</h3>
                        <p className="benefit-card-description">Помощь в создании маркетинговой стратегии, которая позволит малым и средним предприятиям эффективно конкурировать на рынке.</p>
                    </div>
                    <div className="benefit-card">
                        <img className='benefit-card-img' src={caseInBank}  height="300px" />
                        <h3 className="benefit-card-title">Крупные корпорации</h3>
                        <p className="benefit-card-description">Проведение специализированных маркетинговых кампаний, таких как запуск новых продуктов или выход на новые рынки. </p>
                    </div>
                    <div className="benefit-card">
                        <img className='benefit-card-img' src={spaceRocket} height="300px" />
                        <h3 className="benefit-card-title">Стартапы</h3>
                        <p className="benefit-card-description">Помощь в быстром выходе на рынок и достижении роста благодаря целенаправленным маркетинговым усилиям.
                          Создание и укрепление бренда на начальном этапе развития компании. </p>
                    </div>
                </div> 
            </div>
            <div className="cases" id='cases'>
              <h2 className="block-title" >Кейсы</h2>
              <div className="cases-content">
                <div className="cases-stats">
                  <div className="stats">
                    <h3 style={{color:'#FD6153'}} className="stats-title" >100+</h3>
                    <p className="stats-content">Успешных проектов</p>
                  </div>
                  <div className="stats">
                    <h3 style={{color: '#6B71F9'}} className="stats-title">200%</h3>
                    <p className="stats-content">Увеличим конверсию на</p>
                  </div>
                  <div className="stats">
                    <h3 style={{color: '#FD6153'}}  className="stats-title">7 лет</h3>
                    <p className="stats-content">Опыт в маркетинге</p>
                  </div>
                  <div className="stats">
                    <h3 style={{color: '#6B71F9'}} className="stats-title">4 из 5</h3>
                    <p className="stats-content">клиентов становятся постоянными</p>
                  </div>
                </div>
                <div className="cases-projects">
                  <div className='cases-project-line'>

                  <div className="project-card-big">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Частная стоматология</h3>
                          <h3 className="project-card-category">Продвижение</h3>
                          <p className="project-card-tern">Срок сотрудничества: 3,5 года</p>
                      </div>
                      <div className="project-card-diagramm">
                          <img src={Diagramm} className="project-card-image" />
                          <div className="designations">
                            <div className="browser">
                              <div className="yandex"></div>
                              <p className="browser-title">Яндекс</p>
                            </div>
                            <div className="browser">
                              <div className="yahool"></div>
                              <p className="browser-title">Yahool</p>
                            </div>
                            <div className="browser" >
                              <div className="google"></div>
                              <p className="browser-title">Google</p>
                            </div>
                          </div>
                      </div>
                      <div className="improve">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue">3841,3%</h3>
                            <p className="improve-card-description">Рост SEO трафика</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red">87 → 3342</h3>
                          <p className="improve-card-description">Увеличение трафика</p>
                          <p className="improve-card-traffic">уник. посетителя / месяц</p>
                        </div>
                  </div>
    
                      </div>
                      <div className="project-card-small">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Стефани Сет</h3>
                          <h3 className="project-card-category project-card-category_color_red">Контекстная реклама</h3>
                          <p className="project-card-tern">Срок сотрудничества: 14.09.23 -<br/> настоящее время</p>
                      </div>
                      <div className="improve improve-small-card">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue improve-card-number-small-card">200 000 ₽</h3>
                            <p className="improve-card-description">Бюджет</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red improve-card-number-small-card">83</h3>
                          <p className="improve-card-description">Получили заявок</p>
                        </div>
                      </div>
                  </div>
                  <div className="project-card-big">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Интернет магазин "Brikoly"</h3>
                          <h3 className="project-card-category">Продвижение</h3>
                          <p className="project-card-tern">Срок сотрудничества: 3,5 года</p>
                      </div>
                      <div className="project-card-diagramm">
                          <img src={DiagrammBrokoly} className="project-card-image" />
                          <div className="designations">
                            <div className="browser">
                              <div className="yandex"></div>
                              <p className="browser-title">Яндекс</p>
                            </div>
                            <div className="browser">
                              <div className="yahool"></div>
                              <p className="browser-title">Yahool</p>
                            </div>
                            <div className="browser" >
                              <div className="google"></div>
                              <p className="browser-title">Google</p>
                            </div>
                          </div>
                      </div>
                      <div className="improve">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue">4654,3%</h3>
                            <p className="improve-card-description">Рост SEO трафика</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red">103 → 4794</h3>
                          <p className="improve-card-description">Увеличение трафика</p>
                          <p className="improve-card-traffic">уник. посетителя / месяц</p>
                        </div>
                  </div>
                  </div>
                  <div className="project-card-small">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Art Media Group</h3>
                          <h3 className="project-card-category project-card-category_color_red">Контекстная реклама</h3>
                          <p className="project-card-tern">Срок сотрудничества: 14.09.23 -<br/> настоящее время</p>
                      </div>
                      <div className="improve improve-small-card">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue improve-card-number-small-card">50 000 ₽</h3>
                            <p className="improve-card-description">Бюджет (в месяц)</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red improve-card-number-small-card">60</h3>
                          <p className="improve-card-description">Получили заявок (в месяц)</p>
                        </div>
                      </div>
                  </div>
                  <div className="project-card-big">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Бэби Бум</h3>
                          <h3 className="project-card-category">Продвижение</h3>
                          <p className="project-card-tern"> Срок сотрудничества: 14.09.23 - настоящее время</p>
                      </div>
                      <div className="project-card-diagramm">
                          <img src={DiagrammBB} className="project-card-image" />
                          <div className="designations">
                            <div className="browser">
                              <div className="yandex"></div>
                              <p className="browser-title">Яндекс</p>
                            </div>
                            <div className="browser">
                              <div className="yahool"></div>
                              <p className="browser-title">Yahool</p>
                            </div>
                            <div className="browser" >
                              <div className="google"></div>
                              <p className="browser-title">Google</p>
                            </div>
                          </div>
                      </div>
                      <div className="improve">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue">3841,3%</h3>
                            <p className="improve-card-description">Рост SEO трафика</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red">87 → 3342</h3>
                          <p className="improve-card-description">Увеличение трафика</p>
                          <p className="improve-card-traffic">уник. посетителя / месяц</p>
                        </div>
                  </div>
                  </div>
                  </div>
                  <div className='cases-project-line'>
                  <div className="project-card-small">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Золотая лихорадка</h3>
                          <h3 className="project-card-category project-card-category_color_red">Контекстная реклама</h3>
                          <p className="project-card-tern">Срок сотрудничества: 1 год</p>
                      </div>
                      <div className="improve improve-small-card">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue improve-card-number-small-card">40 000 ₽</h3>
                            <p className="improve-card-description">Бюджет (в мес)</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red improve-card-number-small-card">70</h3>
                          <p className="improve-card-description">Получили заявок (в мес)</p>
                        </div>
                      </div>
                  </div>
                  <div className="project-card-big">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">интернет-магазин "Гидроответ"</h3>
                          <h3 className="project-card-category">Продвижение</h3>
                          <p className="project-card-tern">Срок сотрудничества: 2 года </p>
                      </div>
                      <div className="project-card-diagramm">
                          <img src={DiagrammHydro} className="project-card-image" />
                          <div className="designations">
                            <div className="browser">
                              <div className="yandex"></div>
                              <p className="browser-title">Яндекс</p>
                            </div>
                            <div className="browser">
                              <div className="yahool"></div>
                              <p className="browser-title">Yahool</p>
                            </div>
                            <div className="browser" >
                              <div className="google"></div>
                              <p className="browser-title">Google</p>
                            </div>
                          </div>
                      </div>
                      <div className="improve">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue">2583%</h3>
                            <p className="improve-card-description">Рост SEO трафика</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red">309 → 7982</h3>
                          <p className="improve-card-description">Увеличение трафика</p>
                          <p className="improve-card-traffic">уник. посетителя / месяц</p>
                        </div>
                  </div>
                      </div>
                      <div className="project-card-small">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Moms and Kids</h3>
                          <h3 className="project-card-category project-card-category_color_red">Контекстная реклама</h3>
                          <p className="project-card-tern">Срок сотрудничества: 1,5 года</p>
                      </div>
                      <div className="improve improve-small-card">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue improve-card-number-small-card">25 000 ₽</h3>
                            <p className="improve-card-description">Бюджет (в мес)</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red improve-card-number-small-card">65</h3>
                          <p className="improve-card-description">Получили заявок (в мес)</p>
                        </div>
                      </div>
                  </div>
                  <div className="project-card-small">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Бэби Бум</h3>
                          <h3 className="project-card-category project-card-category_color_red">Контекстная реклама</h3>
                          <p className="project-card-tern">Срок сотрудничества: 01.01.22 -<br/> настоящее время</p>
                      </div>
                      <div className="improve improve-small-card">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue improve-card-number-small-card">35 000 ₽</h3>
                            <p className="improve-card-description">Бюджет (в мес)</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red improve-card-number-small-card">73</h3>
                          <p className="improve-card-description">Получили заявок (в мес)</p>
                        </div>
                      </div>
                  </div>
                  <div className="project-card-big">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Интернет магазин "OkBeauty"</h3>
                          <h3 className="project-card-category">Продвижение</h3>
                          <p className="project-card-tern">Срок сотрудничества: 01.01.22 -<br/> настоящее время</p>
                      </div>
                      <div className="project-card-diagramm">
                          <img src={DiagrammOK} className="project-card-image" />
                          <div className="designations">
                            <div className="browser">
                              <div className="yandex"></div>
                              <p className="browser-title">Яндекс</p>
                            </div>
                            <div className="browser">
                              <div className="yahool"></div>
                              <p className="browser-title">Yahool</p>
                            </div>
                            <div className="browser" >
                              <div className="google"></div>
                              <p className="browser-title">Google</p>
                            </div>
                          </div>
                      </div>
                      <div className="improve">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue">338%</h3>
                            <p className="improve-card-description">Рост SEO трафика</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red">20415 → 69181</h3>
                          <p className="improve-card-description">Увеличение трафика</p>
                          <p className="improve-card-traffic">уник. посетителя / месяц</p>
                        </div>
                  </div>
                  </div>
                  <div className="project-card-small">
                      <div className="project-card-preview">
                          <h3 className="project-card-title">Здоровые Стопы</h3>
                          <h3 className="project-card-category project-card-category_color_red">Контекстная реклама</h3>
                          <p className="project-card-tern">Срок сотрудничества: 1,5 года</p>
                      </div>
                      <div className="improve improve-small-card">
                        <div className="improve-card">
                            <h3 className="improve-card-number improve-card-number_color_blue improve-card-number-small-card">35 000 ₽</h3>
                            <p className="improve-card-description">Бюджет (в мес)</p>
                        </div>
                        <div className="improve-card">
                          <h3 className="improve-card-number improve-card-number_color_red improve-card-number-small-card">68</h3>
                          <p className="improve-card-description">Получили заявок (в мес)</p>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
              <button className="sum__btn" style={window.innerWidth > 767 ? {marginLeft:80 + '%'} : {}}>Посмотреть все ➚</button>
            </div>
            {window.innerWidth > 767 ?
              
              
              <div className='marketing__calculator'>
              <h2 className='block-title' style={{textAlign:"center"}}>Маркетинговый калькулятор</h2>
              <div className='marketing__calculator-content'>
                <div className='marketing__calculator-form'>
                  <div className='marketing__calculator-dots'>
                        {
                          slides.map((_,index) =>
                            <span key={index} className={`dot ${curretSlide === index ? 'active' : ''} `} 
                          onClick={() => setCurrertSlide(index)}
                          />
                        )
                      }
                  </div>
                        {
                          slides[curretSlide]
                        }
                </div>
                <div className='marketing__calculator-message'>
                    <h3 className='marketing__calculator-message text'>
                      Давай рассчитаем примерную стоимость твоего проекта!
                    </h3>
                    <img src={MarketingCalculatorImg} className='marketing__calculator-img' />
                </div>
              </div>
            </div>
                        : ""
                      }
            <div className="team" id='team'>
              <h2 className="block-title" >Команда</h2>
              <div className="team-content">
                <div className="employee">
                  <img src={Leha} style={{borderRadius:10, width: 100 + '%', overflow: 'hidden', position: 'relative', scale: 'crop'}}  />
                  <div className="employee-content">
                    <h3 className="employee-name">Алексей</h3>
                    <p className="employee-job">CEO</p>
                  </div>
                </div>
                <div className="employee">
                  <img src={Evgen} style={{borderRadius:10, width: 100 + '%', overflow: 'hidden', position: 'relative', scale: 'crop'}} />
                  <div className="employee-content">
                    <h3 className="employee-name">Евгений</h3>
                    <p className="employee-job">Специалист по контекстной рекламе</p>
                  </div>
                </div>
                <div className="employee">
                  <img src={Kamila} style={{borderRadius:10, width: 100 + '%', overflow: 'hidden', position: 'relative', scale: 'crop'}}/>
                  <div className="employee-content">
                    <h3 className="employee-name">Камила</h3>
                    <p className="employee-job">SEO-специалист</p>
                  </div>
                </div>
                <div className="employee">
                  <img src={Lera} style={{borderRadius:10, width: 100 + "%", overflow: 'hidden', position: 'relative', scale: 'crop'}} />
                  <div className="employee-content">
                    <h3 className="employee-name">Лера</h3>
                    <p className="employee-job">Автор, редактор</p>
                  </div>
                </div>
              </div>
              {/* <button className="all__btn" style={window.innerWidth > 767 ? {marginLeft:80 + '%', marginTop:100} : {width:100 + "%"}}>Посмотреть всех ➚</button>  */}
            </div>
            <div className="companies">
              <h2 className="block-title" >Нам доверяют</h2>
              <div className="companies-content">
                  <img style={{marginTop: 20}} className='company-img'  src={Brikoly} height="80px" />
                  <img src={Tornadelle} height="57px" className='company-img' style={{marginTop:20}} />
                  <img style={{marginTop: 20}} className='company-img' src={Stefani} height="50px" />
                  <img style={{marginTop: 20}} className='company-img' src={Smart} height="72px" />
                  <img style={{marginTop: 20}} className='company-img' src={Epilate} height="68px" />
                  <img style={{marginTop: 20}} className='company-img' src={Masterpeace} height="80px" />
                  <img style={{marginTop: 20}} className='company-img' src={Zarina} height="50px" />
                  <img style={{marginTop:20}} className='company-img' src={Okbeauty} height="80px" />
                  <img style={{marginTop:20}} className='company-img' src={BB} height="66px" />
              </div>
            </div>
            <div className='faq-block'>
              <h2 className='block-title'>FAQ</h2>
              <div className='faq-information'> 
                <div className='faq-line'>
                      <h3 className='faq-title'>Чем занимается маркетинговое агентство?</h3>
                      <div onClick={() => setOpenP1(!openP1)} className={ openP1 ? "faq-more active-more"  : "faq-more" }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 18L18 6" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6H18V15.75" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </div>
                </div>
                {openP1 ?
                      <p  className='faq-description' >
                      Маркетинговое агентство предоставляет широкий спектр услуг, направленных на продвижение продуктов, услуг или брендов своих клиентов. 
                     <li>
                        Разработка маркетинговых стратегий и рекламных кампаний
                      </li> 
                      <li>
                        Диджитал-маркетинг (SEO, контекстная реклама, SMM и email-маркетинг, создание и оптимизация веб-сайтов и лендингов)
                        </li>
                      <li>
                      Контент-маркетинг (создание контента для блогов, социальных сетей, рассылок, пресс-релизов и других платформ; планирование и реализация контент-стратегий для привлечения и удержания клиентов)
                      </li>
                      <li>
                      Анализ данных и предоставление рекомендаций для улучшения маркетинговых усилий.
                      </li>
                      <li>
                      Ведение аккаунтов в социальных сетях, создание и публикация контент а.Взаимодействие с аудиторией, управление сообществами и мониторинг отзывов.
                      </li>
                      </p>
                      :""}
                      <div className='faq-line'>
                      <h3 className='faq-title'>Как составить маркетинговую стратегию?</h3>
                      <div className={ openP2 ? "faq-more active-more"  : "faq-more" } onClick={() => setOpenP2(!openP2)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 18L18 6" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6H18V15.75" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </div>
                </div>
                {openP2 ?
                      <p  className='faq-description'>
                      Составление маркетинговой стратегии — это сложный комплексный процесс, включающий следующие этапы.
                      <br /><br />
                      Анализ текущей ситуации: оценка сильных и слабых сторон компании; исследование основных конкурентов, их стратегии, сильные и слабые стороны; определение характеристик целевой аудитории (демография, поведение, предпочтения и потребности).
                      <br /><br />
                      Определение целей: постановка четких, измеримых и достижимых целей; определение временных рамок для достижения этих целей.
                      <br /><br />
                      Разработка уникального торгового предложения.
                      <br /><br />
                      Маркетинговое позиционирование: разработка ключевых сообщений и позиционирование бренда, который должен выделяться среди конкурентов.
                      <br /><br />
                      Выбор маркетинговых каналов: SEO, контекстная реклама, SMM, email-маркетинг, PR; разработка стратегий для каждого канала.
                      <br /><br />
                      Разработка маркетингового плана: создание подробного плана действий, включающий конкретные мероприятия, сроки выполнения и ответственных лиц.
                      <br /><br />
                      Определение бюджета: оценка затрат на реализацию маркетинговой стратегии.
                      <br /><br />
                      Внедрение и мониторинг.
                      <br /><br />
                      Анализ и корректировка.
                      </p>
                      :""}
                      <div className='faq-line'>
                      <h3 className='faq-title'>Какие методы продвижения лучше использовать?</h3>
                      <div onClick={() => setOpenP3(!openP3)} className={ openP3 ? "faq-more active-more"  : "faq-more" }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 18L18 6" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6H18V15.75" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </div>
                </div>
                {openP3 ?
                      <p  className='faq-description'>Выбор методов продвижения полностью зависит от специфики вашего бизнеса, целевой аудитории, бюджета и маркетинговых целей. Поэтому ответить на этот вопрос можно лишь после консультации со специалистом и анализа именно вашей ситуации. </p>
                    :""}
                      <div className='faq-line'>
                      <h3 className='faq-title'>Какую контекстную рекламу выбрать?</h3>
                      <div onClick={() => setOpenP4(!openP4)} className={ openP4 ? "faq-more active-more"  : "faq-more" }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 18L18 6" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6H18V15.75" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </div>
                </div>
                {openP4 ?
                      <p  className='faq-description'>
                      Выбор контекстной рекламы зависит от ваших целей, целевой аудитории, бюджета и других факторов. Основные платформы для контекстной рекламы включают Google Ads (бывший Google Adwords) и Яндекс.Директ. 
                      <br /><br />
                      Google Ads
                      <br />
                      <li>
                      Google Ads охватывает огромную аудиторию по всему миру благодаря популярности поисковой системы Google и сети сайтов-партнеров.
                      </li>
                      <li>
                      Возможность детального таргетинга по географическим параметрам, демографии, интересам и поведению пользователей.
                      </li>
                      <li>
                      Поддержка различных форматов объявлений, включая текстовые, графические, видео и шоппинг-объявления.
                      </li>
                      <li>
                      Интеграция с Google Analytics позволяет детально отслеживать эффективность кампаний и вносить корректировки в реальном времени.
                      </li>
                      <li>
                      Высокое качество трафика за счет приоритетного использования высокочастотных и целевых запросов.
                      </li>
                        <br />
                      Яндекс.Директ
                      <br />
                      <li>
                      Яндекс является ведущей поисковой системой в России и странах СНГ, что обеспечивает значительный охват в этом регионе.
                      </li>
                      <li>
                      Возможность точного таргетинга по различным параметрам, включая географию, время показа и поведенческие факторы.
                      </li>
                      <li>
                      Хорошая интеграция с сервисами Яндекс.Метрика и Яндекс.Аудитории для детального анализа и ретаргетинга.
                      </li>
                      <li>
                      В некоторых нишах конкуренция может быть ниже по сравнению с Google Ads, что может привести к более низкой стоимости кликов.
                      </li>
                      </p>
                      :""}
                      <div className='faq-line'>
                      <h3 className='faq-title'>Сколько стоит разработать сайт с нуля?</h3>
                      <div onClick={() => setOpenP5(!openP5)} className={ openP5 ? "faq-more active-more"  : "faq-more" }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 18L18 6" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6H18V15.75" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </div>
                </div>
                {openP5 ? 
                      <p  className='faq-description'>Стоимость разработки сайта с нуля может варьироваться в зависимости от множества факторов, таких как тип сайта, его функциональность, дизайн, требуемые технологии и методы продвижения. Все зависит от каждого конкретного случая.</p>
                    :""}
                      <div className='faq-line'>
                      <h3 className='faq-title'>Сколько времени занимает разработка сайта?</h3>
                      <div onClick={() => setOpenP6(!openP6)} className={ openP6 ? "faq-more active-more"  : "faq-more" }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 18L18 6" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6H18V15.75" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </div>
                </div>
                {openP6 ?
                      <p  className='faq-description'>Время разработки сайта зависит от сложности проекта, типа сайта, требований к функциональности и дизайну, а также от команды разработчиков. Точные сроки обговариваются с клиентом при личной встрече или на созвоне.</p>
                    :""}
                      <div className='faq-line'>
                      <h3 className='faq-title'>Почему не все сайты подходят для продвижения?</h3>
                      <div onClick={() => setOpenP7(!openP7)} className={ openP7 ? "faq-more active-more"  : "faq-more" }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 18L18 6" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 6H18V15.75" stroke="#14181E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </div>
                </div>
                {openP7 ?
                      <p className='faq-description'>
                      <li>
                        Наличие технических проблем: медленная загрузка, неправильное отображение на мобильных устройствах или неоптимизированный код.
                        </li>
                      <li>
                        Контент на сайте не информативен, не полезен для целевой аудитории или плохо написан.
                        </li>
                      <li>
                        Некоторые сайты вообще не оптимизированы для поисковых систем.Также они могут быть ненадежными или не обеспечивать безопасность данных пользователей.
                        </li>
                      <li>
                        Сайт не направлен на определенную целевую аудиторию или не решает конкретные проблемы или потребности.
                        </li>
                      <li>
                        Невозможность конверсии из-за неправильного проектирования.
                        </li>
                        <br />
                        Все эти факторы могут повлиять на успешность продвижения сайта и его способность привлекать целевую аудиторию. Поэтому перед началом продвижения сайта важно проанализировать его с точки зрения этих аспектов и, если необходимо, внести изменения для улучшения его эффективности.
                      </p>
            :""}
              </div>
              </div>
            {window.innerWidth < 767 ?
            ""
            :

              <div className='fast-analysis'>
              <h2 className='block-title'>Быстрый анализ</h2>
              <div className='fast-analysis-content'>
              <div className='fast-analysis-message'>
                    <h3 className='fast-analysis-message text'>
                    Маркетинговая консультация 
                    </h3>
                    <img src={FastAnalysis} className='marketing__calculator-img' />
                </div>
                <div className='fast-analysis-form'>
                      <div className='fast-analysis-dots'>
                      {
                        slidesAnalysis.map((_,index) =>
                          <span key={index} className={`dot ${curretSlideAnalysis === index ? 'active' : ''} `} 
                        onClick={() => setCurrertSlideAnalysis(index)}
                        />
                      )
                      }
                      </div>
                      {
                        slidesAnalysis[curretSlideAnalysis]
                      }
                </div>
              </div>
            </div>            
                    }
          </div>
  )
}

export default Home