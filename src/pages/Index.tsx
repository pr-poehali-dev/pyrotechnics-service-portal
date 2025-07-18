import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    guests: '',
    duration: '',
    type: 'standard',
    letters: '',
    serviceType: 'fireworks'
  });

  const services = [
    {
      title: "Холодные фонтаны",
      description: "Безопасные искрящиеся фонтаны для закрытых мероприятий",
      icon: "Sparkles",
      price: "от 15 000₽"
    },
    {
      title: "Классические фейерверки",
      description: "Яркие залпы и каскады огней в небе",
      icon: "Zap",
      price: "от 25 000₽"
    },
    {
      title: "Объемные надписи",
      description: "Пиротехнические надписи и логотипы из огня",
      icon: "Type",
      price: "7 000₽ за букву"
    }
  ];

  const portfolioImages = [
    "/img/0e13098e-21d9-4fc1-871a-e67e82d34955.jpg",
    "/img/4d3a71b1-9a75-42f6-96ae-c191bf9875cb.jpg",
    "/img/3e029854-4e79-4d12-a57b-58aa83ecd285.jpg"
  ];

  const testimonials = [
    {
      name: "Александра Петрова",
      role: "Организатор свадеб",
      text: "Невероятное шоу! Гости были в восторге от холодных фонтанов на свадьбе."
    },
    {
      name: "Михаил Воронов",
      role: "Директор ресторана",
      text: "Профессиональный подход и безупречное исполнение. Рекомендую!"
    },
    {
      name: "Елена Соколова",
      role: "Event-менеджер",
      text: "Работаем уже 3 года. Всегда высокое качество и точность в сроках."
    }
  ];

  const calculatePrice = () => {
    if (calculatorData.serviceType === 'letters') {
      const letters = parseInt(calculatorData.letters) || 0;
      return letters * 7000;
    }
    
    const basePrice = calculatorData.type === 'premium' ? 50000 : 25000;
    const guestMultiplier = parseInt(calculatorData.guests) > 100 ? 1.5 : 1;
    const durationMultiplier = parseInt(calculatorData.duration) > 30 ? 1.3 : 1;
    return Math.round(basePrice * guestMultiplier * durationMultiplier);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-luxury-gray to-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-8 w-8 text-gold" />
              <span className="text-2xl font-montserrat font-bold text-gold">PyroLux</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-gold transition-colors font-open-sans">Услуги</a>
              <a href="#portfolio" className="text-white hover:text-gold transition-colors font-open-sans">Портфолио</a>
              <a href="#reviews" className="text-white hover:text-gold transition-colors font-open-sans">Отзывы</a>
              <a href="#calculator" className="text-white hover:text-gold transition-colors font-open-sans">Расчет</a>
              <a href="#contact" className="text-white hover:text-gold transition-colors font-open-sans">Контакты</a>
            </nav>
            <Button className="bg-gold hover:bg-gold/90 text-black font-semibold">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/0e13098e-21d9-4fc1-871a-e67e82d34955.jpg')`
          }}
        ></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            PREMIUM
          </h1>
          <h2 className="text-4xl md:text-6xl font-montserrat font-light mb-8 text-white">
            Пиротехника
          </h2>
          <p className="text-xl md:text-2xl font-open-sans text-gray-300 mb-12 max-w-2xl mx-auto">
            Создаем незабываемые моменты с помощью элегантных пиротехнических шоу для самых изысканных мероприятий
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold text-lg px-8 py-4 animate-scale-in">
              <Icon name="Sparkles" className="mr-2 h-5 w-5" />
              Заказать шоу
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold text-lg px-8 py-4 animate-scale-in">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-luxury-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gold">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-open-sans">
              Профессиональные пиротехнические решения для любого события
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/50 border-gold/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name={service.icon} className="h-8 w-8 text-gold" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat text-gold">{service.title}</CardTitle>
                  <Badge className="bg-gold text-black font-semibold mx-auto">{service.price}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center font-open-sans text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gradient-to-b from-luxury-gray to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gold">
              Портфолио
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-open-sans">
              Примеры наших работ на премиальных мероприятиях
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={image} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-montserrat font-semibold text-lg mb-2">
                      Премиальное шоу
                    </h3>
                    <p className="text-gray-300 font-open-sans text-sm">
                      Эксклюзивное пиротехническое представление
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-black to-luxury-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gold">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-open-sans">
              Мнения тех, кто доверил нам свои особенные моменты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/50 border-gold/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-montserrat text-white">{testimonial.name}</CardTitle>
                  <CardDescription className="text-gold font-open-sans">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 font-open-sans italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24 bg-gradient-to-b from-luxury-gray to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gold">
              Расчет стоимости
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-open-sans">
              Получите предварительную оценку стоимости вашего пиротехнического шоу
            </p>
          </div>
          
          <Card className="bg-black/50 border-gold/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-gold text-center">
                Онлайн калькулятор
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-white font-open-sans">Тип услуги</Label>
                <div className="flex gap-4 flex-wrap">
                  <Button
                    variant={calculatorData.serviceType === 'fireworks' ? 'default' : 'outline'}
                    onClick={() => setCalculatorData({...calculatorData, serviceType: 'fireworks'})}
                    className={calculatorData.serviceType === 'fireworks' ? 'bg-gold text-black' : 'border-gold text-gold'}
                  >
                    Фейерверки
                  </Button>
                  <Button
                    variant={calculatorData.serviceType === 'fountains' ? 'default' : 'outline'}
                    onClick={() => setCalculatorData({...calculatorData, serviceType: 'fountains'})}
                    className={calculatorData.serviceType === 'fountains' ? 'bg-gold text-black' : 'border-gold text-gold'}
                  >
                    Холодные фонтаны
                  </Button>
                  <Button
                    variant={calculatorData.serviceType === 'letters' ? 'default' : 'outline'}
                    onClick={() => setCalculatorData({...calculatorData, serviceType: 'letters'})}
                    className={calculatorData.serviceType === 'letters' ? 'bg-gold text-black' : 'border-gold text-gold'}
                  >
                    Объемные буквы
                  </Button>
                </div>
              </div>
              
              {calculatorData.serviceType === 'letters' ? (
                <div className="space-y-2">
                  <Label htmlFor="letters" className="text-white font-open-sans">Количество букв</Label>
                  <Input
                    id="letters"
                    type="number"
                    placeholder="5"
                    value={calculatorData.letters}
                    onChange={(e) => setCalculatorData({...calculatorData, letters: e.target.value})}
                    className="bg-black/50 border-gold/20 text-white"
                  />
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-white font-open-sans">Количество гостей</Label>
                      <Input
                        id="guests"
                        type="number"
                        placeholder="100"
                        value={calculatorData.guests}
                        onChange={(e) => setCalculatorData({...calculatorData, guests: e.target.value})}
                        className="bg-black/50 border-gold/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration" className="text-white font-open-sans">Длительность (мин)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="15"
                        value={calculatorData.duration}
                        onChange={(e) => setCalculatorData({...calculatorData, duration: e.target.value})}
                        className="bg-black/50 border-gold/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white font-open-sans">Тип шоу</Label>
                    <div className="flex gap-4">
                      <Button
                        variant={calculatorData.type === 'standard' ? 'default' : 'outline'}
                        onClick={() => setCalculatorData({...calculatorData, type: 'standard'})}
                        className={calculatorData.type === 'standard' ? 'bg-gold text-black' : 'border-gold text-gold'}
                      >
                        Стандарт
                      </Button>
                      <Button
                        variant={calculatorData.type === 'premium' ? 'default' : 'outline'}
                        onClick={() => setCalculatorData({...calculatorData, type: 'premium'})}
                        className={calculatorData.type === 'premium' ? 'bg-gold text-black' : 'border-gold text-gold'}
                      >
                        Премиум
                      </Button>
                    </div>
                  </div>
                </>
              )}
              
              {((calculatorData.serviceType === 'letters' && calculatorData.letters) || 
                (calculatorData.serviceType !== 'letters' && calculatorData.guests && calculatorData.duration)) && (
                <div className="text-center py-6 border-t border-gold/20">
                  <p className="text-gray-400 font-open-sans mb-2">Предварительная стоимость:</p>
                  <p className="text-4xl font-montserrat font-bold text-gold">
                    {calculatePrice().toLocaleString('ru-RU')} ₽
                  </p>
                  {calculatorData.serviceType === 'letters' && (
                    <p className="text-sm text-gray-400 mt-2 font-open-sans">
                      По 7 000₽ за букву
                    </p>
                  )}
                  <p className="text-sm text-gray-400 mt-2 font-open-sans">
                    *Окончательная стоимость рассчитывается после консультации
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black to-luxury-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gold">
              Контакты
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-open-sans">
              Свяжитесь с нами для обсуждения вашего мероприятия
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-gold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-6 w-6 text-gold" />
                  <span className="text-white font-open-sans">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-6 w-6 text-gold" />
                  <span className="text-white font-open-sans">info@pyrolux.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-6 w-6 text-gold" />
                  <span className="text-white font-open-sans">Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-6 w-6 text-gold" />
                  <span className="text-white font-open-sans">Работаем 24/7</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-black/50 border-gold/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-gold">Отправить заявку</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-open-sans">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    className="bg-black/50 border-gold/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-open-sans">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="bg-black/50 border-gold/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-open-sans">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем мероприятии..."
                    className="bg-black/50 border-gold/20 text-white min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-gold hover:bg-gold/90 text-black font-semibold">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Sparkles" className="h-8 w-8 text-gold" />
              <span className="text-2xl font-montserrat font-bold text-gold">PyroLux</span>
            </div>
            <p className="text-gray-400 font-open-sans">
              Превращаем ваши мечты в яркие воспоминания
            </p>
            <p className="text-gray-500 font-open-sans text-sm mt-4">
              © 2024 PyroLux. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;