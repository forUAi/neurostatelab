import Hero from '@/components/Hero'
import ImpactStats from '@/components/ImpactStats'
import RealStories from '@/components/RealStories'
import CurrentFocus from '@/components/CurrentFocus'
import Exploring from '@/components/Exploring'
import WhyNow from '@/components/WhyNow'
import FromClinicToCode from '@/components/FromClinicToCode'
import LatestPosts from '@/components/LatestPosts'
import Ethics from '@/components/Ethics'
import JoinJourney from '@/components/JoinJourney'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <RealStories />
      <CurrentFocus />
      <Exploring />
      <WhyNow />
      <FromClinicToCode />
      <LatestPosts />
      <Ethics />
      <JoinJourney />
    </>
  )
}
