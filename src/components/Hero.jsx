
const Hero = () => {
    return (
     
        <div id="home" className="hero md:h-[calc(100vh-96px)] px-[10%]">
          <div className="hero-content grid grid-cols-1 w-full">
         
                <div className="flex items-center gap-3">
                

                    <p className="text-3xl md:text-8xl">Building Scalable Modern Application for the Future</p>
                   
                </div>
                
    
                <div className="flex gap-3 pt-4">
                    <button className="btn text-zinc-100 border-0 hover:bg-[#27e0d3] bg-[#29a79ce3]  ">
                    Get a Free Consultation
                    </button>
                <a href="#about">
                    <button className="btn btn-neutral btn-outline">Scroll Down</button>
                </a>
                </div>
            </div>
           
           
       
        </div>
 
    );
  };
  
  export default Hero;