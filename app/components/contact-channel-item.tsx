import { Globe, Mail, Phone, type LucideIcon } from "lucide-react";
import type { ContactChannel, ContactChannelKind } from "../lib/contact-copy";

const channelIcons: Record<ContactChannelKind, LucideIcon> = {
  phone: Phone,
  email: Mail,
  website: Globe,
};

type ContactChannelItemProps = {
  channel: ContactChannel;
};

export function ContactChannelItem({ channel }: ContactChannelItemProps) {
  const Icon = channelIcons[channel.kind];
  const external = channel.kind === "website";

  return (
    <a
      href={channel.href}
      className="card-lift pressable flex min-h-11 items-start gap-4 rounded-[var(--radius-card)] border border-outline-variant bg-surface-container-lowest p-5 shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-secondary">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="text-label-md block text-on-surface-variant">
          {channel.label}
        </span>
        <span className="text-title mt-1 block text-soft-black">
          {channel.display}
        </span>
      </span>
    </a>
  );
}
