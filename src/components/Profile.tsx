interface IProfile {
  image: string
  name: string
  weight: number
  height: number
  age: number
}

const Profile = ({ image, name, weight, height, age }: IProfile) => {
  return (
    <div className="p-4 rounded-mdrounded-md shadow-md mb-10 max-w-400">
      <div>
        <img
          src={image}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-accents-2"
        />
      </div>
      <div className="text-center">
        <h2 className="font-bold tracking-tight mb-3">{name}</h2>
        <div className="flex items-center justify-center">
          <div className="px-4">
            <h3 className="font-bold tracking-tight">{weight}</h3>
            <p className="text-accents-5 text-sm">Weight</p>
          </div>
          <div className="border-l border-r border-accents-2 px-4">
            <h3 className="font-bold tracking-tight">{height}</h3>
            <p className="text-accents-5 text-sm">Height</p>
          </div>
          <div>
            <h3 className="font-bold tracking-tight px-4">{age}</h3>
            <p className="text-accents-5 text-sm">Age</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
