import { ICONS } from "@/constants/icons/icons";
 
  const Socials = () => {
    return (
        <>
        <li>
          <ICONS.INSTAGRAM className="w-[24px] fill-light-background laptop:w-[28px] laptop:fill-accent" />
        </li>
        <li>
          <ICONS.FACEBOOK className="w-[24px] fill-light-background laptop:w-[28px] laptop:fill-accent" />
        </li>
      </>
    );
};

export default Socials;
