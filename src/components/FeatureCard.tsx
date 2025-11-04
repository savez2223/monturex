import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  downloadText: string;
  filename: string;
  note: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  bullets, 
  downloadText, 
  filename,
  note 
}: FeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_hsl(173_80%_40%_/_0.2)]">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <CardTitle className="text-2xl mt-4">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="relative space-y-3">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{bullet}</span>
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="relative flex flex-col gap-3">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
          size="lg"
        >
          <Download className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
          {downloadText}
        </Button>
        <p className="text-xs text-muted-foreground text-center">{note}</p>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
