import { UserAvatar, userApi } from '@/entities/user';
import { makeFullName } from '@/shared/lib/full-name-format';
import { PageTitle } from '@/shared/ui/page-title';
import { ProfileCard } from '@/widgets/profile-card';

export const Profile = async () => {
    const profile = await userApi.userProfileQuery();

    if (!profile) {
        return null;
    }

    return (
        <div className="grid gap-5 container !max-w-none pb-8">
            <div className="flex items-center gap-3">
                <UserAvatar
                    firstName={profile.first_name}
                    lastName={profile.last_name}
                    secondName={profile.second_name}
                    avatarProps={{
                        className: 'text-2xl w-16 h-16',
                    }}
                />
                <PageTitle className="font-medium">
                    {makeFullName({
                        firstName: profile.first_name,
                        lastName: profile.last_name,
                        middleName: profile.second_name,
                    })}
                </PageTitle>
            </div>
            <ProfileCard userProfile={profile} />
        </div>
    );
};
