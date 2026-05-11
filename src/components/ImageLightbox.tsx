import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  title?: string;
}

const ImageLightbox = ({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious,
  title 
}: ImageLightboxProps) => {
  const showNavigation = images.length > 1;
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const isLoaded = loaded[currentIndex] || false;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-2 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-background/80 hover:bg-background h-10 w-10 md:h-11 md:w-11"
            onClick={onClose}
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          {/* Previous Button */}
          {showNavigation && onPrevious && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background h-10 w-10 md:h-11 md:w-11"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-5 w-5 md:h-8 md:w-8" />
            </Button>
          )}

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12"
            >
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              )}
              <img
                src={images[currentIndex]}
                alt={title || `Image ${currentIndex + 1}`}
                className={`
                  max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-lg
                  transition-opacity duration-500
                  ${isLoaded ? "opacity-100" : "opacity-0"}
                `}
                loading="eager"
                onLoad={() =>
                  setLoaded((prev) => ({ ...prev, [currentIndex]: true }))
                }
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          {showNavigation && onNext && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background h-10 w-10 md:h-11 md:w-11"
              onClick={onNext}
            >
              <ChevronRight className="h-5 w-5 md:h-8 md:w-8" />
            </Button>
          )}

          {/* Image Counter */}
          {showNavigation && (
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <p className="text-xs md:text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
