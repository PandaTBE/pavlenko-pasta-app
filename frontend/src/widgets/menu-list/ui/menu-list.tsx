import { DishCard } from '@/entities/dish';
import { DISHES_MOCK } from '../config';

export const MenuList = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
            {DISHES_MOCK.map((item) => {
                return <DishCard key={item.id} dish={item} />;
            })}
        </div>
    );
};
