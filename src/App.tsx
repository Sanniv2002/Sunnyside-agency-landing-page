import hImg from "./assets/image-header.jpg"
import transform from "./assets/image-transform.jpg"
import standout from "./assets/image-stand-out.jpg"
import cherry from "./assets/image-graphic-design.jpg"
import orange from "./assets/image-photography.jpg"
import emily from "./assets/image-emily.jpg"
import thomas from "./assets/image-thomas.jpg"
import jennie from "./assets/image-jennie.jpg"
import milk from "./assets/image-gallery-milkbottles.jpg"
import cutorange from "./assets/image-gallery-orange.jpg"
import cone from "./assets/image-gallery-cone.jpg"
import cube from "./assets/image-gallery-sugarcubes.jpg"
import twitter from "./assets/icon-twitter.svg"
import pint from "./assets/icon-pinterest.svg"
import insta from "./assets/icon-instagram.svg"
import facebook from "./assets/icon-facebook.svg"

function App() {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-screen" src={hImg} alt="" />
        <div className="absolute top-7 bottom-0 left-9 right-9"> 
        <div className="flex justify-between">
          <h2 className="font-mono font-bold text-white text-2xl">sunnyside</h2>
          <div className="flex gap-4">
            <button className="text-white hover:text-[#f0f0f0] transition-colors duration-300">About</button>
            <button className="text-white hover:text-[#f0f0f0] transition-colors duration-300">Services</button>
            <button className="text-white hover:text-[#f0f0f0] transition-colors duration-300">Projects</button>
            <button className="px-4 py-2 bg-white rounded-full font-bold font-serif text-xs hover:text-white hover:bg-[#6eceff] transition-colors duration-300">CONTACT</button>
          </div>
          <div className="flex flex-col items-center absolute top-40 bottom-0 left-1/3 right-1/3">
            <h2 className="text-white font-serif font-bold text-5xl text-nowrap">WE ARE CREATIVES</h2>
            <p className="text-9xl text-white opacity-90 pt-16">&#8595;</p>
          </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0">
        <div className="bg-white h-screen flex justify-center items-center">
          <div className="flex flex-col items-start w-64">
            <h2 className=" font-serif font-bold text-3xl text-[#233040]">Transform your brand</h2>
            <p className="pt-7 pb-7 text-[#6d6c75] font-serif">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button className="text-md font-bold hover:underline">LEARN MORE</button>
          </div>
        </div>
        <img className="w-screen h-screen" src={transform} alt="" />
      </div>

      <div className="grid grid-cols-2 gap-0">
      <img className="w-screen h-screen" src={standout} alt="" />
        <div className="bg-white h-screen flex justify-center items-center">
          <div className="flex flex-col items-start w-64">
            <h2 className=" font-serif font-bold text-3xl text-[#233040]">Stand out to the right audience</h2>
            <p className="pt-7 pb-7 text-[#6d6c75] font-serif">Using a collaborative formula of designers , researchers, photographers, videographers, and copyrighters, we'll build and extend your brand in digital places.</p>
            <button className="text-md font-bold hover:underline">LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0">
        <div className="relative">
          <img className="h-screen w-screen" src={cherry} alt="" />
          <div className="flex flex-col items-center justify-center absolute top-72 bottom-0 left-1/3 right-1/3 w-60">
            <h2 className="text-[#24564b] font-serif font-bold text-2xl">Graphic Design</h2>
            <p className="text-[#306c60] font-semibold text-sm pt-10 text-center text-wrap">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
          </div>
        </div>

        <div className="relative">
          <img className="h-screen w-screen" src={orange} alt="" />
          <div className="flex flex-col items-center justify-center absolute top-72 bottom-0 left-1/3 right-1/3 w-60">
            <h2 className="text-[#24564b] font-serif font-bold text-2xl">Photography</h2>
            <p className="text-[#306c60] font-semibold text-sm pt-10 text-center text-wrap">Increase your credibility by getting the most stunning, high-quality photos that improve your buisness image.</p>
          </div>
        </div>

        
      
        
      </div>

      <div className="flex flex-col justify-center items-center m-32">
        <h2 className="text-[#acacae] font-serif text-3xl font-bold mb-20">Client Testimonials</h2>
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center w-64">
            <img className="rounded-full size-16 mb-12" src={emily} alt="" />
            <p className="text-center text-sm text-[#7e7f7e] font-bold mb-14">We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h2 className="font-bold font-serif text-lg text-[#2f3640] mb-3">Emily R.</h2>
            <h2 className="font-light font-serif text-xs text-[#c0bebd]">Marketing Director</h2>
          </div>

          <div className="flex items-center justify-center">
          <div className="flex flex-col items-center w-64">
            <img className="rounded-full size-16 mb-12" src={thomas} alt="" />
            <p className="text-center text-sm text-[#7e7f7e] font-bold mb-14">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
            <h2 className="font-bold font-serif text-lg text-[#2f3640] mb-3">Thomas S.</h2>
            <h2 className="font-light font-serif text-xs text-[#c0bebd]">Chief Operating Officer</h2>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center w-64">
            <img className="rounded-full size-16 mb-12" src={jennie} alt="" />
            <p className="text-center text-sm text-[#7e7f7e] font-bold mb-14">Incredible end result! Our sales increased over 400% when we worked with Sunnsyside. Highly Reccomended!</p>
            <h2 className="font-bold font-serif text-lg text-[#2f3640] mb-3">Jennie F.</h2>
            <h2 className="font-light font-serif text-xs text-[#c0bebd]">Buisness Owner</h2>
          </div>
        </div>
        </div>
      </div>

      <div className="grid grid-cols-4">
        <img src={milk} alt="" />
        <img src={cutorange} alt="" />
        <img src={cone} alt="" />
        <img src={cube} alt="" />
      </div>

      <div className="flex flex-col bg-[#90d4c5] h-96 items-center">
        <h2 className="font-bold font-serif text-4xl text-[#2d7363] pt-20">sunnyside</h2>
        <div className="flex justify-between w-72 mt-12">
          <button className="text-[#4e9384] font-medium hover:text-white transition-colors duration-300">About</button>
          <button className="text-[#4e9384] font-medium hover:text-white transition-colors duration-300">Services</button>
          <button className="text-[#4e9384] font-medium hover:text-white transition-colors duration-300">Projects</button>
        </div>

        <div className="flex justify-between w-40 pt-24">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={pint} alt="" />
        </div>

      </div>
    </div>
  )
}

export default App
