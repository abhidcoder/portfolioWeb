
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Terminal, Laptop } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "JavaScript", "Core Java"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <Laptop className="h-6 w-6" />,
      skills: [
        "Flask",
        "Django",
        "React",
        "Node",
        "Express",
        "Redux",
        "Material UI",
        "Bootstrap",
        "CSS",
        "HTML",
        "XML"
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "MongoDB",
        "Firebase",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "SQLite"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        "AWS",
        "CI/CD",
        "Git",
        "GitLab",
        "Docker",
        "Postman",
        "Jenkins",
        "Trello",
        "Slack",
        "VS Code",
        "Tableau",
        "MS Excel",
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-green-50 text-primary hover:bg-green-100"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
