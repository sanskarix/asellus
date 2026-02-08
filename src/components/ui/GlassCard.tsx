import { useRef, useCallback, ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * GlassCard - Premium glassmorphism card with cursor-responsive light effect
 * 
 * The light effect follows the cursor position on hover, creating a subtle
 * radial gradient that tracks mouse movement.
 * 
 * Usage:
 *   <GlassCard hover>Content</GlassCard>
 *   <GlassCard className="p-8">Static content</GlassCard>
 */
export function GlassCard({ 
  children, 
  className, 
  hover = true,
  ...props 
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hover) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, [hover]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    // Reset to center on leave
    cardRef.current.style.setProperty('--mouse-x', '50%');
    cardRef.current.style.setProperty('--mouse-y', '50%');
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        hover ? "glass-card-hover" : "glass-card",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}
