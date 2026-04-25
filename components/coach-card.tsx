import { Award, Calendar, GraduationCap, Trophy, Users } from "lucide-react";

interface Achievement {
  year: string;
  title: string;
  event: string;
}

interface CoachCardProps {
  name: string;
  title: string;
  image: string;
  specialties: string[];
  experience: string;
  certifications: string[];
  achievements: Achievement[];
  rating?: string;
  description: string;
  bio?: string[];
  education?: string[];
}

export default function CoachCard({
  name,
  title,
  image,
  specialties,
  experience,
  certifications,
  achievements,
  rating,
  description,
  bio,
  education,
}: CoachCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">

        {/* Left Panel */}
        <div className="md:w-72 flex-shrink-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-8 flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-lg overflow-hidden bg-blue-400 flex items-center justify-center mb-5 shadow-md">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover object-top" />
            ) : (
              <span className="text-white text-4xl font-bold">
                {name.split(" ").map((n) => n[0]).join("")}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-blue-200 text-sm mb-4 leading-snug">{title}</p>

          {rating && (
            <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Trophy className="h-3.5 w-3.5" />
              {rating}
            </div>
          )}

          <div className="flex items-center gap-1.5 text-blue-100 text-sm mb-6">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{experience}</span>
          </div>

          {bio ? (
            <div className="text-blue-100 text-sm leading-relaxed mb-6 space-y-3">
              {bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : (
            <p className="text-blue-100 text-sm leading-relaxed mb-6">{description}</p>
          )}

          {/* Specialties */}
          <div className="w-full text-left">
            <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold uppercase tracking-wide mb-2">
              <Users className="h-3.5 w-3.5" />
              Specialties
            </div>
            <div className="flex flex-wrap gap-1.5">
              {specialties.map((s, i) => (
                <span key={i} className="bg-blue-500/50 text-blue-100 text-xs px-2 py-0.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-8 space-y-8 overflow-auto">

          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                <GraduationCap className="h-4 w-4 text-blue-600" />
                Education
              </h4>
              <ul className="space-y-1">
                {education.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              <Award className="h-4 w-4 text-blue-600" />
              Certifications
            </h4>
            <ul className="space-y-1">
              {certifications.map((cert, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements Timeline */}
          {achievements.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                <Trophy className="h-4 w-4 text-blue-600" />
                Achievements
              </h4>
              <div className="relative">
                {/* vertical line aligned to center of dot column */}
                <div className="absolute top-0 bottom-0 left-[7rem] w-px bg-blue-200" />

                <div className="space-y-4">
                  {achievements.map((a, i) => (
                    <div key={i} className="flex items-start">
                      {/* year */}
                      <div className="w-24 flex-shrink-0 text-right pr-3 pt-1">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {a.year}
                        </span>
                      </div>
                      {/* dot centered on the line */}
                      <div className="w-8 flex-shrink-0 flex justify-center relative z-10 pt-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white" />
                      </div>
                      {/* content */}
                      <div className="flex-1 pb-3">
                        <p className="text-sm font-medium text-gray-800">{a.title}</p>
                        {a.event && (
                          <p className="text-xs text-gray-400 mt-0.5">{a.event}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
