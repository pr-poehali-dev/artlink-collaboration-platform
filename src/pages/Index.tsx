import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-pink-500 rounded-2xl rotate-12 flex items-center justify-center">
                <Icon name="Palette" className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-serif">ArtLink</h1>
                <p className="text-xs text-muted-foreground">Творческая экосистема</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => setActiveView('partners')}>
                <Icon name="Users" size={16} className="mr-2" />
                Партнёры
              </Button>
              <Button variant="ghost" onClick={() => setActiveView('projects')}>
                <Icon name="Briefcase" size={16} className="mr-2" />
                Проекты
              </Button>
              <Button variant="ghost" onClick={() => setActiveView('legal')}>
                <Icon name="FileText" size={16} className="mr-2" />
                Договоры
              </Button>
              <Button className="bg-gradient-to-r from-primary to-pink-500">
                <Icon name="User" size={16} className="mr-2" />
                Мой профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
            
            {/* Stats */}
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

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        {/* Search and Filters */}
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

        {/* Content Tabs */}
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

          {/* Partners Tab */}
          <TabsContent value="partners" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPartners.map(partner => (
                <Card key={partner.id} className="hover-scale transition-all border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white font-bold">
                          {partner.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl font-serif">{partner.name}</CardTitle>
                            <CardDescription className="text-sm">{partner.role}</CardDescription>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                            <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                            <span className="text-sm font-bold">{partner.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="MapPin" size={12} />
                            {partner.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="MessageSquare" size={12} />
                            {partner.reviews} отзывов
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{partner.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {partner.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1">
                            <Icon name="Eye" size={16} className="mr-2" />
                            Портфолио ({partner.portfolio})
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle className="font-serif text-2xl">Портфолио {partner.name}</DialogTitle>
                            <DialogDescription>
                              Работы и достижения художника
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid grid-cols-3 gap-4 py-4">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                              <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-lg" />
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline">
                        <Icon name="MessageCircle" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="animate-fade-in space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold">Активные проекты</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-primary to-pink-500">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать проект
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">Новый проект</DialogTitle>
                    <DialogDescription>
                      Расскажите о своём проекте и найдите соавторов
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div>
                      <Label>Название проекта</Label>
                      <Input placeholder="Введите название" />
                    </div>
                    <div>
                      <Label>Описание</Label>
                      <Textarea placeholder="Опишите суть проекта, цели и задачи" rows={4} />
                    </div>
                    <div>
                      <Label>Требуемые навыки</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите навыки" />
                        </SelectTrigger>
                        <SelectContent>
                          {skills.map(skill => (
                            <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Создать проект</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {projects.map(project => (
                <Card key={project.id} className="hover-scale transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-serif">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.author}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-green-50">
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium">Требуются:</span>
                      {project.needs.map(skill => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={14} />
                          {project.members} участников
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          до {project.deadline}
                        </span>
                      </div>
                      <Button>
                        <Icon name="Send" size={16} className="mr-2" />
                        Подать заявку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Legal Tab */}
          <TabsContent value="legal" className="animate-fade-in">
            <div className="mb-8 bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif mb-2">Защитите своё творчество</h3>
                  <p className="text-muted-foreground">
                    Готовые юридические шаблоны договоров для безопасного сотрудничества. 
                    Все документы проверены юристами и адаптированы под российское законодательство.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {legalTemplates.map(template => (
                <Card key={template.id} className="hover-scale transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="FileText" className="text-primary" size={20} />
                      </div>
                      <div>
                        <CardTitle className="font-serif">{template.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2">{template.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Icon name="Download" size={12} />
                        {template.downloads} загрузок
                      </span>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={14} className="mr-2" />
                        Скачать шаблон
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
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
