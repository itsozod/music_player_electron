import { Skeleton } from '@renderer/shared/components/ui/skeleton'

const ProfileImg = ({ isLoading, profile }: { isLoading: boolean; profile: any }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ) : (
        <>
          <img
            width={35}
            height={35}
            src={profile?.images[1]?.url}
            alt="ProfileImg"
            className="w-[35px] rounded-[50%]"
          />
          <div className="flex flex-col">
            <span>{profile?.display_name}</span>
            <span>{profile?.email}</span>
          </div>
        </>
      )}
    </>
  )
}

export default ProfileImg
