import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLinks = [
    {
        title: "YouTube",
        href: "https://www.youtube.com/",
        icon: <Youtube className="w-5 h-5" />,
    },
    {
        title: "Github",
        href: "https://www.github.com/",
        icon: <Github className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        title: "Slack",
        href: "https://www.slack.com/",
        icon: <Slack className="w-5 h-5" />,
    },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5", className)}>
                {socialLinks?.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger>
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center justify-center rounded-full border  p-2 hover:text-white hover:border-shop-light-green hoverEffect",
                                    iconClassName,
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent
                            className={cn(
                                "bg-white text text-dark-color font-semibold",
                                tooltipClassName,
                            )}
                        >
                            {item.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialMedia;
