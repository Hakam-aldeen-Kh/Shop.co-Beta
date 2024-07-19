import { Rating } from "@material-tailwind/react";

type ReviewProps = {
  id: number;
  name: string;
  review: string;
  rating: number;
};

function Review({ id, name, review, rating }: ReviewProps) {
  return (
    <div
      key={id}
      className="text-black border-black border-opacity-20 border-[1px] w-full lg:min-w-[30%] min-h-[260px] py-[20px] px-[30px] rounded-[20px]"
    >
      <Rating value={rating} readonly />
      <div className="flex gap-x-2 items-center">
        <h2 className="my-3 font-bold">{name}</h2>
        <div className="inline-block text-center text-sm text-white rounded-full bg-[#01AB31] w-[20px] h-[20px]">
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
      <p className="text-sm">{review}</p>
    </div>
  );
}

export default Review;
