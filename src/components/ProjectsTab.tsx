import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Project {
  id: number;
  title: string;
  author: string;
  description: string;
  needs: string[];
  deadline: string;
  members: number;
  status: string;
}

interface ProjectsTabProps {
  projects: Project[];
  skills: string[];
}

const ProjectsTab = ({ projects, skills }: ProjectsTabProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ProjectsTab;
