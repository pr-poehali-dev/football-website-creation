import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const stats = [
    { value: "500+", label: "Активных спортсменов" },
    { value: "15", label: "Лет опыта" },
    { value: "20+", label: "Программ тренировок" },
    { value: "95%", label: "Довольных клиентов" },
  ];

  const programs = [
    {
      title: "Футбольная техника",
      description: "Развитие навыков владения мячом, дриблинг и точность передач",
      icon: "Target",
      duration: "60 мин",
    },
    {
      title: "Физическая подготовка",
      description: "Кардио, выносливость и силовые тренировки для футболистов",
      icon: "Zap",
      duration: "90 мин",
    },
    {
      title: "Тактика игры",
      description: "Командные схемы, позиционная игра и игровое мышление",
      icon: "Users",
      duration: "45 мин",
    },
    {
      title: "Скорость и реакция",
      description: "Спринты, координация и быстрота принятия решений на поле",
      icon: "Flame",
      duration: "75 мин",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background font-roboto">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Trophy" className="text-primary" size={32} />
            <span className="text-2xl font-oswald font-bold text-primary-foreground">
              PRO FOOTBALL
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#programs" className="text-secondary-foreground hover:text-primary transition-colors">
              Программы
            </a>
            <a href="#stats" className="text-secondary-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#signup" className="text-secondary-foreground hover:text-primary transition-colors">
              Записаться
            </a>
          </div>
          <Button size="sm" className="hidden md:inline-flex">
            Начать
          </Button>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-primary-foreground mb-6 leading-tight">
              ТРЕНИРУЙСЯ КАК
              <span className="text-primary block mt-2">ПРОФЕССИОНАЛ</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground mb-8 font-light">
              Индивидуальные и групповые тренировки для футболистов всех уровней
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="PlayCircle" className="mr-2" size={24} />
                Пробная тренировка
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 border-secondary-foreground hover:scale-105 transition-transform">
                <Icon name="Calendar" className="mr-2" size={24} />
                Расписание
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-oswald font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
              ПРОГРАММЫ ТРЕНИРОВОК
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите направление и развивайте свои навыки с профессиональными тренерами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon
                      name={program.icon as any}
                      className="text-primary group-hover:text-primary-foreground"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-oswald font-semibold mb-3 text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-primary font-medium">
                      <Icon name="Clock" size={16} />
                      {program.duration}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="signup" className="py-20 px-4 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-primary-foreground mb-4">
              ЗАПИШИСЬ НА ТРЕНИРОВКУ
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Оставь заявку и мы подберем для тебя оптимальную программу
            </p>
          </div>

          <Card className="animate-scale-in shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Имя
                  </label>
                  <Input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Trophy" className="text-primary" size={28} />
                <span className="text-xl font-oswald font-bold text-primary-foreground">
                  PRO FOOTBALL
                </span>
              </div>
              <p className="text-secondary-foreground/80 text-sm">
                Профессиональная футбольная академия для развития твоих навыков
              </p>
            </div>
            
            <div>
              <h4 className="font-oswald font-semibold text-primary-foreground mb-4">
                Контакты
              </h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@profootball.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Спортивная, 1
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-oswald font-semibold text-primary-foreground mb-4">
                Следи за нами
              </h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary/20 text-center text-sm text-secondary-foreground/60">
            © 2024 PRO FOOTBALL. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
