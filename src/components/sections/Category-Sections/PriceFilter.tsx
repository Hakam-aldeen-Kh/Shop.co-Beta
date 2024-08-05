import { Range, getTrackBackground } from "react-range";
import MainTitle from "./MainTitle";

const STEP = 1;
const MIN = 0;
const MAX = 500;

interface PriceFilterProps {
  values: number[];
  setValues: (values: [number, number]) => void;
}

function PriceFilter({ values, setValues }: PriceFilterProps) {
  return (
    <div className="border-b py-2 border-gray-300">
      <MainTitle title="Price">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values as [number, number])}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-2 w-full rounded-md"
              style={{
                ...props.style,
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#000", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-5 w-5 bg-black rounded-full focus:outline-none"
            />
          )}
        />
        <div className="flex justify-between font-[ubuntu] mt-4">
          <span className="text-sm font-semibold">${values[0]}</span>
          <span className="text-sm font-semibold">${values[1]}</span>
        </div>
      </MainTitle>
    </div>
  );
}

export default PriceFilter;
