import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Cone = dynamic(() => import('@/components/canvas/Cone'), {
  ssr: false,
})

// Step 5 - delete Instructions components
const Page = (props) => {
  return (
    <>
      <h2>a cone here</h2>
      <Instructions />
    </>
  )
}

Page.r3f = (props) => (
  <>
    <Cone route='/cone' />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Cone',
    },
  }
}
