import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LegalTemplate {
  id: number;
  title: string;
  description: string;
  category: string;
  downloads: number;
}

interface LegalTabProps {
  templates: LegalTemplate[];
}

const LegalTab = ({ templates }: LegalTabProps) => {
  return (
    <div>
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
        {templates.map(template => (
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
    </div>
  );
};

export default LegalTab;
