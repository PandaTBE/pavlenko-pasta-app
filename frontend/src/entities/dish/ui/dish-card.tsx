import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import { Dish } from '../model/types';
import Image from 'next/image';

export const DishCard = ({ dish }: { dish: Dish }) => {
    return (
        <Card>
            <CardHeader className="grid place-content-center">
                <Image
                    src={dish.img}
                    alt={dish.name}
                    width={300}
                    height={300}
                    className="object-cover w-full object-center h-full"
                />
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <CardTitle>{dish.name}</CardTitle>
                    <CardDescription>{dish.description}</CardDescription>
                </div>
            </CardContent>
        </Card>
    );
};
