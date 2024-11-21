import { PATH_KEYS } from '@/shared/config/path-keys';
import { cn } from '@/shared/lib/tailwind-merge';
import {
    NavigationMenuList,
    NavigationMenu as Nav,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/shared/ui/navigation-menu';
import Link from 'next/link';

export const NavigationMenu = () => {
    return (
        <Nav>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={cn(navigationMenuTriggerStyle())}
                    >
                        <Link href={PATH_KEYS.menu()}>Меню</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </Nav>
    );
};
