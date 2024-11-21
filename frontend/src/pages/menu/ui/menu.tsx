import { PageTitle } from '@/shared/ui/page-title';
import { MenuList } from '@/widgets/menu-list';

export const Menu = () => {
    return (
        <div className="grid gap-4 container !max-w-none pb-8">
            <PageTitle>
                Добро пожаловать в меню нашего ресторана пасты!
            </PageTitle>
            <h2 className="max-w-[650px]">
                Мы рады предложить вам разнообразие блюд, вдохновленных
                итальянской кухней, где каждое из них приготовлено с любовью и
                использованием только свежих ингредиентов. Насладитесь
                традиционными вкусами или откройте для себя уникальные
                сочетания.
            </h2>
            <MenuList />
        </div>
    );
};
