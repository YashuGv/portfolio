"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import AchievementCard from "@/components/ui/achievement-card"
import { cn } from "@/lib/utils"

export default function Achievements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const achievements = [
    {
      icon: "🚀",
      title: "Production Deployment – Pay N Chase",
      description:
        "Deployed and supported an intranet web app in production, resolving 20+ client tickets and ensuring smooth operations.",
    },
    {
      icon: "🎓",
      title: ".NET Full Stack Training – Revature",
      description: "Completed comprehensive training in ASP.NET Core, Angular, SQL, and deployment best practices.",
    },
    {
      icon: "☁️",
      title: "Azure Pilot Project – Tiger Analytics",
      description: "Contributed to designing and deploying a cloud-based proof of concept using Azure services.",
    },
  ]

  return (
    <section id="achievements" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Achievements" subtitle="Recognition and accomplishments" />

      <div className="grid grid-cols-1 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 150}ms` : "0ms",
            }}
          >
            <AchievementCard icon={achievement.icon} title={achievement.title} description={achievement.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
