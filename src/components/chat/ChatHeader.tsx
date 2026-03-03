const ChatHeader = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center gap-3">
        <img 
          src="/origininverted.png" 
          alt="Origin by Gravitas" 
          className="w-[150px] h-auto dark:hidden"
        />
        <img 
          src="/origin.png" 
          alt="Origin by Gravitas" 
          className="w-[150px] h-auto hidden dark:block"
        />
      </div>
    </header>
  );
};

export default ChatHeader;
