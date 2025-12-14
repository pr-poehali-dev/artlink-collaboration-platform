import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Partner {
  id: number;
  name: string;
  avatar: string;
  role: string;
  skills: string[];
  rating: number;
  reviews: number;
  location: string;
  portfolio: number;
  bio: string;
}

interface PartnersTabProps {
  partners: Partner[];
}

const PartnersTab = ({ partners }: PartnersTabProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {partners.map(partner => (
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
  );
};

export default PartnersTab;
