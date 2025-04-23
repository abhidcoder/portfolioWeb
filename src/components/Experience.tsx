
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Superzop",
      role: "Full Stack Developer",
      location: "Bengaluru, Karnataka",
      duration: "Feb 2024 - Present",
      type: "Full time, Remote",
      responsibilities: [
        "Developed MERN stack applications and utilized advanced SQL queries to create robust Node APIs",
        "Spearheaded the development of inventory tracking and purchase-related applications using React in frontend",
        "Built the UI using Material UI and CSS",
        "Developed React based web portal business applications from scratch",
        "Implemented indexedDB and Firebase to optimize business logic, resulting in a 20% improvement in overall efficiency",
        "Critical codebase refactoring and data migration",
        "Resolved complex technical issues using advanced debugging techniques",
        "Maintained code quality through Git version control best practices",
        "Facilitated effective team communication for streamlined project progress"
      ]
    },
    {
      company: "Inspektlabs India Private Limited",
      role: "Full Stack Developer",
      location: "Delhi, India",
      duration: "August 2022 – September 2023",
      type: "Full time, Remote",
      responsibilities: [
        "Created dynamic web pages using Flask framework with secure endpoints",
        "Developed high-performance APIs using multithreading techniques, achieving 2x improvement in execution time",
        "Utilized Docker containerization (PGL) for advanced logging capabilities",
        "Implemented front-end components and PDF generation systems",
        "Designed time-based queue system using Redis and MySQL",
        "Worked with AWS, Linux shell, Git and CI/CD for deployment",
        "Implemented advanced throttling and debouncing mechanisms",
        "Contributed to OpenCV project for damaged grid detection"
      ]
    },
    {
      company: "Connect & Heal (CNH)",
      role: "Full Stack Developer",
      location: "Bengaluru, Karnataka",
      duration: "January 2022 - July 2022",
      type: "Freelancing, Remote",
      responsibilities: [
        "Developed Hospital Document Management System using MERN stack",
        "Integrated Python-based ML algorithms for disease and medicine prediction",
        "Implemented security measures using cookies and JWT Tokens",
        "Implemented Template Engines for server-side rendering",
        "Used Redux and Context APIs for state management",
        "Optimized MongoDB Schema design for better performance"
      ]
    },
    {
      company: "Take it Smart",
      role: "Full Stack Developer",
      location: "Bengaluru, Karnataka",
      duration: "Aug 2021 - Sep 2021",
      type: "Internship, Remote",
      responsibilities: [
        "Enhanced user experience using Django",
        "Developed online Learning portal system",
        "Created student dashboard and PDF reports"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Professional Experience</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                  <Building2 className="h-6 w-6" />
                  {exp.company}
                </CardTitle>
                <CardDescription>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-base text-gray-600 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <div className="font-medium text-primary mt-2">{exp.role} - {exp.type}</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm md:text-base">{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
