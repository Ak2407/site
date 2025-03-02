"use client";

import { useState, useEffect } from "react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
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
      {/* Image Thumbnails */}
      <div className="flex flex-row gap-4 overflow-x-scroll py-4 max-w-[400px] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
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
              className="w-[100px] sm:w-[139px] rounded-sm sm:rounded-lg"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl mx-auto px-4 flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-2xl"
                  style={{ opacity: isLoading ? 0 : 1 }}
                  onLoad={() => setIsLoading(false)}
                />
              </div>

              {/* Navigation Arrows (Shown only if there are multiple images) */}
              {images.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-6 lg:hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                    className="p-3 rounded-full bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    aria-label="Previous image"
                  >
                    <MoveLeftIcon className="w-7 h-7 text-white drop-shadow-md" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                    className="p-3 rounded-full bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    aria-label="Next image"
                  >
                    <MoveRightIcon className="w-7 h-7 text-white drop-shadow-md" />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
