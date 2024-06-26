import React from 'react'
import { UseLogInAlertStore } from '../Store/Store';
import { Session } from 'next-auth';

const AnimatedHeart = ({productId,productInFavorite,session,removeFromFavorite,addToFavorite}:{productId:string,productInFavorite:boolean,session:Session|null,removeFromFavorite:(e:any)=>void,addToFavorite:(e:any)=>void}) => {
  const {SetShowLogInAlert} = UseLogInAlertStore();

   
    const onclickFunctions=async(e:any)=>{
      e.preventDefault();
      if(session?.user){
        if(productInFavorite){
                
          await removeFromFavorite(e);
  
        }else{
          await addToFavorite(e);
        }
        

      }
      else{
        SetShowLogInAlert(true);

      }
        

        
      }
  
  return (
    <div className='relative translate-x-4 -ml-8'  >
    <input type="checkbox" checked={productInFavorite}  id="checkbox" readOnly style={{ pointerEvents: 'none' }}  />
    <label htmlFor="checkbox">
      <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg" onClick={(e)=>onclickFunctions(e)} >
        <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
          <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#4f4f5e"   />
          <circle id="main-circ" fill="#A37A74" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

          <g id="grp7" opacity="0" transform="translate(7 6)">
            <circle id="oval1" fill="#A37A74" cx="2" cy="6" r="2"/>
            <circle id="oval2" fill="#A37A74" cx="5" cy="2" r="2"/>
          </g>

          <g id="grp6" opacity="0" transform="translate(0 28)">
            <circle id="oval1" fill="#A37A74" cx="2" cy="7" r="2"/>
            <circle id="oval2" fill="#A37A74" cx="3" cy="2" r="2"/>
          </g>

          <g id="grp3" opacity="0" transform="translate(52 28)">
            <circle id="oval2" fill="#A37A74" cx="2" cy="7" r="2"/>
            <circle id="oval1" fill="#A37A74" cx="4" cy="2" r="2"/>
          </g>

          <g id="grp2" opacity="0" transform="translate(44 6)">
            <circle id="oval2" fill="#A37A74" cx="5" cy="6" r="2"/>
            <circle id="oval1" fill="#A37A74" cx="2" cy="2" r="2"/>
          </g>

          <g id="grp5" opacity="0" transform="translate(14 50)">
            <circle id="oval1" fill="#A37A74" cx="6" cy="5" r="2"/>
            <circle id="oval2" fill="#A37A74" cx="2" cy="2" r="2"/>
          </g>

          <g id="grp4" opacity="0" transform="translate(35 50)">
            <circle id="oval1" fill="#A37A74" cx="6" cy="5" r="2"/>
            <circle id="oval2" fill="#A37A74" cx="2" cy="2" r="2"/>
          </g>

          <g id="grp1" opacity="0" transform="translate(24)">
            <circle id="oval1" fill="#A37A74" cx="2.5" cy="3" r="2"/>
            <circle id="oval2" fill="#A37A74" cx="7.5" cy="2" r="2"/>
          </g>
        </g>
      </svg>
    </label>

    
  </div>
  )
}

export default AnimatedHeart