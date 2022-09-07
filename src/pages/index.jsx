import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { GetStarted } from '@/components/GetStarted'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anavrin - Land ownership made easy</title>
        <meta
          name="description"
          content="Transparent, Affordable, Lucrative."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <GetStarted />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
