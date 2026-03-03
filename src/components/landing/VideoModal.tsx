import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Gravitas Origin Platform Overview</DialogTitle>
          <DialogDescription>
            Learn how Gravitas Origin revolutionizes AI-powered web development
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full bg-secondary rounded-lg flex items-center justify-center">
          <video
            controls
            className="w-full h-full rounded-lg"
            poster="/placeholder.svg"
          >
            {/* TODO: Upload platform-overview.mp4 to /public/videos/ directory */}
            <source src="/videos/platform-overview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
