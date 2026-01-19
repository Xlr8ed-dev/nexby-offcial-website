import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  vibeCheck?: string;
  applyUrl: string;
}

const JobCard = ({
  title,
  department,
  location,
  type,
  description,
  vibeCheck,
  applyUrl,
}: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500 ease-out" />

      <div className="relative z-10 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
              <Briefcase size={14} className="text-blue-500" /> {department}
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
              <MapPin size={14} className="text-purple-500" /> {location}
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
              <Clock size={14} className="text-green-500" /> {type}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm mb-3">
            {description}
          </p>

          {vibeCheck && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-black px-4 py-3 rounded-r-lg">
              <p className="text-sm font-medium text-gray-900 italic">
                💡 Vibe Check: {vibeCheck}
              </p>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all transform group-hover:scale-[1.02]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
