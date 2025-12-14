import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeView: 'partners' | 'projects' | 'legal';
  setActiveView: (view: 'partners' | 'projects' | 'legal') => void;
}

const Header = ({ activeView, setActiveView }: HeaderProps) => {
  return (
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
  );
};

export default Header;
