import { LandingHero } from '../layouts/Home/landing'
import { LandingSub } from '../layouts/Home/landing2'
import { Header } from '../layouts/Home/Header'
import { LogoutMenu } from '../components/modals/LogoutMenu' 
import { logoutState } from '../state/logoutMenu'
import { useRecoilValue } from 'recoil'
import { AnimatePresence } from 'framer-motion'

export function HomePage(){

    const logoutMenuStatus = useRecoilValue(logoutState);

    return <div className='relative'>
        
        <Header/>
        <LandingHero/>
        <LandingSub />
        <AnimatePresence mode='wait'>
            {logoutMenuStatus ? <LogoutMenu/> : null}
        </AnimatePresence>
        

    </div>
}

