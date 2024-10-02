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

               <span><p>Santa Eduwiges</p> Perimetral Oeste y Tabasco Norte<br /> Col. Modelo, Sabados 7:00 AM <br />Ernesto Salcido Martínez. 6621 14 20 66<img src={SE} />   <hr /></span> 

               <span><p>Sagrado Corazón de Jesús</p> Rayón y Fronteras<br /> Col. 5 de Mayo, Sabados 7:00 AM <br />Julio Cesar Celaya Cota. 6629 48 98 24<img src={SCJ} />   <hr /></span> 

               <span><p>San Juan Capistrano</p> Calzada San Bernardino Entre Colosio y Navarrete # 52<br /> Col. Seminario, Sabados 7:00 AM<br />Luis Ramón López Pérez. 6622 56 71 41     <img src={SJC} />   <hr /></span>  



               <span><p>Nuestro Señor Jesucristo Rey del Universo</p> Blvd. Paseo Las Quintas esq. Herminia Valencia<br /> Col. Las Minitas, Sabados 7:40 AM <br />Rodolfo Méndez Ibarra. 6629 34 90 48   <img src={CR} />   <hr /></span> 

               <span><p>Santo Niño de Praga</p> Calle Quinta Emilia 6 <br />Col. Quinta Emilia, Sabados 7:00 AM<br />Felipe de Jesus. 6622 33 92 58<img src={SNP} />   <hr /></span>  

               

               <span><p>Santisima Trinidad</p> Blvd. Gómez Farías y Justo Sierra<br /> Col. Periodista, Sabados 7:00 AM<br />Alfonso Reyes. 6621 06 63 91     <img src={ST} />   <hr /></span>     

               <span><p>San Juan XXIII</p> Blvd San Pedro y San Pablo<br /> Col. Paseo San Ángel, Las Placitas, Sabados 7:00 AM <br />Pedro Blas Esquivel. 6623 70 33 95 <img src={sj23} />   <hr /></span>     


          </div>


	  	)

}
