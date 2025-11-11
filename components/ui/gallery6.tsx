"use client"

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface GalleryItem {
  id: string
  title: string
  summary: string
  url: string
  image: string
}

interface Gallery6Props {
  heading?: string
  demoUrl?: string
  items?: GalleryItem[]
}

const Gallery6 = ({
  heading = "Gallery",
  demoUrl = "https://www.voicetwoo.agency",
  items = [
    {
      id: "item-1",
      title: "TechFlow Brand Revolution",
      summary:
        "Complete brand transformation that positioned TechFlow as the industry leader with 300% increase in qualified leads.",
      url: "#",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "item-2",
      title: "GreenEarth Sustainable Launch",
      summary:
        "Eco-conscious brand launch campaign that generated 50M+ social impressions and established market presence.",
      url: "#",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "item-3",
      title: "UrbanStyle Fashion Transformation",
      summary: "Fashion brand repositioning that drove 200% revenue growth through strategic creative campaigns.",
      url: "#",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "item-4",
      title: "InnovateTech Product Launch",
      summary:
        "B2B technology product launch that achieved 300% ROI through targeted digital campaigns and thought leadership.",
      url: "#",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "item-5",
      title: "FutureForward Rebranding",
      summary:
        "Complete corporate rebrand that transformed perception and increased market valuation by 150% within 12 months.",
      url: "#",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
    }
    updateSelection()
    carouselApi.on("select", updateSelection)
    return () => {
      carouselApi.off("select", updateSelection)
    }
  }, [carouselApi])

  return (
    <section className="py-20 bg-black border-t border-white/10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="section-header mb-3 text-3xl font-light md:mb-4 md:text-4xl lg:mb-6 text-white">
              {heading}
            </h2>
            <a
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg text-white/70 hover:text-white transition-colors"
            >
              View all work
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px] work-item">
                <a href={item.url} className="group flex flex-col justify-between">
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-lg">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl text-white">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-white/70 md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm text-white/80 hover:text-white transition-colors">
                    Read case study{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export { Gallery6 }
