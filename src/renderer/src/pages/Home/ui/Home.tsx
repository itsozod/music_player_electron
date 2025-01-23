import useSWR from 'swr'

const Home = () => {
  const { data, isLoading } = useSWR('me/top/tracks?time_range=long_term&limit=5')
  console.log(data)

  return (
    <div className=" flex flex-col gap-1 p-2">
      <h1 className="text-[28px]">Top Tracks</h1>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {data?.items?.map((item) => {
          return (
            <div>
              <img
                width={300}
                height={300}
                className="object-cover rounded-sm"
                src={item?.album?.images?.[1]?.url}
              />
              <p> {item?.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
