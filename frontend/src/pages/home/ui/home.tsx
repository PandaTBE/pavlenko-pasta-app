import { pastaMain } from '@/shared/assets';
import { PATH_KEYS } from '@/shared/config/path-keys';
import { Button } from '@/shared/ui/button';
import { PageTitle } from '@/shared/ui/page-title';
import Image from 'next/image';
import Link from 'next/link';

export const Home = () => {
    return (
        <div className="grid gap-4 -mt-28">
            <section className=" h-screen overflow-hidden">
                <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="h-full overflow-hidden">
                        <Image
                            src={pastaMain}
                            alt={'pastaMain'}
                            className="object-cover w-full object-center h-full"
                        />
                    </div>
                    <div className="flex justify-center grow px-6 gap-6 flex-col">
                        <PageTitle className="text-5xl font-semibold ">
                            Свежая паста
                            <br /> с доставкой
                            <br />
                            до вашей двери
                        </PageTitle>
                        <Link href={PATH_KEYS.menu()}>
                            <Button variant="destructive" className="w-max">
                                Заказать сейчас
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
