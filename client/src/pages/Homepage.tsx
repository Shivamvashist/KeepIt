import { LandingHero } from '../layouts/Home/landing'
import { LandingSub } from '../layouts/Home/landing2'
import { Header } from '../layouts/Home/Header'
import { LogoutMenu } from '../components/modals/LogoutMenu' 
import { logoutState } from '../state/logoutMenu'
import { useRecoilValue } from 'recoil'
import { AnimatePresence } from 'framer-motion'

export function HomePage(){

    const logoutMenuStatus = useRecoilValue(logoutState);

    return <div className='relative h-full bg-[linear-gradient(to_bottom_left,_#000000,_#1f0230,_#162456,_#162456,_#1f0230,_#000000)]'>
        
        <Header/>
        <LandingHero/>
        <LandingSub />
        <AnimatePresence mode='wait'>
            {logoutMenuStatus ? <LogoutMenu/> : null}
        </AnimatePresence>
        

    </div>
}

