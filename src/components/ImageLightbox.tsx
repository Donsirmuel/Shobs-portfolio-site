import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-2">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 bg-background/80 hover:bg-background"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          {showNavigation && onPrevious && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background"
              onClick={onPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center p-12"
            >
              <img
                src={images[currentIndex]}
                alt={title || `Image ${currentIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          {showNavigation && onNext && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background"
              onClick={onNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          {/* Image Counter */}
          {showNavigation && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full">
              <p className="text-sm font-medium">
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
