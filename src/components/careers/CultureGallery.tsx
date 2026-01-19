import { motion } from "framer-motion";

const CultureGallery = () => {
  // Placeholder frames for now
  const events = [
    { title: "The Friday Hackathon", size: "large", color: "bg-blue-100" },
    { title: "Gaming Night", size: "small", color: "bg-purple-100" },
    { title: "Team Building", size: "small", color: "bg-orange-100" },
    { title: "The Annual Offsite", size: "wide", color: "bg-green-100" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`
                        relative rounded-2xl overflow-hidden group cursor-pointer border border-gray-100
                        ${event.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                        ${event.size === "wide" ? "md:col-span-2" : ""}
                        ${event.color}
                    `}
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
            {/* Placeholder for actual image */}
            <span className="opacity-50">Upload: {event.title}</span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {event.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CultureGallery;
