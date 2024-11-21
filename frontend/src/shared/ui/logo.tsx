import Image from 'next/image';
import { pastaLogo } from '../assets';

export const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image src={pastaLogo} alt={'pastaLogo'} width={55} />
            <span className="font-bold">Pasta Express</span>
        </div>
    );
};
