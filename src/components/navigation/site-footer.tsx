import { profile } from "@/data/profile";
import { ProfileLinks } from "@/components/ui/profile-links";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule">
      <div className="mx-auto flex max-w-[72rem] flex-col gap-4 px-5 py-10 text-sm text-ink-2 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          {profile.name}, {profile.location}
        </p>
        <ProfileLinks />
      </div>
    </footer>
  );
}
