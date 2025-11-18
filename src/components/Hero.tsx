import headshotImg from "@/assets/rishi.jpeg";

const Hero = () => {

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tight">
              Web Developer & 
              <br />
              <span className="text-foreground/60">UI/UX Designer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Hi, I'm Rishi Choudhary, a passionate designer and developer creating intuitive digital experiences using design + technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Web Design</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Shopify Development</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">UI/UX Design</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-96 h-[28rem] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src={headshotImg}
                  alt="Rishi Choudhary"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
