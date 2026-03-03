import ScrollFadeIn from "./ScrollFadeIn";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="py-16 px-5 md:px-6 lg:px-8 border-t border-border bg-background">
      <ScrollFadeIn delay={0.1}>
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/originblk.png" 
              alt="Origin by Gravitas" 
              className="w-[150px] h-auto dark:hidden"
            />
            <img 
              src="/originwht.png" 
              alt="Origin by Gravitas" 
              className="w-[150px] h-auto hidden dark:block"
            />
          </div>

          {/* Prototype Notice */}
          <div className="mb-8 p-4 md:p-6 rounded-xl bg-secondary border border-border">
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center">
              <strong className="text-foreground">Prototype Version:</strong> This
              is a demonstration version of Gravitas Origin for user testing and
              evaluation purposes only. Features and functionality may change.
            </p>
          </div>

          {/* Systems Status */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="relative">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">
              Systems operational
            </span>
          </div>

          {/* Back to Homepage Link */}
          <div className="flex justify-center mb-6">
            <a
              href="https://gravitas.uno"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back To Homepage
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center mb-6">
            <ThemeToggle />
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
