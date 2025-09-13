import { Users, Bot, Trophy, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Trained",
      color: "text-accent"
    },
    {
      icon: Bot,
      number: "100+",
      label: "AI Agents Deployed",
      color: "text-primary"
    },
    {
      icon: Trophy,
      number: "100%",
      label: "Client Satisfaction",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average ROI Increase",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 rounded-full bg-secondary/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;