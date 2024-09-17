import { ICONS } from "@/constants/icons/icons";

export default function Loading() {
  return (
    <div className="flex h-screen flex-grow items-center justify-center p-2">
      <ICONS.LOGO_LOADER className="h-[400px] w-[400px] animate-pulse" />
    </div>
  );
}
