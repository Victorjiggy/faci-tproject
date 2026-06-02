import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Splash = ({ delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 0, x: 0, scale: 0.3 }}
      animate={{
        opacity: [0, 1, 0],
        y: [0, -20 - Math.random() * 20],
        x: [(Math.random() - 0.5) * 30],
        scale: [0.3, 1, 0.2],
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className="absolute w-1.5 h-1.5 rounded-full bg-white/70 blur-[1px]"
    />
  );
};

const StatTube = ({ target, label, height, color, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);
  const [filling, setFilling] = useState(false);
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    setFilling(true);

    let start = 0;
    const duration = 2600;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
        setFilling(false);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      className={`
  relative
  overflow-hidden
  rounded-t-[30px]
  backdrop-blur-2xl
  shadow-[inset_0_0_25px_rgba(255,255,255,.25),0_25px_70px_rgba(0,0,0,.25)]
  w-[140px] sm:w-[150px] lg:w-[160px]
  flex-shrink-0
  ${height}
 ${className}
`}
    >
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
        <div className="absolute left-0 top-0 w-1/3 h-full bg-white/10 blur-sm" />
      </div>

      {/* ===== POURING STREAM ===== */}
      <AnimatePresence>
        {filling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-1"
          >
            <motion.div
              animate={{
                height: [0, 120],
                opacity: [0.3, 1, 0.6],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-full bg-white/60 blur-[1px] rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{
          duration: 3,
          ease: [0.12, 0.8, 0.2, 1], // more "gravity-like"
        }}
        viewport={{ once: true }}
        className="absolute bottom-0 w-full"
        style={{
          backgroundColor: color,
        }}
        onAnimationStart={() => setSplash(true)}
      >
        {/* ===== SPLASH PARTICLES ===== */}
        {splash && (
          <div className="absolute top-0 left-1/2">
            {Array.from({ length: 12 }).map((_, i) => (
              <Splash key={i} delay={i * 0.02} />
            ))}
          </div>
        )}

        <motion.div
          animate={{
            x: [0, -35, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          className="absolute -top-3 left-[-40%] w-[200%] h-7 bg-white/25 blur-md rounded-full"
        />

        

        <div className="absolute top-0 left-1/2 w-1/3 h-full bg-white/20 blur-sm" />

       
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col items-center z-10 mt-5  px-[4%]">
        <h2 className="font-bold text-5xl text-white drop-shadow-md">
          {count}
          {suffix}
        </h2>
        <p className="mt-3 uppercase text-[17px] px-4 tracking-[2px] text-gray-200">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatTube;