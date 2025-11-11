"use client"
import React from "react"
import { motion } from "framer-motion"

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Array<{
    text: string
    image: string
    name: string
    role: string
  }>
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-lg border border-white/20 bg-black/50 backdrop-blur-sm max-w-xs w-full hover:border-white/40 transition-colors duration-300"
                  key={i}
                >
                  <div className="text-white/80 text-sm leading-relaxed mb-4">{text}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={32}
                      height={32}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium text-white text-sm">{name}</div>
                      <div className="text-white/60 text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
