import './inicio.css'

import SE from '../../imgs/SE.png'

import SCJ from '../../imgs/SCJ.png'

import SJC from '../../imgs/sjc.png'

import SNP from '../../imgs/snp.png'

import CR from '../../imgs/cr.png'

import ST from '../../imgs/st.png'


export default function Inicio() {


	  return (

          <div className='inicio'>

               <h2>SABATINAS EN HERMOSILLO</h2>

               <span><p>Santa Eduwiges</p> Perimetral Oeste y Tabasco Norte<br /> Col. Modelo           <img  src={SE} />   <hr /></span> 

               <span><p>Sagrado Corazón de Jesús</p> Rayón y Fronteras<br /> Col. 5 de Mayo        <img  src={SCJ} />   <hr /></span> 

               <span><p>San Juan Capistrano</p> Calzada San Bernardino Entre Colosio y Navarrete # 52<br /> Col. Seminario      <img  src={SJC} />   <hr /></span>  

               <span><p>Santo Niño de Praga</p> Col. Quinta Emilia       <img  src={SNP} />   <hr /></span>  

               <span><p>Nuestro Señor Jesucristo Rey del Universo</p> Blvd. Paseo Las Quintas esq. Herminia Valencia<br /> Col. Las Minitas    <img  src={CR} />   <hr /></span> 

               <span><p>Santisima Trinidad</p> Blvd. Gómez Farías y Justo Sierra<br /> Col. Periodista     <img  src={ST} />   <hr /></span>     


          </div>


	  	)

}
