"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "Pay N Chase – Intranet Web Application for Payment Reconciliation",
      description:
        "Redesigned and developed an internal web application to replace an existing Windows-based tool, streamlining the payment reconciliation process for MSOs. Responsibilities included full-stack development, production deployment, and ongoing client support through ticket resolution.",
      date: "2024–Present",
      techStack: ["ASP.NET", "Angular", "SQL Server", "Azure"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/paynchase.png",
    },
    {
      title: "Claims Automation – Streamlined Claims Processing System",
      description: "Contributed to the end-to-end development and testing of an automated claims processing system, enhancing operational efficiency and reducing manual intervention. Played a key role in ensuring reliable functionality through rigorous development and QA practices.",
      date: "2023-2024",
      techStack: ["ASP.NET", "Testing", "SQL", "Azure Pipelines"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/claims-automation.png",
    },
    {
      title: "Document Conversion & Storage Management – Proof of Concept",
      description: "Designed and developed a POC system to automate document conversion and storage. The solution retrieves BLOB data from a SQL database, converts it into image formats (JPG/PNG), and stores the output either locally or in Azure Blob Storage based on configurable settings. Demonstrated flexibility, scalability, and seamless integration with cloud storage.",
      date: "2024",
      techStack: ["ASP.NET", "Testing", "SQL", "Azure"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/document-conversion.png",
    },
    {
      title: "Patient Management Tool – Healthcare Data Management",
      description:
        "Served as a Software Tester on a healthcare project focused on validating a tool for managing patient information within a database. Tested key features including adding, updating, and merging patient records via Excel uploads, ensuring data accuracy, functional reliability, and a seamless user experience.",
      date: "2023",
      techStack: ["ASP.NET", "Angular", "SQL Server"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/patient-management-tool.png",
    },
  ]

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Some of my recent work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              date={project.date}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              imageSrc={project.imageSrc}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
