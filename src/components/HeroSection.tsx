const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-6xl md:text-7xl font-serif font-bold leading-tight">
            Творите
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-orange-400">
              вместе
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная экосистема для художников, музыкантов, дизайнеров и всех творцов. 
            Найдите партнёров, создавайте проекты, защищайте свои права.
          </p>
          
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,847</div>
              <div className="text-sm text-muted-foreground">Художников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">1,293</div>
              <div className="text-sm text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">4.9</div>
              <div className="text-sm text-muted-foreground">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
