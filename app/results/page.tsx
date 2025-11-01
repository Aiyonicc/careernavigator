"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Target, BookOpen, Clock, Star, CheckCircle, AlertCircle, ArrowRight, Download } from "lucide-react"

interface FormData {
  currentRole: string
  experienceLevel: string
  industry: string
  selectedSkills: string[]
  selectedInterests: string[]
  careerGoals: string
}

export default function ResultsPage() {
  const [formData, setFormData] = useState<FormData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      const storedData = localStorage.getItem("careerFormData")
      if (storedData) {
        setFormData(JSON.parse(storedData))
      }
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Analyzing Your Profile</h2>
          <p className="text-gray-600">Our AI is generating personalized recommendations...</p>
        </div>
      </div>
    )
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Data Found</h2>
          <p className="text-gray-600 mb-6">Please complete the career assessment first.</p>
          <Link href="/career-form">
            <Button className="bg-blue-600 hover:bg-blue-700">Take Assessment</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Simulated AI recommendations based on form data
  const careerRecommendations = [
    {
      title: "Senior Software Engineer",
      match: 92,
      salary: "₹900000 - ₹1000000",
      growth: "High",
      description: "Lead development teams and architect scalable solutions",
      skills: ["JavaScript", "Python", "Leadership", "Problem Solving"],
    },
    {
      title: "Product Manager",
      match: 87,
      salary: "₹900000 - ₹1000000",
      growth: "Very High",
      description: "Drive product strategy and coordinate cross-functional teams",
      skills: ["Project Management", "Communication", "Data Analysis"],
    },
    {
      title: "Data Scientist",
      match: 83,
      salary: "₹820000 - ₹1100000",
      growth: "High",
      description: "Extract insights from data to drive business decisions",
      skills: ["Python", "Data Analysis", "Research", "Problem Solving"],
    },
    {
      title: "Cybersecurity Analyst",
      match: 80,
      salary: "₹750000 - ₹950000",
      growth: "High",
      description: "Protect organizations from digital threats through network security and vulnerability analysis.",
      skills: ["Cybersecurity", "Problem Solving", "Research", "Cloud Computing"],
    },
    {
      title: "UX/UI Designer",
      match: 78,
      salary: "₹600000 - ₹850000",
      growth: "High",
      description: "Design intuitive user experiences and interfaces for web and mobile applications.",
      skills: ["Design", "Communication", "User Research", "Creativity"],
    },
    { 
      title: "AI Engineer",
      match: 85,
      salary: "₹950000 - ₹1200000",
      growth: "Very High",
      description: "Develop and deploy machine learning and AI systems that solve complex business problems.",
      skills: ["Python", "Machine Learning", "Data Science", "Problem Solving"],
    },
    { 
      title: "Cloud Solutions Architect",
      match: 81,
      salary: "₹1000000 - ₹1300000",
      growth: "Very High",
      description: "Design scalable and secure cloud-based infrastructures using AWS, Azure, or GCP.",
      skills: ["Cloud Computing", "Architecture", "Leadership", "Communication"],
    },
    { 
      title: "Digital Marketing Specialist",
      match: 76,
      salary: "₹500000 - ₹800000",
      growth: "High",
      description: "Plan and execute marketing campaigns using SEO, social media, and analytics tools.",
      skills: ["Marketing", "Communication", "Analytics", "Creativity"],
    },
    { 
      title: "Mobile App Developer",
      match: 82,
      salary: "₹700000 - ₹950000",
      growth: "High",
      description: "Build interactive and efficient mobile applications for Android and iOS platforms.",
      skills: ["JavaScript", "Mobile Development", "Design", "Problem Solving"],
    },
    { 
      title: "Business Analyst",
      match: 79,
      salary: "₹650000 - ₹900000",
      growth: "Medium",
      description: "Bridge the gap between IT and business by analyzing processes and recommending solutions.",
      skills: ["Data Analysis", "Communication", "Leadership", "Project Management"],
    },
    { 
      title: "Cloud DevOps Engineer",
      match: 83,
      salary: "₹850000 - ₹1100000",
      growth: "Very High",
      description: "Automate deployment pipelines and manage scalable cloud environments.",
      skills: ["Cloud Computing", "Python", "Problem Solving", "Leadership"],
    },
    { 
      title: "Full Stack Developer",
      match: 86,
      salary: "₹900000 - ₹1150000",
      growth: "Very High",
      description: "Develop and maintain both front-end and back-end components of web applications.",
      skills: ["JavaScript", "Web Development", "Teamwork", "Problem Solving"],
    },
    { 
      title: "Financial Data Analyst",
      match: 77,
      salary: "₹700000 - ₹950000",
      growth: "High",
      description: "Analyze financial data to provide insights for investment and business decisions.",
      skills: ["Data Analysis", "Financial Technology", "Excel", "Communication"],
    },
    {
      title: "Healthcare Data Analyst",
      match: 75,
      salary: "₹650000 - ₹900000",
      growth: "High",
      description: "Use data to improve healthcare outcomes and operational efficiency.",
      skills: ["Data Science", "Healthcare Innovation", "Python", "Research"],
    },
  ]

  const skillGaps = [
    { skill: "Machine Learning", importance: "High", timeToLearn: "6-8 months" },
    { skill: "Cloud Architecture", importance: "Medium", timeToLearn: "3-4 months" },
    { skill: "Advanced Analytics", importance: "High", timeToLearn: "4-6 months" },
    { skill: "Team Leadership", importance: "Medium", timeToLearn: "2-3 months" },
    { skill: "Cybersecurity Fundamentals", importance: "High", timeToLearn: "5-6 months" },
    { skill: "UI/UX Design Principles", importance: "Medium", timeToLearn: "3 months" },
    { skill: "Digital Marketing Analytics", importance: "Medium", timeToLearn: "3-4 months" },
    { skill: "Mobile App Frameworks (Flutter/React Native)", importance: "High", timeToLearn: "5 months" },
    { skill: "DevOps & Automation", importance: "High", timeToLearn: "4-6 months" },
    { skill: "Financial Modeling", importance: "Medium", timeToLearn: "3 months" },
    { skill: "Healthcare Data Management", importance: "Medium", timeToLearn: "3-4 months" },
  ]

  const learningRoadmap = [
    {
      phase: "Phase 1 (Months 1-2)",
      focus: "Foundation Building",
      courses: [
        { name: "Python for Data Science", provider: "edX", duration: "4 weeks" },
        { name: "Introduction to Cloud Computing", provider: "Coursera", duration: "4 weeks" },
        { name: "Basics of Cybersecurity", provider: "Google Career Certificates", duration: "6 weeks" },
        { name: "Fundamentals of UX Design", provider: "Coursera", duration: "5 weeks" },
      ],
    },
    {
      phase: "Phase 2 (Months 3-4)",
      focus: "Skill Development",
      courses: [
        { name: "Machine Learning Specialization", provider: "Stanford / Coursera", duration: "8 weeks" },
        { name: "Advanced Web Development with React", provider: "Udemy", duration: "6 weeks" },
        { name: "Mobile App Development with Flutter", provider: "Udacity", duration: "8 weeks" },
        { name: "Digital Marketing Analytics", provider: "LinkedIn Learning", duration: "4 weeks" },
      ],
    },
    {
      phase: "Phase 3 (Months 5-6)",
      focus: "Specialization & Application",
      courses: [
        { name: "AWS Solutions Architect – Associate", provider: "AWS Training", duration: "6 weeks" },
        { name: "DevOps Engineering Foundations", provider: "IBM Skills Network", duration: "5 weeks" },
        { name: "Data Visualization with Tableau", provider: "Tableau", duration: "4 weeks" },
        { name: "AI Product Management", provider: "Udacity", duration: "5 weeks" },
      ],
    },
    { 
      phase: "Phase 4 (Months 7-8)",
      focus: "Professional Growth",
      courses: [
        { name: "Leadership and Team Building", provider: "LinkedIn Learning", duration: "3 weeks" },
        { name: "Financial Data Analysis", provider: "Coursera", duration: "4 weeks" },
        { name: "Ethical Hacking & Network Defense", provider: "EC-Council", duration: "6 weeks" },
        { name: "Healthcare Analytics with Python", provider: "edX", duration: "5 weeks" },
      ],
    },

  ]

  const filteredRecommendations = careerRecommendations.filter((career) => {
    const interests = formData.selectedInterests.map(i => i.toLowerCase());
    const skills = formData.selectedSkills.map(s => s.toLowerCase());
    const industry = formData.industry.toLowerCase();

    return (
      interests.some(interest =>
        career.title.toLowerCase().includes(interest) ||
        career.description.toLowerCase().includes(interest)
      ) ||
      skills.some(skill =>
        career.skills.map(s => s.toLowerCase()).includes(skill)
      ) ||
      career.description.toLowerCase().includes(industry) ||
      career.title.toLowerCase().includes(industry)
    );
  });

  // ✅ Filter skill gaps based on filtered career recommendations
  const filteredSkillGaps = skillGaps.filter((gap) =>
    filteredRecommendations.some((career) =>
      career.skills.some(
        (skill) => skill.toLowerCase().includes(gap.skill.toLowerCase().split(" ")[0])
      )
    )
  );

  // ✅ Filter learning roadmap based on relevant skills & interests
  const filteredLearningRoadmap = learningRoadmap
    .map((phase) => ({
      ...phase,
      courses: phase.courses.filter((course) => {
        const courseName = course.name.toLowerCase();
        return (
          filteredRecommendations.some((career) =>
            career.skills.some((skill) => courseName.includes(skill.toLowerCase()))
          ) ||
          formData.selectedInterests.some((interest) =>
            courseName.includes(interest.toLowerCase())
          ) ||
          formData.selectedSkills.some((skill) =>
            courseName.includes(skill.toLowerCase())
          )
        );
      }),
    }))
    .filter((phase) => phase.courses.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="font-semibold text-lg">CareerNavigator</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Link href="/career-form">
              <Button variant="ghost" size="sm">
                Retake Assessment
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Personalized Career Report</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your skills, interests, and goals, here are our AI-powered recommendations for your career journey.
          </p>
        </div>

        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Profile Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Current Role</p>
                <p className="font-semibold capitalize">{formData.currentRole.replace("-", " ")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Experience</p>
                <p className="font-semibold">{formData.experienceLevel} years</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Industry</p>
                <p className="font-semibold capitalize">{formData.industry}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Skills Count</p>
                <p className="font-semibold">{formData.selectedSkills.length} skills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommendations"><TrendingUp className="w-4 h-4 mr-1" />Career Recommendations</TabsTrigger>
            <TabsTrigger value="skills"><AlertCircle className="w-4 h-4 mr-1" />Skill Gaps</TabsTrigger>
            <TabsTrigger value="roadmap"><BookOpen className="w-4 h-4 mr-1" />Learning Roadmap</TabsTrigger>
          </TabsList>

          {/* Career Recommendations */}
          <TabsContent value="recommendations" className="space-y-6">
            {filteredRecommendations.length > 0 ? (
              filteredRecommendations.map((career, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{career.title}</CardTitle>
                        <CardDescription>{career.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-semibold">{career.match}%</span>
                        </div>
                        <Progress value={career.match} className="w-20" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <p><strong>Salary:</strong> {career.salary}</p>
                      <p><strong>Growth:</strong> {career.growth}</p>
                      <p><strong>Skills:</strong> {career.skills.join(", ")}</p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No direct matches found. Try selecting broader interests or skills.
              </p>
            )}
          </TabsContent>

          {/* Skill Gaps */}
          <TabsContent value="skills">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Skills to Develop</CardTitle>
                <CardDescription>These skills will help you progress faster.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredSkillGaps.length > 0 ? (
                    filteredSkillGaps.map((gap, index) => (
                      <div key={index} className="border-b pb-2">
                        <p className="font-semibold">{gap.skill}</p>
                        <p className="text-sm text-gray-600">Importance: {gap.importance} | Time to Learn: {gap.timeToLearn}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-600">
                      No specific skill gaps detected — great job! 🎉
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Roadmap */}
          <TabsContent value="roadmap">
            {filteredLearningRoadmap.length > 0 ? (
              filteredLearningRoadmap.map((phase, index) => (
                <Card key={index} className="shadow-lg mb-6">
                  <CardHeader>
                    <CardTitle>{phase.phase}</CardTitle>
                    <CardDescription>{phase.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {phase.courses.map((course, i) => (
                        <div key={i} className="border-b pb-2">
                          <p className="font-semibold">{course.name}</p>
                          <p className="text-sm text-gray-600">
                            Provider: {course.provider} | Duration: {course.duration}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="shadow-lg">
                <CardContent className="text-center py-8">
                  <p className="text-gray-600">
                    No specific learning roadmap found for your current preferences.  
                    Try expanding your interests or adding more skills.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-sm py-6 mt-10 border-t">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} CareerNavigator. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
