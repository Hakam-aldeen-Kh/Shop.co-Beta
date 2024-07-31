import { Breadcrumbs, Filter } from "@components/sections"
import Products from "@components/sections/Category-Sections/Products"

function Category() {
  return (
    <>
      <Breadcrumbs/>
      <div className="container w-full flex justify-between">
        <Filter/>
        <Products/>
      </div>
    </>
  )
}

export default Category
