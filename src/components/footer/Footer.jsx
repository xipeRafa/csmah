import './footer.css'

import img1 from '../../imgs/1.png'



export default function Footer() {


	  return (



            <footer>
             <div className='imgContainerFooter'>

                 <img  src={img1} />
                </div> 
                  
					<p>Caballeros de San Miguel Arcangel Hermosillo Sonora Mexico </p>
                    <a href='https://www.facebook.com/profile.php?id=61570413000244' target='_blank' >Facebook</a>	

            </footer>
	  	)
}
