import { useEffect } from "react";
import { createPortal } from "react-dom";
import Block from "../assets/Block.svg";
import type { TaskCardProps } from "./TaskCard";

// TaskModal accepts the same props as TaskCard plus modal-specific ones.
// Usage:
//   <TaskModal
//     open={isOpen}
//     onClose={() => setIsOpen(false)}
//     onMarkCompleted={() => handleComplete(id)}
//     title="Iftar Prep"
//     description="Make a simple iron farm"
//     date="Mar 6th 2026"
//     activeBlocks={4}
//     totalBlocks={5}
//     summary={["Group villagers", "Collect resources"]}
//     timeNeeded="180 minutes required"
//     completed={false}
//   />

type TaskModalProps = TaskCardProps & {
  open: boolean;
  onClose: () => void;
  onToggleCompleted?: () => void;
};

const TaskModal = ({
  open,
  onClose,
  onToggleCompleted,
  title,
  description,
  date,
  activeBlocks = 0,
  summary = [],
  timeNeeded,
  completed = false,
  completedOn,
}: TaskModalProps) => {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    // Backdrop — blur + dark overlay on the fixed container itself
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className={`relative w-full max-w-md bg-(--panel-deep) ${completed ? "border border-(--gold-cream) shadow-[0_0_40px_8px_rgba(212,175,55,0.22)]" : "border border-(--gold-cream)/50 shadow-[0_0_40px_6px_rgba(212,175,55,0.15)]"} rounded-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header bar ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-(--gold-cream)/20">
          <h2 className="flex-1 text-center font-bold text-(--gold-cream) text-sm tracking-[0.15em] uppercase">
            {title} Task Details
          </h2>
          <button
            onClick={onClose}
            className="ml-4 w-8 h-8 flex items-center justify-center rounded-full border border-[#FFF1AA]/40 text-[#FFF1AA]/80 hover:border-[#FFF1AA] hover:text-[#FFF1AA] transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* ── Body ── */}
        <div className="px-6 pt-5 pb-6 flex flex-col gap-4">
          {/* Large title */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-bold text-(--color-primary) text-3xl font-mc">{title}</h1>

            {/* Blocks */}
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={Block}
                  alt={i < activeBlocks ? "active" : "inactive"}
                  className={"w-7 h-7 " + (i < activeBlocks ? "block-active" : "block-inactive")}
                />
              ))}
            </div>

            {/* Date */}
            <p className="font-semibold text-(--gold-cream) text-sm">
              Date: {date}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-(--gold-cream)/15" />

          {/* Description */}
          <div>
            <p className="font-bold text-(--color-primary) text-sm mb-1">Description</p>
            <p className="text-amber-100/80 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Summary */}
          {summary.length > 0 && (
            <div>
              <p className="font-bold text-(--color-primary) text-sm mb-2">Summary:</p>
              <ul className="space-y-1 pl-1">
                {summary.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-amber-100/80">
                    <span className="text-amber-200/60 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Time Needed */}
          {timeNeeded && (
            <div>
              <p className="font-bold text-(--color-primary) text-sm mb-1">Time Needed:</p>
              <p className="text-sm text-amber-100/80 flex items-center gap-2">
                {/* Gold people icon */}
                <img src="src/assets/clock.svg"></img>
                <span>{timeNeeded} minutes required</span>
              </p>
            </div>
          )}

          {/* Completed banner (centered with gold bars) */}
          {completed && (
            <div className="w-full flex flex-col items-center gap-2 mt-2">
              <div className="flex items-center w-full justify-center gap-4">
                <span className="h-1 rounded bg-(--gold-cream) w-20" />
                <span className="text-(--color-primary) text-2xl font-bold tracking-wide">Completed</span>
                <span className="h-1 rounded bg-(--gold-cream) w-20" />
              </div>
              <p className="text-amber-200/60 text-sm">{completedOn ?? date}</p>
            </div>
          )}

          {/* ── CTA Toggle Button ── */}
          {completed ? (
            <button
              onClick={() => onToggleCompleted?.()}
              className="mt-1 w-full py-3 rounded-full border-2 border-[#D4AF37]/60 text-[#D4AF37]/80 text-sm font-bold tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center justify-center gap-2"
            >
              <span>✓</span>
              <span>COMPLETED{completedOn ? ` · ${completedOn}` : ""}</span>
            </button>
          ) : (
            <button
              onClick={() => onToggleCompleted?.()}
              className="mt-1 w-full py-3 rounded-full bg-linear-to-r from-[#C9A227] to-[#E8C84A] text-[#0A1128] font-bold text-sm tracking-widest hover:brightness-110 transition-all shadow-[0_0_18px_2px_rgba(212,175,55,0.3)]"
            >
              MARK AS COMPLETED
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TaskModal;
