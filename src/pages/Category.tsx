import { Breadcrumbs, Filter } from "@components/sections"

function Category() {
  return (
    <>
      <Breadcrumbs/>
      <div className="container w-full">
        <Filter/>
      </div>
    </>
  )
}

export default Category
