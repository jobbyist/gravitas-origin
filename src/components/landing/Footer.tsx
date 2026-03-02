import ScrollFadeIn from "./ScrollFadeIn";

const Footer = () => {
  return (
    <footer className="py-16 px-5 md:px-6 lg:px-8 border-t border-border bg-background">
      <ScrollFadeIn delay={0.1}>
        <div className="max-w-6xl mx-auto">
          {/* Prototype Notice */}
          <div className="mb-8 p-4 md:p-6 rounded-xl bg-secondary border border-border">
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center">
              <strong className="text-foreground">Prototype Version:</strong> This
              is a demonstration version of Gravitas Origin for user testing and
              evaluation purposes only. Features and functionality may change.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="#privacy"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-xs md:text-sm text-muted-foreground">•</span>
            <a
              href="#terms"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-xs md:text-sm text-muted-foreground">•</span>
            <a
              href="#cookies"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Gravitas Industries. All rights reserved.
          </p>
        </div>
      </ScrollFadeIn>
    </footer>
  );
};

export default Footer;
