import { useState, useRef, useEffect  } from "react";
import emailjs from '@emailjs/browser';
import carl from '../../cat.svg'
import HK_GIF from './../../Photos/hello_kitty.gif'
import Kerropi_GIF from './../../Photos/kerropi.webp'
import Typing from "./typing";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function HelloKitty(){
    const [convo, setConvo] = useState('Lets start easy! Which day is our anniversary?');
    const [wrong_count,setwrongCount] = useState(0);
    const [showNext, setshownext] = useState(false);
    const correct_answer = () => {
        setConvo('You got it right, Nice job my beautiful girlfriend!')
        setshownext(true)
      }
    const wrong_answer = () => {
        if(wrong_count == 0){
            setConvo('Excuse me?')
        }else if(wrong_count===1){
            setConvo('I am a little offended.')
        }else if(wrong_count===2){
            setConvo('Stop it.')
        }else if(wrong_count===3){
            setConvo('Stop goofing.')
        }else if(wrong_count===4){
            setConvo('Do not make me say it.')
        }else if(wrong_count===5){
            setConvo('I am warning you.')
        }else if(wrong_count===6){
            setConvo('HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY HAZEL STANKY I CANT BREATHE')
        }else if(wrong_count>=7){
            setConvo('I am sorry for calling hazel stanky.. please answer correctly...')
        }
        
        setwrongCount(wrong_count+1)
      }



    return (
        <div className='bg-HKitty-Pink  w-full h-full flex justify-center items-center flex-col font-extrabold'>

           <div className="">
                {/* avatar and dialouge*/}
                <div className="w-[170px] left-0 relative">
                    <div className=" w-2 h-2 rounded-full bg-HKWHITE absolute right-[20px] top-[20px] "></div>
                    <div className=" w-3 h-3 rounded-full bg-HKWHITE absolute right-0 top-0 "></div>
                    <div className=" w-4 h-4 rounded-full bg-HKWHITE absolute right-[-20px] top-[-20px] "></div>

                    <div className=" w-[200px] h-[100px] rounded-lg bg-HKWHITE absolute right-[-220px] top-[-120px] ">
                        <div className="p-2 text-l"><Typing speed={90} msg={convo} /></div>
                        
                    </div>
                    
                    <img className='w-[170px] h-[170px] rounded-full ' src={HK_GIF} />
            
                </div>
                
                {/* Below is the answer box*/}
                <div className="bg-[#fbcfe8] w-[800px] h-[400px] rounded-lg place-content-center text-2xl">

                    <div className="h-1/2 flex justify-center rounded-lg p-3 ">
                        <div className="border-2 w-1/2 m-3 rounded-lg bg-HKWHITE flex justify-center items-center hover:opacity-70" onClick={wrong_answer}>July 8, 2018</div>
                        <div className="border-2 w-1/2 m-3 rounded-lg bg-HKWHITE flex justify-center items-center hover:opacity-70" onClick={wrong_answer}>June 6, 2019</div>
                    </div>
                    <div className="h-1/2 flex justify-center p-3">
                        <div className="border-2 w-1/2 m-3 rounded-lg bg-HKWHITE flex justify-center items-center hover:opacity-70" onClick={wrong_answer}>June 8, 2019</div>
                        <div className="border-2 w-1/2 m-3 rounded-lg bg-HKWHITE flex justify-center items-center hover:opacity-70" onClick={correct_answer}>June 8, 2018</div>
                    </div>
                </div>

                {/* BELOW IS NEXT PAGE BUTTONS*/}

                {showNext ? 
                    <div className="mt-4 rounded-full bg-[#fbcfe8] w-full flex justify-center items-center hover:opacity-70 text-xl " > 
                          <Link className='w-full flex justify-center' to = '/CarlandHazel/ZaFrog'>Next &raquo;</Link>

                    </div>
                :null}
                
           </div>
            

        </div>
    )

}
export default HelloKitty;