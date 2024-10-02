import './inicio.css'

import SE from '../../imgs/SE.png'

import SCJ from '../../imgs/SCJ.png'

import SJC from '../../imgs/sjc.png'

import SNP from '../../imgs/snp.png'

import CR from '../../imgs/cr.png'

import ST from '../../imgs/st.png'

import mmsv from '../../imgs/mmsv.png'

import sj23 from '../../imgs/sj23.png'



export default function Inicio() {


	  return (

          <div className='inicio'>


               <h2>SABATINAS EN HERMOSILLO</h2>


               <div className='mmsvContainer'>
                    <img className='mmsv'  src={mmsv} />
                     <hr />
               </div>

               <br />

               <span><p>Santa Eduwiges</p> Perimetral Oeste y Tabasco Norte<br /> Col. Modelo, Sabados 7:00 AM<img src={SE} />   <hr /></span> 

               <span><p>Sagrado Corazón de Jesús</p> Rayón y Fronteras<br /> Col. 5 de Mayo, Sabados 7:00 AM        <img src={SCJ} />   <hr /></span> 

               <span><p>San Juan Capistrano</p> Calzada San Bernardino Entre Colosio y Navarrete # 52<br /> Col. Seminario, Sabados 7:00 AM      <img src={SJC} />   <hr /></span>  

               <span><p>Santo Niño de Praga</p> Col. Quinta Emilia, Sabados 7:00 AM       <img src={SNP} />   <hr /></span>  

               <span><p>Nuestro Señor Jesucristo Rey del Universo</p> Blvd. Paseo Las Quintas esq. Herminia Valencia<br /> Col. Las Minitas, Sabados 7:40 AM    <img src={CR} />   <hr /></span> 

               <span><p>Santisima Trinidad</p> Blvd. Gómez Farías y Justo Sierra<br /> Col. Periodista, Sabados 7:00 AM     <img src={ST} />   <hr /></span>     

               <span><p>San Juan XXIII</p> Blvd San Pedro y San Pablo<br /> Col. Paseo San Ángel, Las Placitas, Sabados 7:00 AM <br />Pedro Esquivel. 6623 70 33 95 <img src={sj23} />   <hr /></span>     


          </div>


	  	)

}
