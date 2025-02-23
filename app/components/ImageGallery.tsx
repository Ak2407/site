"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Image {
  src: string;
  alt: string;
}

const ImageGallery = ({ imagesUrl }: { imagesUrl: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const images: Image[] = imagesUrl.map((url) => ({
    src: url,
    alt: "Project Image",
  }));
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is re-enabled on unmount
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

  const navigateImage = (direction: "prev" | "next") => {
    const currentIndex = images.findIndex(
      (img) => img.src === selectedImage?.src,
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <div className="flex flex-row gap-4 overflow-x-scroll py-4 max-w-[400px] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-visible">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 h-full flex flex-col justify-center items-center cursor-pointer"
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-[100px] sm:w-[139px] rounded-sm sm:rounded-lg  "
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl mx-auto px-4"
            >
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-2xl"
                  style={{ opacity: isLoading ? 0 : 1 }}
                  onLoad={() => setIsLoading(false)}
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
