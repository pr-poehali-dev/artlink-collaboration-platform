import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersTab from '@/components/PartnersTab';
import ProjectsTab from '@/components/ProjectsTab';
import LegalTab from '@/components/LegalTab';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<'partners' | 'projects' | 'legal'>('partners');

  const skills = ['Живопись', 'Скульптура', 'Фотография', 'Дизайн', 'Музыка', 'Видео', 'Танец', 'Театр'];
  
  const partners = [
    {
      id: 1,
      name: 'Анна Петрова',
      avatar: 'АП',
      role: 'Художник-иллюстратор',
      skills: ['Живопись', 'Дизайн'],
      rating: 4.9,
      reviews: 47,
      location: 'Москва',
      portfolio: 3,
      bio: 'Специализируюсь на концептуальной живописи и цифровой иллюстрации'
    },
    {
      id: 2,
      name: 'Дмитрий Волков',
      avatar: 'ДВ',
      role: 'Фотограф',
      skills: ['Фотография', 'Видео'],
      rating: 4.8,
      reviews: 32,
      location: 'Санкт-Петербург',
      portfolio: 5,
      bio: 'Документальная и арт-фотография, видеопроизводство'
    },
    {
      id: 3,
      name: 'Мария Соколова',
      avatar: 'МС',
      role: 'Скульптор',
      skills: ['Скульптура', 'Дизайн'],
      rating: 5.0,
      reviews: 28,
      location: 'Екатеринбург',
      portfolio: 4,
      bio: 'Современная скульптура, инсталляции, работа с нетрадиционными материалами'
    },
    {
      id: 4,
      name: 'Александр Новиков',
      avatar: 'АН',
      role: 'Музыкант-композитор',
      skills: ['Музыка'],
      rating: 4.7,
      reviews: 51,
      location: 'Казань',
      portfolio: 6,
      bio: 'Экспериментальная электронная музыка для перформансов и инсталляций'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Выставка "Городские метаморфозы"',
      author: 'Кураторская группа "Арт-Пульс"',
      description: 'Ищем художников для участия в групповой выставке современного искусства',
      needs: ['Живопись', 'Скульптура', 'Фотография'],
      deadline: '15 января 2025',
      members: 8,
      status: 'Набор участников'
    },
    {
      id: 2,
      title: 'Мультимедийный перформанс',
      author: 'Театральная лаборатория',
      description: 'Создание междисциплинарного проекта на стыке театра, музыки и видео-арта',
      needs: ['Музыка', 'Видео', 'Танец'],
      deadline: '1 февраля 2025',
      members: 5,
      status: 'В работе'
    },
    {
      id: 3,
      title: 'Арт-резиденция в горах',
      author: 'Фонд поддержки искусств',
      description: 'Двухнедельная резиденция для художников всех направлений с кураторской поддержкой',
      needs: ['Живопись', 'Фотография', 'Дизайн'],
      deadline: '20 декабря 2024',
      members: 12,
      status: 'Приём заявок'
    }
  ];

  const legalTemplates = [
    {
      id: 1,
      title: 'Договор соавторства',
      description: 'Регулирует права и обязанности при создании совместного произведения',
      category: 'Авторское право',
      downloads: 342
    },
    {
      id: 2,
      title: 'Соглашение о коллаборации',
      description: 'Определяет условия творческого сотрудничества между художниками',
      category: 'Сотрудничество',
      downloads: 287
    },
    {
      id: 3,
      title: 'Договор на проведение выставки',
      description: 'Регламентирует отношения между художником и галереей/площадкой',
      category: 'Выставки',
      downloads: 198
    },
    {
      id: 4,
      title: 'Лицензионное соглашение',
      description: 'Передача прав на использование произведения',
      category: 'Авторское право',
      downloads: 421
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => partner.skills.includes(skill));
    return matchesSearch && matchesSkills;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-orange-50/20">
      <Header activeView={activeView} setActiveView={setActiveView} />
      
      <HeroSection />

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              placeholder="Поиск по имени, навыкам, локации..." 
              className="pl-12 h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <Badge
                key={skill}
                variant={selectedSkills.includes(skill) ? 'default' : 'outline'}
                className="cursor-pointer hover-scale px-4 py-2"
                onClick={() => {
                  setSelectedSkills(prev => 
                    prev.includes(skill) 
                      ? prev.filter(s => s !== skill)
                      : [...prev, skill]
                  );
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs value={activeView} onValueChange={(v) => setActiveView(v as any)} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="partners" className="text-lg">
              <Icon name="Users" size={18} className="mr-2" />
              Партнёры
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-lg">
              <Icon name="Briefcase" size={18} className="mr-2" />
              Проекты
            </TabsTrigger>
            <TabsTrigger value="legal" className="text-lg">
              <Icon name="FileText" size={18} className="mr-2" />
              Договоры
            </TabsTrigger>
          </TabsList>

          <TabsContent value="partners" className="animate-fade-in">
            <PartnersTab partners={filteredPartners} />
          </TabsContent>

          <TabsContent value="projects" className="animate-fade-in">
            <ProjectsTab projects={projects} skills={skills} />
          </TabsContent>

          <TabsContent value="legal" className="animate-fade-in">
            <LegalTab templates={legalTemplates} />
          </TabsContent>
        </Tabs>
      </section>

      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-pink-500 rounded-xl rotate-12" />
                <span className="font-bold font-serif">ArtLink</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная экосистема для творческих проектов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О проекте</li>
                <li>Возможности</li>
                <li>Тарифы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Сообщество</h4>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Icon name="Github" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ArtLink. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
